import { PetsManager } from "./pets_manager";

export class PetsService {
    player: Player
    petMan: PetsManager

    constructor(player: Player) {
        this.player = player
        this.petMan = new PetsManager(this)

        const petIds = [
            // "1",
            // '1', '2',
            // '1', '2', '3',
            '11', '12', '13', '14',
            '21', '22', '23', '24', '25', '26', '27', '28',
        ]
        this.petMan.updateEquipedPets(petIds)
        warn("STARTING WITH", petIds)
    }


}