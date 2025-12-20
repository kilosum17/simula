import { getNewEggPrice } from "shared/help/assist"
import { getPlayerAtts } from "shared/signals/player_attributes"

export const isEggAvailable = (eggNo: number) => {
    return eggNo < 5
}

export const getEggState = (eggNo: number, player?: Player) => {
    const available = isEggAvailable(eggNo)
    const unlockedEggs = [...getPlayerAtts(player).eggs, 0, 1]
    const unlocked = unlockedEggs.includes(eggNo)
    const cost = getNewEggPrice(eggNo)
    return { available, unlocked, cost }
}

