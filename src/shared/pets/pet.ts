import { Workspace } from "@rbxts/services";
import { PetsManager } from "./pets_manager";
import { getItemConf, IItemConfig } from "shared/help/DATA";
import { col, ensureInstance, getHRP, setPartDensity } from "shared/help/assist";

type TBody = Part & {
    BodyPosition: BodyPosition,
    BodyGyro: BodyGyro,
    BodyVelocity: BodyVelocity,
}

export class Pet {
    petsMan: PetsManager
    id: string
    _pos = 0
    _conf: IItemConfig
    _anchor: TBody
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
        this.setPos(this._pos)
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
        const folder = ensureInstance({ path: folderName, root: PetStorage})
        anchor.Parent = folder
        anchor.SetNetworkOwner(player)
        anchor.CollisionGroup = "PET"
        anchor.CanCollide = true
        anchor.Anchored = false
        anchor.Size = new Vector3(.5, .5, .5)

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

        return { body: body as BasePart, anchor: anchor as TBody }
    }

    _configureModel() {
        const anchor = this._anchor

        const BodyPosition = new Instance("BodyPosition")
        BodyPosition.P = BodyPosition.P * 2
        BodyPosition.Position = anchor.Position
        BodyPosition.MaxForce = new Vector3(math.huge, 50, math.huge)
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

    setPos(pos: number) {
        this._pos = pos
        this._anchor.SetAttribute("pos", pos)
    }

    kill() {

    }

}