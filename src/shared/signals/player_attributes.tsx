import { useEffect, useState } from "@rbxts/react"
import { addMissingKeysToMap, decodeAttribute, encodedAttribute, getPlayer } from "shared/help/assist"
import { PLAYER_DATA_DEF, PLAYER_TEMP_DATA_DEF, TPlayerData, TPlayerDataSettings, TPlayerTempData } from "shared/player/player_utils"

export type TPlayerAtts = {
    inMine: boolean,
    inStageNo: number,
    isCrackingEgg: boolean,

} & TPlayerData & TPlayerTempData

export const PLAYER_ATTS_DEF = {
    ...PLAYER_DATA_DEF,
    ...PLAYER_TEMP_DATA_DEF,

    inMine: false,
    inStageNo: 0,
    isCrackingEgg: false,

} satisfies TPlayerAtts as TPlayerAtts

export const setPlayerAtts = (data: Partial<TPlayerAtts>, _player?: Player) => {
    const player = (_player || getPlayer())
    for (const [key, val] of pairs(data)) {
        if (key === 'settings' && typeIs(val, 'table')) {
            addMissingKeysToMap(val as Record<string, unknown>, PLAYER_ATTS_DEF.settings)
        }
        player.SetAttribute(key, encodedAttribute(val))
    }
}

export const usePlayerAtts = <T extends keyof TPlayerAtts,>(keys: T[], _player?: Player) => {
    const [data, setData] = useState(getPlayerAtts() as Pick<TPlayerAtts, T>)

    useEffect(() => {
        const player = _player || getPlayer()
        const connection = player.AttributeChanged.Connect((name) => {
            if ((keys as string[]).includes(name)) {
                const newData = getPlayerAtts(player)
                setData(newData)
                // print('got data', newData)
            }
        })
        return () => connection.Disconnect()
    }, [])

    return data
}

export const playerHasItems = (player: Player, itemIds: Record<string, number>) => {
    if (player?.UserId === undefined) return false
    const data = getPlayerAtts(player)
    const allItems = { ...data.boostIds, ...data.petIds }
    for (const [key, count] of pairs(itemIds)) {
        if (allItems[key] === undefined) return false
        if (allItems[key] < itemIds[key]) return false
    }
    return true
}

export const getPlayerAtts = (player?: Player) => {
    const data = (player || getPlayer()).GetAttributes() as unknown as TPlayerAtts
    const decData = {} as Record<string, unknown>
    for (const [key, val] of pairs(data)) {
        decData[key] = decodeAttribute(val)
    }
    return { ...PLAYER_ATTS_DEF, ...decData } as TPlayerAtts
}
