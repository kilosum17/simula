import { PlayerService } from "./player_service"
import { getHRP, getPlayer } from "shared/help/assist"
import { DEF_AREA_CACHE } from "shared/help/DATA"
import { RunService } from "@rbxts/services"
import { enteredAreaSig, enteredMineSig } from "shared/signals/server_signals"
import { getStageFromPos } from "shared/help/area_check_utils"

export class PlayerLocation {
    _player: Player
    inMineZone = false
    inStage = -1

    constructor(player: Player) {
        this._player = player

        RunService.Heartbeat.Connect(() => this._checkPosition())
    }

    private _checkPosition() {
        const hrpPos = getHRP(this._player).Position
        const res = getStageFromPos(hrpPos)
        if (this.inStage !== res.closeStageNo) {
            this.inStage = res.closeStageNo
            enteredAreaSig.Fire(this._player, res.closeStageNo, this.inStage)
        }
        if (this.inMineZone !== res.inMine) {
            this.inMineZone = res.inMine
            enteredMineSig.Fire(this._player, res.closeStageNo, this.inMineZone)
        }
        this._player.SetAttribute("inMine", res.inMine)
        this._player.SetAttribute("inStageNo", res.closeStageNo)
    }

}