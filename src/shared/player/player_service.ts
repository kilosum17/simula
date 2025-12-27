import Signal from "@rbxts/signal"
import { PlayerData } from "./player_data"
import { PlayerLocation } from "./player_location"
import { getCharacter } from "shared/help/assist"
import { buyEggSig, buyStageSig, collectDropsSig, unlockEggSig, updateSettingsSig } from "shared/signals/server_signals"
import { RunService } from "@rbxts/services"
import { PlayerRewards } from "./player_rewards"
import { randInt } from "shared/help/math"
import { getEggState } from "shared/egg/egg_utils"

export class PlayerService {
    player: Player
    psData: PlayerData
    psLocation: PlayerLocation
    psRewards: PlayerRewards
    killed = false

    constructor(player: Player) {
        this.player = player
        this.psData = new PlayerData(this)
        this.psLocation = new PlayerLocation(player)
        this.psRewards = new PlayerRewards(this)
        this._setPlayerCollisionGroup()

        collectDropsSig.Connect((player, drop) => {
            if (player !== this.player) return
            if (!player || !drop || !drop.Parent || !drop.HasTag('drop')) {
                warn('Not valid collect drop call', player, drop)
                return
            }
            this.psRewards.collectDrop(drop)
        })

        buyStageSig.Connect((player, stageNo) => {
            if (player !== this.player) return
            if (!typeIs(stageNo, 'number')) return
            this.psRewards.buyStage(stageNo)
        })

        updateSettingsSig.Connect((player, settings) => {
            if (player !== this.player) return
            this.psData.update({ settings })
        })

        unlockEggSig.Connect((player, eggNo) => {
            if (player !== this.player) return
            const { available } = getEggState(eggNo, player)
            if (!available) return
            this.psRewards.unlockEgg(eggNo)
        })

        buyEggSig.Connect((player, eggNo, count) => {
            if (player !== this.player) return
            if (!typeIs(count, 'number') || count < 0) return
            this.psRewards.buyEggs(eggNo, count)
        })

        task.spawn(() => {
            while (true) {
                // save data
                task.wait(randInt(40, 60) * 60)
                if (this.killed) break
                this.psData.saveData()
            }
        })
    }

    playerRemoving() {
        this.killed = true
        this.psData.saveData()
    }

    _setPlayerCollisionGroup() {
        task.spawn(() => {
            const char = getCharacter(this.player)
            for (const part of char.GetDescendants()) {
                if (part.IsA("BasePart")) {
                    part.CollisionGroup = "PLAYER"
                    // warn("COL", part.Name, "PLAYER")
                }
            }
        })
    }
}
