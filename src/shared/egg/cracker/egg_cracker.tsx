import { RunService, TweenService, UserInputService, Workspace } from "@rbxts/services"
import { getCameraWorldBounds, getEggModel, getEggState, getRelativeCenter, GridMaps } from "../egg_utils"
import { createEggPopTween } from "shared/signals/animations"
import { icon } from "shared/help/icons"
import { hatchedDropperAtom } from "shared/signals/atoms"
import { buyEggSig } from "shared/signals/server_signals"
import { getPlayer } from "shared/help/assist"
import { Remotes } from "shared/signals/remotes"
import { Atom } from "shared/signals/atom"
import { mountFrame } from "shared/ui/create_root"
import { EggCrackerInfo } from "./egg_cracker_info_ui"
import React from "@rbxts/react"

const MAX_CLICKS = 3
const faces = [Enum.NormalId.Front, Enum.NormalId.Back, Enum.NormalId.Left, Enum.NormalId.Right]

export class EggCracker {
    camera: Camera
    clicks = 0
    atom = new Atom({ open: false })

    constructor() {
        this.camera = Workspace.Camera

        UserInputService.InputBegan.Connect((inp, gpe) => {
            if (gpe) return
            const isPrimaryInput =
                inp.UserInputType === Enum.UserInputType.MouseButton1 ||
                inp.UserInputType === Enum.UserInputType.Touch;
            if (isPrimaryInput) {
                this.onClickEggs()
            }
        })

        buyEggSig.Connect((_player, eggNo, count) => {
            this.startCracking(eggNo, count as 1)
        })
        mountFrame(<EggCrackerInfo cracker={this} />, 2)
    }

    onClickEggs() {
        if (!this.eggs) return
        if (this.clicks < MAX_CLICKS) {
            this.playCrackAnimation();
            this.popEggSize();
            const trans = 1 - (this.clicks) / MAX_CLICKS
            this.eggs.forEach(egg => {
                egg.GetDescendants().forEach(c => {
                    if (c.IsA('Decal')) c.Transparency = trans;
                })
            })
        } else {
            const petIds = this.cords.map(() => 1)
            hatchedDropperAtom.update({ cords: this.cords, petIds, open: false })
            Remotes.Client.Get('BuyEgg').SendToServer(this.eggNo, this.eggCount)
            this.stopCracking()
        }
        this.clicks++
    }

    targetSize = new Vector3()
    connection?: RBXScriptConnection
    eggs?: BasePart[]
    cords = [] as number[][]
    eggNo = 0
    eggCount = 0
    startCracking(eggNo: number, count: keyof typeof GridMaps) {
        this.stopCracking()
        this.clicks = 0
        this.eggNo = eggNo
        this.eggCount = count
        this.atom.update({ open: true })
        getPlayer().SetAttribute('isCrackingEgg', true)
        const { modelName } = getEggState(eggNo)
        const eggPart = getEggModel(modelName)
        this.cords = GridMaps[count]
        this.eggs = this.cords.map(p => {
            const part = eggPart.Clone()
            part.Parent = game.Workspace
            part.CanCollide = false
            part.Anchored = true
            for (const face of faces) {
                const crack1 = new Instance("Decal");
                crack1.AddTag('crack')
                crack1.Texture = icon('egg_crack')
                crack1.Face = face
                crack1.Transparency = 1;
                crack1.Parent = part;
            }
            const { size } = getCameraWorldBounds(5)
            const maxCord = math.min(size.X, size.Y)
            const cols = math.ceil(math.sqrt(count))
            this.targetSize = new Vector3(maxCord, maxCord, maxCord).div(cols).mul(0.8)
            const popAnim = createEggPopTween(part, this.targetSize, new Vector3(0, 0, 0))
            popAnim.Play()
            return part
        })

        const SPIN_SPEED = math.rad(20)
        let currentRotation = 0
        this.connection = RunService.RenderStepped.Connect((dt) => {
            for (let i = 0; i < this.cords!.size(); i++) {
                const camera = Workspace.CurrentCamera!;
                const [cord, egg] = [this.cords![i], this.eggs![i]]
                let { center, size } = getCameraWorldBounds(5)

                const hX = (size.X * 0.95) / 2;
                const hY = (size.Y * 0.95) / 2;

                const camCF = camera.CFrame;
                const topLeft = new CFrame(center)
                    .add(camCF.RightVector.mul(-hX))
                    .add(camCF.UpVector.mul(hY)).Position;
                const bottomRight = new CFrame(center)
                    .add(camCF.RightVector.mul(hX))
                    .add(camCF.UpVector.mul(-hY)).Position;

                const pos = getRelativeCenter(topLeft, bottomRight, new Vector2(cord[0], cord[1]))
                currentRotation += SPIN_SPEED * dt;
                const baseCF = new CFrame(pos).mul(CFrame.Angles(0, currentRotation, 0));
                egg.CFrame = baseCF.mul(this.shakeOffset);
            }
        })
    }

    isPopping = false
    popEggSize() {
        if (this.isPopping) return
        this.isPopping = true
        if (!this.eggs) return
        const tweens = [] as Tween[]
        for (const egg of this.eggs) {
            const punchSize = this.targetSize.mul(1.2);
            const info = new TweenInfo(0.1, Enum.EasingStyle.Back, Enum.EasingDirection.Out, 0, true);
            const tween = TweenService.Create(egg, info, { Size: punchSize });
            tweens.push(tween)
        }
        tweens[0].Completed.Connect(() => {
            this.isPopping = false
        })
        tweens.forEach(tween => {
            tween.Play()
        })
    };

    // Define this outside your loop
    shakeOffset = new CFrame();
    isCracking = false
    playCrackAnimation() {
        if (this.isCracking) return
        this.isCracking = true
        const info = new TweenInfo(0.03, Enum.EasingStyle.Quad, Enum.EasingDirection.Out, 0, true);

        const tempValue = new Instance("NumberValue");
        const Value = math.rad(15 + (this.clicks + 1) * 5)
        const tween = TweenService.Create(tempValue, info, { Value });

        const connection = tempValue.GetPropertyChangedSignal("Value").Connect(() => {
            this.shakeOffset = CFrame.Angles(0, 0, tempValue.Value).mul(CFrame.Angles(math.random() * 0.1, 0, 0));
        });
        tween.Completed.Connect(() => {
            connection.Disconnect();
            this.shakeOffset = new CFrame();
            tempValue.Destroy();
            this.isCracking = false
        });
        tween.Play();
    }

    stopCracking() {
        this.atom.update({ open: false })
        getPlayer().SetAttribute('isCrackingEgg', false)
        this.connection?.Disconnect()
        this.eggs?.forEach(egg => {
            egg.Destroy()
        })
        this.eggs = undefined
    }

}
