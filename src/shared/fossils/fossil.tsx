import { chooseRandom, getFosOfType2, getFossilsFolder, getHealthMult } from "shared/help/assist";
import { Stage } from "./Stage";
import { STAGE_CONF } from "shared/help/CONF";
import { TweenService } from "@rbxts/services";
import Signal from "@rbxts/signal";
import { FossilMiningSpots } from "./fossil_mining_spots";

export class Fossil {
    stage: Stage
    pos: Vector3
    maxHealth: number
    health: number
    body: BasePart
    last_mine_time = -1000
    changeSig = new Signal()
    spots: FossilMiningSpots

    constructor(stage: Stage, pos: Vector3) {
        this.stage = stage
        this.pos = pos
        this.spots = new FossilMiningSpots(this)
        this.maxHealth = 100 * getHealthMult(stage.stageNo)
        this.health = this.maxHealth
        this.body = this.popupFossil()
    }

    fosVer = ""
    private popupFossil() {
        const conf = STAGE_CONF[this.stage.stageNo]
        const fos = chooseRandom(conf.fossils)
        this.fosVer = fos
        // print('fos', fos, conf.fossils)
        const [no, part] = getFosOfType2(fos, this.health / this.maxHealth, () => true, this.stage.stageNo)!
        this.setNewMesh(part, no)
        this.repositionMesh()
        this.spots.add_mining_spots()
        this.bounceMesh('normal')
        // print('popup')
        return part
    }

    part_no = 0
    private setNewMesh(part: BasePart, no: number) {
        this.part_no = no
        this.body = part
        part.Position = this.pos
        part.CanCollide = false
        part.Anchored = true
        part.Name = `fos ${this.stage.stageNo}-${part.Name}`
        part.Parent = getFossilsFolder(this.stage.stageNo)
        part.AddTag('fossil');
        part.SetAttribute("stageNo", this.stage.stageNo)
    }

    private repositionMesh(rotate = true) {
        const mesh = this.body
        const center = this.stage.center
        mesh.Position = new Vector3(mesh.Position.X,
            center.Y + mesh.Size.Y / 2 - center.Y / 2 - 0.2,
            mesh.Position.Z)
        if (rotate) {
            mesh.Rotation = new Vector3(
                mesh.Rotation.X,
                math.random(-180, 180),
                mesh.Rotation.Z,
            )
        }
    }

    private bounceMesh(pace: 'normal' | 'fast') {
        const Size = this.body.Size
        const isFast = pace === 'fast'
        this.body.Size = isFast ? this.body.Size.mul(0.5) : Vector3.zero
        const time = isFast ? 0.15 : 0.3
        const tweenInfo = new TweenInfo(time, Enum.EasingStyle.Bounce, Enum.EasingDirection.Out);
        const tween = TweenService.Create(this.body, tweenInfo, { Size });
        tween.Play()
    }

    takeDamage(damage: number) {
        // warn("Taking damage", this.body, damage)
        this.health = math.max(this.health - damage, 0)
        this._updateAttributes()
        if (this.health === 0) {
            // this.stage.removeFossil(this)
            // this.kill()
        }
    }

    kill() {
        this.body.Destroy()
    }

    _updateAttributes() {
        this.body.SetAttribute('maxHealth', this.maxHealth)
        this.body.SetAttribute('health', this.health)
    }
}