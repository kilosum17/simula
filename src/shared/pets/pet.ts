import { ReplicatedStorage } from "@rbxts/services";
import { PetsManager } from "./pets_manager";
import { getItemConf, IItemConfig } from "shared/help/DATA";
import { setPartDensity } from "shared/help/assist";

const PetStorage = game.GetService("Workspace").WaitForChild("PetStorage")

export type TPet = Model & {
    Base: BasePart & {
        BodyPosition: BodyPosition,
        BodyGyro: BodyGyro,
        BodyVelocity: BodyVelocity,
    },
    Obj: Model & {
        Body: BasePart,
        AnimationController: AnimationController & {
            Animator: Animator
        },
    }
    Animator: RemoteEvent,
}

export class Pet {
    petsMan: PetsManager
    id: string
    _pos = 0
    _conf: IItemConfig
    _model: TPet
    _body: BasePart

    constructor(petsMan: PetsManager, id: string) {
        this.petsMan = petsMan
        this.id = id
        this._conf = getItemConf(tonumber(id)!)!;
        const { model, body } = this._createModel()
        this._model = model
        this._body = body
        this._configureModel()
    }

    _createModel() {
        const model = ReplicatedStorage.WaitForChild("instance").WaitForChild("models")
            .WaitForChild("PetObj").Clone() as TPet
        const body = ReplicatedStorage.WaitForChild("instance").WaitForChild("pets")
            .WaitForChild(this._conf.model_name!, 2)?.WaitForChild("Body").Clone() as BasePart
        if (!body || !model) {
            warn("Didnot find mode/body for", this._conf)
        }
        const oldBody = model.Obj.Body
        oldBody.Name = 'oldBody'
        body.Size = body.Size.mul(1.25)
        body.Parent = model.Obj
        body.CFrame = oldBody.CFrame
        body.Name = 'Body'
        if (this._conf.retextured) {
            (body as MeshPart).TextureID = this._conf.src!
        }
        model.Base.Transparency = 1
        model.Animator.Destroy()
        for (const part of model.Obj.GetChildren()) {
            if (part.IsA('BasePart') && part.Name !== 'Body') {
                part.Destroy()
            }
        }
        for (const child of model.GetDescendants()) {
            if (child.IsA("BasePart")) {
                child.SetNetworkOwner(this.petsMan.petsServ.player)
            }
        }
        return { model, body }
    }

    _configureModel() {
        const PetObj = this._model
        const player = this.petsMan.petsServ.player
        PetObj.PrimaryPart = PetObj.Base
        PetObj.Parent = PetStorage

        if (!PetObj.Obj.AnimationController.FindFirstChildOfClass('Animator')) {
            new Instance('Animator', PetObj.Obj.AnimationController)
        }
        const Root = new Instance("WeldConstraint", PetObj.Base);
        Root.Part0 = PetObj.Base
        Root.Part1 = PetObj.Obj.Body

        const BodyPosition = new Instance("BodyPosition")
        BodyPosition.P = BodyPosition.P * 2
        BodyPosition.Position = PetObj.Base.Position
        BodyPosition.MaxForce = new Vector3(math.huge, 50, math.huge)
        BodyPosition.Parent = PetObj.Base

        const BodyGyro = new Instance("BodyGyro")
        BodyGyro.CFrame = PetObj.Base.CFrame
        BodyGyro.MaxTorque = new Vector3(math.huge, math.huge, math.huge)
        BodyGyro.Parent = PetObj.Base

        const BodyVelocity = new Instance("BodyVelocity")
        BodyVelocity.Velocity = new Vector3(0, 0, 0)
        BodyVelocity.MaxForce = new Vector3(0, 0, 0)
        BodyVelocity.Parent = PetObj.Base

        const character = player.Character || player.CharacterAdded.Wait()[0]
        for (const [_, i] of pairs(character.GetDescendants())) {
            if (i.IsA("BasePart")) {
                i.CollisionGroup = "p"
                const NCC = new Instance("NoCollisionConstraint");
                [NCC.Part0, NCC.Part1] = [i, PetObj["Obj"]["Body"]]
                NCC.Parent = i
            }
        }

        for (const [_, i] of pairs(PetObj.GetDescendants())) {
            if (i.IsA("BasePart")) {
                i.Anchored = false
                if (i.Name === "HumanoidRootPart") {
                    // warn('Found the root part')
                } else {
                    i.CanCollide = false;
                    i.Massless = true
                }
                i.CollisionGroup = "p"
            }
        }

        for (const [_, i] of pairs(PetObj.GetDescendants())) {
            if (i.IsA("BasePart") && i.Anchored === false) {
                i.SetNetworkOwner(player)
            }
        }

        // move pet very up to avoid dieing before clients position's it
        this._model.Base.BodyPosition.Position = new Vector3(0, 1000, 0)
        this._model.ModelStreamingMode = Enum.ModelStreamingMode.Persistent
        for (const child of this._model.GetDescendants()) {
            if (child.IsA('BasePart')) {
                setPartDensity(child, 1.2)
            }
        }
    }

    setPos(pos: number) {
        this._pos = pos
    }

    kill() {

    }
}