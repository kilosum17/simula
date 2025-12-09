import Signal from "@rbxts/signal"
import { PlayerData } from "./player_data"
import { PlayerLocation } from "./player_location"

export class PlayerService {
    player: Player
    ps_data: PlayerData
    ps_location: PlayerLocation

    constructor(player: Player) {
        this.player = player
        this.ps_data = new PlayerData(this)
        this.ps_location = new PlayerLocation(this)
    }

    playerRemoving() {
        this.ps_data.saveData()
    }

}
