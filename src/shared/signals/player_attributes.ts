import { getPlayer } from "shared/help/assist"

export type TPlayerData = {
    cash: number,
    gems: number,
    progStage: number,
    rebirth: number,
}

export const PLAYER_DATA_DEF = {
    cash: 0,
    gems: 0,
    progStage: 0,
    rebirth: 0,
} as TPlayerData

export const getPlayerData = () => {
    const data = getPlayer().GetAttributes() as unknown as TPlayerData
    return { ...PLAYER_DATA_DEF, ...data }
}
