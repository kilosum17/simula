import { RunService, Workspace } from "@rbxts/services";
import { PetsServiceClient } from "./pets_service_client";
import { getHRP, getPlayer } from "shared/help/assist";

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
        const hrpPos = getHRP().Position
        const player = getPlayer()
        const fold = Workspace.FindFirstChild("PetStorage")?.FindFirstChild(`${player.UserId}`)
        if (!fold) return
        for (const pet of fold.GetChildren()) {
            const bodyPos = pet.WaitForChild("BodyPosition") as BodyPosition
            const bodyGyro = pet.WaitForChild("BodyGyro") as BodyGyro
            const petPos = (pet.GetAttribute("pos") || 0) as number
            if (this.status === "FOLLOW") {
                const targetPos = this.petCServ.petPos.pos[petPos]
                bodyPos.Position = targetPos
                // warn("Update pets", pet.Name)
            }
        }
    }

}