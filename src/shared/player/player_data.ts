import { PlayerService } from "./player_service"

export class PlayerData {
    _ps: PlayerService

    constructor(ps: PlayerService) {
        this._ps = ps
        this._ps.player.SetAttribute("balance", 0)
    }

    loadData() {

    }

    saveData() {

    }

}