import { chooseRandom, ensureInstance, getFosOfType2, getHealthMult } from "shared/help/assist";
import { Stage } from "./Stage";
import { STAGE_CONF } from "shared/help/CONF";
import { TweenService, Workspace } from "@rbxts/services";
import Signal from "@rbxts/signal";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { StrictMode } from "@rbxts/react";
import { FossilHealthUi } from "./fossil_health_ui";
import React from "@rbxts/react";

export class Fossil {
    stage: Stage
    pos: Vector3
    maxHealth: number
    health: number
    mesh: BasePart
    last_mine_time = -1000
    killed = false
    changeSig = new Signal()

    constructor(stage: Stage, pos: Vector3) {
        this.stage = stage
        this.pos = pos
        this.maxHealth = 100 * getHealthMult(stage.stageNo)
        this.health = this.maxHealth
        this.mesh = this.popupFossil()

        this.mountHealthUI()
    }

    mountHealthUI() {
        // Fossil-health-ui
        const root = createRoot(new Instance("Folder"));
        root.render(<StrictMode>
            {createPortal(<FossilHealthUi fos={this} />, this.mesh)}
        </StrictMode>);
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
        this.bounceMesh('normal')
        // print('popup')
        return part
    }

    part_no = 0
    private setNewMesh(part: BasePart, no: number) {
        this.part_no = no
        this.mesh = part
        part.Position = this.pos
        part.CanCollide = false
        part.Anchored = true
        part.Name = `fos ${this.stage.stageNo}-${part.Name}`
        part.Parent = ensureInstance("Targets.Fossils")
        part.AddTag('fossil');
    }
    private repositionMesh(rotate = true) {
        const mesh = this.mesh
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
        const Size = this.mesh.Size
        const isFast = pace === 'fast'
        this.mesh.Size = isFast ? this.mesh.Size.mul(0.5) : Vector3.zero
        const time = isFast ? 0.15 : 0.3
        const tweenInfo = new TweenInfo(time, Enum.EasingStyle.Bounce, Enum.EasingDirection.Out);
        const tween = TweenService.Create(this.mesh, tweenInfo, { Size });
        tween.Play()
    }

}