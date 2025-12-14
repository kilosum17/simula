import { getPlayer } from "shared/help/assist"
import { PetPositions } from "./pet_positions"
import { PetsMover } from "./pets_mover"
import "./ui/pet_billboards"
import { PlayerLocation } from "shared/player/player_location"
import { enteredMineSig } from "shared/signals/server_signals"

export class PetsServiceClient {
    petPos: PetPositions
    petsMover: PetsMover
    psLocation: PlayerLocation

    constructor() {
        this.petPos = new PetPositions()
        this.petsMover = new PetsMover(this)
        this.psLocation = new PlayerLocation(getPlayer())

        enteredMineSig.Connect((_, areaNo, entered) => {
            if (entered) {
                this.petsMover.enteredMine(areaNo)
            } else {
                this.petsMover.leavingMine()
            }
        })
    }

}