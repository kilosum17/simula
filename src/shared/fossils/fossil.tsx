import { chooseRandom, col, getFossilsFolder, getHealthMult } from "shared/help/assist";
import { Stage } from "./Stage";
import { STAGE_CONF } from "shared/help/CONF";
import { TweenService } from "@rbxts/services";
import Signal from "@rbxts/signal";
import { FossilMiningSpots } from "./fossil_mining_spots";
import { getFossilBody, TDropType } from "./fossil_utils";
import { Remotes } from "shared/signals/remotes";
import { randInt } from "shared/help/math";
import { addDropsSig } from "shared/signals/server_signals";

export class Fossil {
    stage: Stage
    pos: Vector3
    maxHealth: number
    health: number
    body: BasePart
    activePart: BasePart
    last_mine_time = -1000
    changeSig = new Signal()
    spots: FossilMiningSpots
    highlight: Highlight

    constructor(stage: Stage, pos: Vector3) {
        this.spots = new FossilMiningSpots(this)
        this.stage = stage
        this.pos = pos
        this.maxHealth = 100 * getHealthMult(stage.stageNo)
        this.health = this.maxHealth
        const res = this._addFossilBody()
        this.body = res.body
        this.activePart = res.activePart
        this.highlight = res.highlight

    }

    hide() {
        this.body.Parent = undefined
    }

    show() {
        this.body.Parent = getFossilsFolder(this.stage.stageNo)
    }

    dropType = "crate" as TDropType
    _addFossilBody() {
        const conf = STAGE_CONF[this.stage.stageNo]
        this.dropType = chooseRandom(conf.fossils as TDropType[])

        const body = getFossilBody({ dropType: this.dropType, stage: this.stage.stageNo })
        this.body = body
        const { highlight, clicker } = this._setUpClickerAndHighlight()
        body.Parent = getFossilsFolder(this.stage.stageNo)
        const cframe = new CFrame(this.pos, this.stage.center)
        body.PivotTo(cframe.add(new Vector3(0, -0.5, 0)))
        body.AddTag('fossil');
        body.Name = `fos ${this.stage.stageNo}-${body.Name}`
        body.SetAttribute("stageNo", this.stage.stageNo)

        const { activePart } = this._updateBody()
        this.activePart = activePart
        this.spots.add_mining_spots()
        this.bounceMesh('normal')
        return { body, activePart, clicker, highlight }
    }

    _updateBody() {
        const ratio = this.health / this.maxHealth
        let no = 1
        if (ratio < 0.75) no = 2
        if (ratio < 0.5) no = 3
        if (ratio < 0.25) no = 4
        const newActive = this.body.GetChildren().find(c => c.HasTag(tostring(no)))! as BasePart
        let changed = false
        if (newActive && newActive !== this.activePart) {
            for (const drop of this.body.GetChildren() as BasePart[]) {
                if (drop.HasTag('drop') && drop !== newActive) {
                    drop.Transparency = 1
                }
            }
            newActive.Transparency = 0;
            this.highlight.Parent = newActive
            if (this.activePart) {
                changed = true
                // print('change part', this.activePart?.GetAttribute('no'), no)
            }
        }
        this.activePart = newActive
        return { activePart: newActive, changed }
    }

    _setUpClickerAndHighlight() {
        const highlight = new Instance('Highlight')
        highlight.Parent = this.body
        highlight.Enabled = false
        highlight.FillTransparency = 1
        highlight.OutlineColor = col("white")
        this.highlight = highlight

        const clicker = new Instance('ClickDetector')
        clicker.Parent = this.body
        clicker.MaxActivationDistance = 100
        clicker.CursorIcon = 'rbxassetid://7033235466'

        clicker.MouseHoverEnter.Connect(() => {
            highlight.Enabled = true
        })
        clicker.MouseHoverLeave.Connect(() => {
            highlight.Enabled = false
        })
        clicker.MouseClick.Connect(() => {
            this.onFossilClicked()
        })
        return { highlight, clicker }
    }

    private bounceMesh(pace: 'normal' | 'fast') {
        const part = this.activePart
        const Size = part.Size
        const isFast = pace === 'fast'
        part.Size = isFast ? part.Size.mul(0.5) : Vector3.zero
        const time = isFast ? 0.15 : 0.3
        const tweenInfo = new TweenInfo(time, Enum.EasingStyle.Bounce, Enum.EasingDirection.Out);
        const tween = TweenService.Create(part, tweenInfo, { Size });
        tween.Play()
    }

    onFossilClicked() {
        const scaleFactor = 0.8;
        const scaleDuration = 0.05;

        const originalSize = this.activePart.Size;
        const targetSize = originalSize.mul(scaleFactor);
        const tweenInfo = new TweenInfo(
            scaleDuration,
            Enum.EasingStyle.Sine,
            Enum.EasingDirection.InOut,
            0, // Repeat count
            true, // Reverses: YES
        );
        const scaleTween = TweenService.Create(this.activePart, tweenInfo, {
            Size: targetSize
        });
        scaleTween.Completed.Connect(() => {
            const damage = randInt(5, 15)
            print("Click mine", damage)
            task.wait(0.02)
            this.takeDamage(damage)
        });
        scaleTween.Play();
    }

    takeDamage(damage: number) {
        // warn("Taking damage", this.body, damage)
        this.health = math.max(this.health - damage, 0)
        this._updateAttributes()
        const { changed } = this._updateBody()
        let createDrops = changed
        if (this.health === 0) {
            createDrops = true
            this.kill()
            Remotes.Server.Get('SendPlayVFX').SendToAllPlayers(this.pos, 'bigBurst')
            task.spawn(() => {
                task.wait(randInt(30, 50) / 10)
                this._addFossilBody()
            })
        }
        if (createDrops) {
            addDropsSig.Fire(this.body.GetPivot().Position)
        }
    }

    kill() {
        this.body.Destroy()
    }

    _updateAttributes() {
        this.body.SetAttribute('maxHealth', this.maxHealth)
        this.body.SetAttribute('health', this.health)
        this.body.SetAttribute('killed', this.health <= 0)
    }
}