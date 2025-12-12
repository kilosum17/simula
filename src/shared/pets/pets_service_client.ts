import { getPlayer } from "shared/help/assist"
import { PetPositions } from "./pet_positions"
import { PetsMover } from "./pets_mover"
import "./ui/pet_billboards"

export class PetsServiceClient {
    petPos: PetPositions
    petsMover: PetsMover

    constructor() {
        this.petPos = new PetPositions()
        this.petsMover = new PetsMover(this)

    }

}