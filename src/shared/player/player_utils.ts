import { randInt } from "shared/help/math"

const DEF_BOOSTS = {
    '1001': randInt(10, 50),
    '1003': randInt(10, 50),
    '1005': randInt(10, 50),
    '1006': randInt(10, 50),

    '3001': randInt(10, 50),
    '3003': randInt(10, 50),
    '3005': randInt(10, 50),
    '3006': randInt(10, 50),

    '4001': randInt(10, 50),
    '4003': randInt(10, 50),
    '4005': randInt(10, 50),
    '4006': randInt(10, 50),
}

export type TPlayerDataSettings = {
    music: number,
    sfx: number,
    showOtherPets: boolean,
    tradingType: 'all' | 'none',
    petSfx: boolean,
    showAlerts: boolean,
    alertSfx: number,
    mountTitans: boolean,
    petsFollowTaps: boolean,
    showBoosts: boolean,
    showGlobalNames: boolean,
    showNextArea: boolean,
    vibrations: boolean,
    showProfiles: boolean,

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
    boostIds: Record<string, number>
    settings: TPlayerDataSettings,
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
    boostIds: DEF_BOOSTS,
    settings: {
        music: 0.5,
        sfx: 0.5,
        showOtherPets: true,
        tradingType: 'all',
        petSfx: true,
        showAlerts: true,
        alertSfx: 0.5,
        mountTitans: true,
        petsFollowTaps: true,
        showBoosts: true,
        showGlobalNames: true,
        showNextArea: true,
        vibrations: true,
        showProfiles: true,

    }
} satisfies TPlayerData as TPlayerData

export type TPlayerTradeData = {
    isTrading: boolean,
    isReady: boolean,
    isConfirmed: boolean,
    tradePatner: number,
    sentTradeRegs: number[],
    tradeItems: Record<string, number>,
}

export type TPlayerTempData = {
    trade: TPlayerTradeData,
}

export const PLAYER_TEMP_DATA_DEF = {
    trade: {
        isTrading: false,
        isReady: false,
        isConfirmed: false,
        tradePatner: 0,
        sentTradeRegs: [],
        tradeItems: {},
    }
} satisfies TPlayerTempData as TPlayerTempData

