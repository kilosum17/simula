
export type TPlayerDataSettings = {
    tradeFriendsOnly: boolean,
    showNextUi: boolean,
}

export type TPlayerData = {
    name: string,
    coins: number,
    gems: number,
    progStage: number,
    rebirth: number,
    rank: number,
    eggs: number[],
    petIds: Record<string, number>
    settings: TPlayerDataSettings,
}

export type TPlayerTempData = {
    isTrading: boolean,
    sentTradeRegs: number[],
}

export const PLAYER_DATA_DEF = {
    name: '',
    coins: 0,
    gems: 0,
    progStage: 0,
    rebirth: 0,
    rank: 1,
    eggs: [],
    petIds: {},
    settings: {
        tradeFriendsOnly: false,
        showNextUi: true,
    }
} satisfies TPlayerData as TPlayerData

export const PLAYER_TEMP_DATA_DEF = {
    sentTradeRegs: [],
    isTrading: false,

} satisfies TPlayerTempData as TPlayerTempData
