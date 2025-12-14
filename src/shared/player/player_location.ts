import { PlayerService } from "./player_service"
import { getHRP } from "shared/help/assist"
import { DEF_AREA_CACHE } from "shared/help/DATA"
import { RunService } from "@rbxts/services"
import { enteredAreaSig, enteredMineSig } from "shared/signals/server_signals"

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
        let minDist = math.huge
        let closeStageNo = 0
        for (const [strStageNo, posList] of pairs(DEF_AREA_CACHE)) {
            const stageNo = tonumber(strStageNo) || 1
            if (stageNo === 0) continue
            const stagePos = new Vector3(posList[0], posList[1], posList[2])
            const dist = stagePos.sub(hrpPos).Magnitude
            if (dist >= minDist) continue
            minDist = dist
            closeStageNo = stageNo - 1
            if (dist < 80) break
        }
        if (this.inStage !== closeStageNo) {
            this.inStage = closeStageNo
            enteredAreaSig.Fire(this._player, closeStageNo, this.inStage)
        }
        const newInMineZone = minDist < 60
        if (this.inMineZone !== newInMineZone) {
            this.inMineZone = newInMineZone
            enteredMineSig.Fire(this._player, closeStageNo, this.inMineZone)
        }
    }

}