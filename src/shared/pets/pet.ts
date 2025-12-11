import { Workspace } from "@rbxts/services";
import { PetsManager } from "./pets_manager";
import { getItemConf, IItemConfig } from "shared/help/DATA";
import { col, ensureInstance, getHRP, setPartDensity } from "shared/help/assist";

export type TPetBody = Part & {
    BodyPosition: BodyPosition,
    BodyGyro: BodyGyro,
    BodyVelocity: BodyVelocity,
}

export class Pet {
    petsMan: PetsManager
    id: string
    _idx = 0
    _conf: IItemConfig
    _anchor: TPetBody
    _body: BasePart

    constructor(petsMan: PetsManager, id: string) {
        this.petsMan = petsMan
        this.id = id
        this._conf = getItemConf(tonumber(id)!)!;
        const { anchor, body } = this._createBody()
        // const { body } = this._createBody()
        this._anchor = anchor
        this._body = body
        this._configureModel()
        this.setIdx(this._idx)
        warn("CREATE PET", this._conf.name)
    }

    _createBody() {
        const PetStorage = Workspace.WaitForChild("PetStorage")
        const player = this.petsMan.petsServ.player

        const anchor = new Instance("Part")
        anchor.CFrame = getHRP(player).CFrame
        anchor.Color = col("red")
        anchor.Name = `PET-${this._conf.name} -${this._conf.model_name}`
        const folderName = `${player.UserId}`
        const folder = ensureInstance({ path: folderName, root: PetStorage })
        anchor.Parent = folder
        anchor.SetNetworkOwner(player)
        anchor.CollisionGroup = "PET"
        anchor.CanCollide = false
        anchor.Anchored = false
        anchor.Size = new Vector3(.8, .8, .8)
        anchor.Shape = Enum.PartType.Ball

        const body = new Instance("Part")
        body.CollisionGroup = "PET"
        body.CFrame = getHRP(player).CFrame.mul(new CFrame(0, 3, 0))
        body.Size = new Vector3(2, 2, 2)
        body.CanCollide = false
        body.Anchored = false
        body.Parent = anchor
        body.SetNetworkOwner(player)

        const weld = new Instance("WeldConstraint")
        weld.Part0 = anchor
        weld.Part1 = body
        weld.Parent = anchor

        return { body: body as BasePart, anchor: anchor as TPetBody }
    }

    _configureModel() {
        const anchor = this._anchor

        const BodyPosition = new Instance("BodyPosition")
        BodyPosition.P = BodyPosition.P * 2
        BodyPosition.Position = anchor.Position
        BodyPosition.MaxForce = new Vector3(math.huge, math.huge, math.huge)
        BodyPosition.Parent = anchor

        const BodyGyro = new Instance("BodyGyro")
        BodyGyro.CFrame = anchor.CFrame
        BodyGyro.MaxTorque = new Vector3(math.huge, math.huge, math.huge)
        BodyGyro.Parent = anchor

        const BodyVelocity = new Instance("BodyVelocity")
        BodyVelocity.Velocity = new Vector3(0, 0, 0)
        BodyVelocity.MaxForce = new Vector3(0, 0, 0)
        BodyVelocity.Parent = anchor

        setPartDensity(anchor, 1.2)
    }

    setIdx(idx: number) {
        this._idx = idx
        this._anchor.SetAttribute("idx", idx)
    }

    kill() {

    }

}