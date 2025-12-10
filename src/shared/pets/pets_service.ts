import { ITEMS_CONFING } from "shared/help/DATA";
import { PetsManager } from "./pets_manager";

export class PetsService {
    player: Player
    petMan: PetsManager
    
    constructor(player: Player) {
        this.player = player
        this.petMan = new PetsManager(this)
        this.petMan.updateEquipedPets(['1', '2', '3'])
    }


}