
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

export const PLAYER_TEMP_DATA_DEF = {
    sentTradeRegs: [],
    isTrading: false,

} satisfies TPlayerTempData as TPlayerTempData
