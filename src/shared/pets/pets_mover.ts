import { RunService, Workspace } from "@rbxts/services";
import { PetsServiceClient } from "./pets_service_client";
import { getHRP, getPlayer } from "shared/help/assist";
import { TPetBody } from "./pet";
import { PetBouncer } from "./pet_bouncer";
import { getPlayerPetsFolder } from "./pet_utils";

const rayParams = new RaycastParams()
const RAY_DIST = 20

export class PetsMover {
    petCServ: PetsServiceClient
    status = "FOLLOW" as "FOLLOW" | "GOMINE" | "MINE"
    petBouncher: PetBouncer

    constructor(petCServ: PetsServiceClient) {
        this.petCServ = petCServ
        this.petBouncher = new PetBouncer()

        RunService.RenderStepped.Connect(() => {
            this.updatePets()
        })
    }

    updatePets() {
        const fold = getPlayerPetsFolder()
        for (const pet of fold.GetChildren()) {
            this._updateOnePet(pet as TPetBody)
        }
    }

    _updateOnePet(pet: TPetBody) {
        const bodyPos = pet.WaitForChild("BodyPosition") as BodyPosition
        const bodyGyro = pet.WaitForChild("BodyGyro") as BodyGyro
        const petIdx = (pet.GetAttribute("idx") || 0) as number
        const hrp = getHRP()
        if (this.status === "FOLLOW") {
            const frontPos = hrp.Position.add(hrp.CFrame.LookVector.mul(100))
            let pos = this.petCServ.petPos.pos[petIdx]
            pos = this._raycastPos(pet, pos)
            pos = this.petBouncher.update(pos, petIdx * 10000)
            bodyPos.Position = pos
            bodyGyro.CFrame = new CFrame(pos, frontPos)
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
        const petsFolder = Workspace.FindFirstChild("PetStorage") || new Instance("Folder")
        rayParams.FilterDescendantsInstances = [pet, Workspace.Targets, petsFolder]
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