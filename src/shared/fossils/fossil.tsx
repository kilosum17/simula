import { chooseRandom, getFosOfType2, getFossilsFolder, getHealthMult } from "shared/help/assist";
import { Stage } from "./Stage";
import { STAGE_CONF } from "shared/help/CONF";
import { TweenService } from "@rbxts/services";
import Signal from "@rbxts/signal";
import { FossilMiningSpots } from "./fossil_mining_spots";
import { getFossilBody, TDropType } from "./fossil_utils";
import { Remotes } from "shared/signals/remotes";
import { randInt } from "shared/help/math";

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

    constructor(stage: Stage, pos: Vector3) {
        this.spots = new FossilMiningSpots(this)
        this.stage = stage
        this.pos = pos
        this.maxHealth = 100 * getHealthMult(stage.stageNo)
        this.health = this.maxHealth
        const res = this._addFossilBody()
        this.body = res.body
        this.activePart = res.activePart
    }

    dropType = "crate" as TDropType
    _addFossilBody() {
        const conf = STAGE_CONF[this.stage.stageNo]
        this.dropType = chooseRandom(conf.fossils as TDropType[])
        const body = getFossilBody({ dropType: this.dropType, stage: this.stage.stageNo })
        this.body = body
        body.Parent = getFossilsFolder(this.stage.stageNo)
        const cframe = new CFrame(this.pos, this.stage.center)
        body.PivotTo(cframe.add(new Vector3(0, -0.5, 0)))
        body.AddTag('fossil');
        body.Name = `fos ${this.stage.stageNo}-${body.Name}`
        body.SetAttribute("stageNo", this.stage.stageNo)
        this.spots.add_mining_spots()
        const activePart = this._updateBody()
        this.activePart = activePart
        this.bounceMesh('normal')
        return { body, activePart }
    }

    _updateBody() {
        const ratio = this.health / this.maxHealth
        let no = 1
        if (ratio < 0.75) no = 2
        if (ratio < 0.5) no = 3
        if (ratio < 0.25) no = 4
        const newActive = this.body.GetChildren().find(c => c.HasTag(tostring(no)))! as BasePart
        if (newActive && newActive !== this.activePart) {
            for (const drop of this.body.GetChildren() as BasePart[]) {
                if (drop.HasTag('drop') && drop !== newActive) {
                    drop.Transparency = 1
                }
            }
            newActive.Transparency = 0
            print('change part', this.activePart?.GetAttribute('no'), no)
        }
        this.activePart = newActive
        return newActive
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

    takeDamage(damage: number) {
        // warn("Taking damage", this.body, damage)
        this.health = math.max(this.health - damage, 0)
        this._updateAttributes()
        this._updateBody()
        if (this.health === 0) {
            this.kill()
            Remotes.Server.Get('SendPlayVFX').SendToAllPlayers(this.pos, 'bigBurst')
            task.spawn(() => {
                task.wait(randInt(30, 50) / 10)
                this._addFossilBody()
            })
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