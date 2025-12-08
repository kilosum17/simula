import { PlayerData } from "./player_data"

export class PlayerService {
    data: PlayerData
    player: Player

    constructor(player: Player) {
        this.player = player
        this.data = new PlayerData(player.UserId)
    }

    playerRemoving() {
        this.data.saveData()
    }

}
