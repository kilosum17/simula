import { PetCatalog } from "shared/help/pet_catalog";
import { PetsManager } from "./pets_manager";

export class PetsService {
    player: Player
    petMan: PetsManager

    constructor(player: Player) {
        this.player = player
        this.petMan = new PetsManager(this)

        // const manIds =['1', '2', '3', '1', '2', '3', '1', '2', '3']
        const ignore = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
            16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 48, 49, 50, 51,
        ].map(p => tostring(p))
        const petsIds = PetCatalog.map(p => tostring(p.id)).filter((p, i) => {
            // if (ignore.includes(p)) return false
            // return i >= -1 && i < 40
            return true
        })
        this.petMan.updateEquipedPets(petsIds)
        warn("STARTING WITH", petsIds)
    }


}