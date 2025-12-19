import { getPlayerAtts } from "shared/signals/player_attributes"
import { PlayerService } from "./player_service"
import { getCoinMult } from "shared/help/assist"
import { getStageCostV2 } from "shared/help/DATA"
import { Remotes } from "shared/signals/remotes"

export class PlayerRewards {
    psServ: PlayerService

    constructor(psServ: PlayerService) {
        this.psServ = psServ
    }

    collectDrop(drop: BasePart) {
        const stageNo = getPlayerAtts(this.psServ.player).inStageNo
        const kind = drop.GetAttribute('kind')
        let baseCoin = 0
        if (kind === 'coin') baseCoin = 200
        if (kind === 'bag') baseCoin = 300
        const delta = 0.1 // 450 - 550
        let value = math.random(baseCoin * (1 - delta), baseCoin * (1 + delta))
        value *= getCoinMult(stageNo)
        if (stageNo <= 10 && stageNo > 2) {
            value *= 1.3 // 25% more rewards faster
        }
        const newGems = math.floor(value * 0.15)
        const newCoins = math.floor(value)
        const coins = this.psServ.psData.store.coins + newCoins
        const gems = this.psServ.psData.store.gems + newGems
        this.psServ.psData.update({ gems, coins })
        drop.Destroy()
    }

    buyStage(stageNo: number) {
        const store = this.psServ.psData.store
        const cost = getStageCostV2(stageNo, store.rebirth)
        if (store.coins < cost) return
        const coins = store.coins - cost
        this.psServ.psData.update({ coins, progStage: stageNo })
        Remotes.Server.Get('BreakStageBoard').SendToPlayer(this.psServ.player, stageNo)
    }

}