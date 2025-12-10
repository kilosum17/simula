import Signal from "@rbxts/signal"
import { PlayerData } from "./player_data"
import { PlayerLocation } from "./player_location"
import { getCharacter } from "shared/help/assist"

export class PlayerService {
    player: Player
    ps_data: PlayerData
    ps_location: PlayerLocation

    constructor(player: Player) {
        this.player = player
        this.ps_data = new PlayerData(this)
        this.ps_location = new PlayerLocation(this)
        this._setPlayerCollisionGroup()
    }

    playerRemoving() {
        this.ps_data.saveData()
    }

    _setPlayerCollisionGroup() {
        task.spawn(() => {
            const char = getCharacter(this.player)
            for (const part of char.GetDescendants()) {
                if (part.IsA("BasePart")) {
                    part.CollisionGroup = "PLAYER"
                    warn("COL", part.Name, "PLAYER")
                }
            }
        })
    }
}
