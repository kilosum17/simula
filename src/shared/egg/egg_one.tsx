import { ReplicatedStorage, RunService } from "@rbxts/services";
import { ensureInstance, getEggsFolder, getPlayer } from "shared/help/assist";
import { getEggModel, getEggState } from "./egg_utils";
import { Remotes } from "shared/signals/remotes";
import { mountBillboardGui } from "shared/ui/create_root";
import React from "@rbxts/react";
import { Atom } from "shared/signals/atom";
import { EggPrompUI } from "./ui/egg_prompt_ui";
import { getCostUiData } from "shared/ui/comps/CostUI";
import { formatNumber } from "shared/help/helpers";
import { EggPetListUi } from "./ui/egg_pets_list_ui";
import { randInt } from "shared/help/math";
import { buyEggSig } from "shared/signals/server_signals";
import { getPlayerAtts } from "shared/signals/player_attributes";
import { canNotAtom } from "shared/signals/atoms";



export type TEggBody = Model & {
    Egg: BasePart,
    EggWhite: BasePart,
    Part: BasePart,
    Base: BasePart,
    Screen: Part & {
        SurfaceGui: SurfaceGui & { Frame: Frame & { image: ImageLabel, text: TextLabel } }
    }
}

const eggStand = ensureInstance({ path: 'instance.models.egg_stand2', root: ReplicatedStorage, create: false }) as TEggBody

export class EggOne {
    stand: TEggBody
    pos: Vector3
    lookAt: Vector3
    eggNo: number
    proximityPrompt: ProximityPrompt
    atom = new Atom({ open: false })

    constructor(pos: Vector3, lookAt: Vector3, eggNo: number) {
        this.pos = pos
        this.eggNo = eggNo
        this.lookAt = lookAt
        const res = this.createStand()
        this.stand = res.stand
        this.proximityPrompt = res.prompt

        // update priceui
        this.updateEgg()
        getPlayer().AttributeChanged.Connect(() => {
            this.updateEgg()
        })

        // rotate egg
        const rotationSpeed = math.rad(randInt(60, 70));
        RunService.Heartbeat.Connect((dt: number) => {
            const part = this.currentEgg
            if (!part) return
            part.CFrame = part.CFrame.mul(CFrame.Angles(0, rotationSpeed * dt, 0));
        });

    }

    createStand() {
        const stand = eggStand.Clone() as TEggBody
        stand.Name = `egg-${this.eggNo}`
        let cframe = new CFrame(this.pos.add(new Vector3(0, 4.5, 0)), this.lookAt)
        cframe = cframe.mul(CFrame.Angles(0, math.rad(-90), 0))
        stand.PivotTo(cframe)
        stand.Parent = getEggsFolder()

        const prompt = new Instance('ProximityPrompt')
        prompt.Parent = stand.Screen
        // prompt.ActionText = "E"
        prompt.ObjectText = "Mysterious Egg"
        prompt.ActionText = "Unlock Egg"
        // prompt.HoldDuration = 1
        prompt.KeyboardKeyCode = Enum.KeyCode.E
        prompt.MaxActivationDistance = 10
        prompt.Style = Enum.ProximityPromptStyle.Custom;
        prompt.RequiresLineOfSight = false

        prompt.PromptShown.Connect(() => {
            this.showUI()
        });
        prompt.PromptHidden.Connect(() => {
            this.hideUI()
        });
        prompt.Triggered.Connect(() => {
            this.eggClicked()
        })

        mountBillboardGui({
            part: stand.Part, alwaysOnTop: true, extendsOffset: new Vector3(0, 0, 0),
            size: new UDim2(0, 80, 0, 80), comp: <EggPrompUI egg={this} />
        })

        mountBillboardGui({
            part: stand.Part, alwaysOnTop: true, extendsOffset: new Vector3(0, 2, 0),
            size: new UDim2(0, 400, 0, 80), comp: <EggPetListUi egg={this} />
        })

        return { stand, prompt }
    }

    eggClicked() {
        print("Pressed", this.stand.Name);
        const { eggCost, available, unlocked } = getEggState(this.eggNo)
        if (!available) return
        if (!unlocked) {
            Remotes.Client.Get('UnlockEgg').SendToServer(this.eggNo)
            return
        }
        const eggCount = 1
        const { coins } = getPlayerAtts()
        if ((eggCost * eggCount) > coins) {
            canNotAtom.update({ open: true, kind: "EGG" })
        } else {
            this.hideUI()
            buyEggSig.Fire(getPlayer(), this.eggNo, eggCount)
        }
    }

    currentEggName = ''
    currentEgg?: BasePart
    updateEgg() {
        const { available, unlocked, eggCost: cost, modelName } = getEggState(this.eggNo)
        this.proximityPrompt.Enabled = available

        // ui
        const frame = this.stand.Screen.SurfaceGui.Frame
        let background = new Color3()
        let text = ''
        let showCostUi = false
        if (!available) {
            background = Color3.fromHex('353242')
            text = 'Locked!'
        } else if (!unlocked) {
            background = Color3.fromHex('84ff00')
            text = 'Unlock!'
        } else {
            background = Color3.fromHex('fff124')
            showCostUi = true
        }
        frame.image.Visible = showCostUi
        frame.BackgroundColor3 = background
        if (showCostUi) {
            const costData = getCostUiData(cost)
            frame.text.Text = formatNumber(costData[0].cash)
            frame.image.Image = costData[0].img
        } else {
            frame.text.Text = text
        }

        this.stand.Egg.Transparency = !available ? 0 : 1
        this.stand.EggWhite.Transparency = (available && !unlocked) ? 0 : 1
        if (available && unlocked) {
            if (this.currentEggName !== modelName) {
                const curModel = this.stand.FindFirstChild(this.currentEggName)
                if (curModel) {
                    curModel.Destroy()
                }
                this.currentEggName = modelName
                const eggPart = getEggModel(modelName).Clone()
                eggPart.Size = this.stand.Egg.Size
                eggPart.CFrame = this.stand.Egg.CFrame
                eggPart.Parent = this.stand.Egg
                eggPart.Anchored = true
                this.currentEgg = eggPart
                const weld = new Instance('WeldConstraint')
                weld.Part0 = this.stand.Egg
                weld.Part1 = eggPart
                weld.Parent = this.stand.Egg
            }
        }
    }

    showUI() {
        if (getPlayerAtts().isCrackingEgg) return
        this.atom.update({ open: true })
    }

    hideUI() {
        this.atom.update({ open: false })
    }

}