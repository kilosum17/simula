import { updateEquipedPets } from "shared/signals/server_signals";
import { PetsManager } from "./pets_manager";
import { listToCountMap } from "shared/help/math";

export class PetsService {
    player: Player
    petMan: PetsManager

    constructor(player: Player) {
        this.player = player
        this.petMan = new PetsManager(this)

        const petIds = listToCountMap([
            // "1",
            // '1', '2',
            // '1', '2', '3',
            '11', '12', '13', '14',
            '21', '22', '23', '24', '25', '26', '27', '28',
        ])
        // this.petMan.updateEquipedPets(petIds)
        // warn("STARTING WITH", petIds)

        updateEquipedPets.Connect((player, petIds) => {
            if (player !== this.player) return
            print('equip pets', petIds)
            this.petMan.updateEquipedPets(petIds)
        })

    }


}