import { RunService, Workspace } from "@rbxts/services";
import { PetsServiceClient } from "./pets_service_client";
import { getHRP, getPlayer } from "shared/help/assist";
import { TPetBody } from "./pet";

const rayParams = new RaycastParams()
const RAY_DIST = 20

export class PetsMover {
    petCServ: PetsServiceClient
    status = "FOLLOW" as "FOLLOW" | "GOMINE" | "MINE"

    constructor(petCServ: PetsServiceClient) {
        this.petCServ = petCServ

        RunService.RenderStepped.Connect(() => {
            this.updatePets()
        })
    }

    updatePets() {
        const player = getPlayer()
        const fold = Workspace.FindFirstChild("PetStorage")?.FindFirstChild(`${player.UserId}`)
        if (!fold) return
        for (const pet of fold.GetChildren()) {
            this._updateOnePet(pet as TPetBody)
        }
    }

    _updateOnePet(pet: TPetBody) {
        const bodyPos = pet.WaitForChild("BodyPosition") as BodyPosition
        const bodyGyro = pet.WaitForChild("BodyGyro") as BodyGyro
        const petPos = (pet.GetAttribute("pos") || 0) as number
        if (this.status === "FOLLOW") {
            const targetPos = this.petCServ.petPos.pos[petPos]
            const rayPos = this._raycastPos(pet, targetPos)
            bodyPos.Position = rayPos
            // warn("Update pets", pet.Name)
        }
    }

    _lastPos = new Vector3(0, math.huge, 0)
    _lastRes = new Vector3(0, math.huge, 0)
    _raycastPos(pet: TPetBody, targetPos: Vector3) {
        if (targetPos.sub(this._lastPos).Magnitude < 0.1) {
            return this._lastRes
        }
        this._lastPos = targetPos
        rayParams.FilterType = Enum.RaycastFilterType.Exclude
        rayParams.FilterDescendantsInstances = [pet, Workspace.Targets]
        const origin = targetPos.add(new Vector3(0, RAY_DIST, 0))
        const dir = new Vector3(0, -2 * RAY_DIST, 0)
        const raycastRes = Workspace.Raycast(origin, dir, rayParams)
        let resultPos = targetPos
        if (raycastRes) {
            resultPos = raycastRes.Position
        } else {
            warn("No floor", pet.Name)
        }
        this._lastRes = resultPos
        const currentVelocity = pet.AssemblyLinearVelocity
        if (currentVelocity.Y < -40) {
            pet.AssemblyLinearVelocity = new Vector3(currentVelocity.X, -40, currentVelocity.Z)
        }
        return resultPos
    }

}