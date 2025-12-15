import { getPlayer } from "shared/help/assist"

export type TPlayerData = {
    balance: number,
    progStage: number,
    rebirth: number,
}

export const PLAYER_DATA_DEF = {
    balance: 0,
    progStage: 0,
    rebirth: 0,
} as TPlayerData

export const getPlayerData = () => {
    const data = getPlayer().GetAttributes() as unknown as TPlayerData
    return { ...PLAYER_DATA_DEF, ...data }
}
