import { ReplicatedStorage } from "@rbxts/services";
import { ensureInstance, getEggsFolder } from "shared/help/assist";

export type TEggBody = Model & {
    Egg: BasePart,
    Screen: Part & {
        SurfaceGui: SurfaceGui & { Frame: Frame & { TextLabel: TextLabel } }
    }
}
const eggStand = ensureInstance({ path: 'instance.models.egg_stand2', root: ReplicatedStorage, create: false }) as TEggBody

export class EggOne {
    stand: Model
    pos: Vector3
    lookAt: Vector3

    constructor(pos: Vector3, lookAt: Vector3) {
        this.pos = pos
        this.lookAt = lookAt
        const res = this.createStand()
        this.stand = res.stand
    }

    createStand() {
        const stand = eggStand.Clone() as TEggBody
        let cframe = new CFrame(this.pos.add(new Vector3(0, 4.5, 0)), this.lookAt)
        cframe = cframe.mul(CFrame.Angles(0, math.rad(-90), 0))
        stand.PivotTo(cframe)

        stand.Parent = getEggsFolder()
        return { stand }
    }
}