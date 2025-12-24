import { useEffect, useState } from "@rbxts/react"
import { decodeAttribute, encodedAttribute, getPlayer } from "shared/help/assist"
import { PLAYER_DATA_DEF, PLAYER_TEMP_DATA_DEF, TPlayerData, TPlayerTempData } from "shared/player/player_utils"

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

export const getPlayerAtts = (player?: Player) => {
    const data = (player || getPlayer()).GetAttributes() as unknown as TPlayerAtts
    const decData = {} as Record<string, unknown>
    for (const [key, val] of pairs(data)) {
        decData[key] = decodeAttribute(val)
    }
    return { ...PLAYER_ATTS_DEF, ...decData } as TPlayerAtts
}

export const setPlayerAtts = (data: Partial<TPlayerAtts>, _player?: Player) => {
    const player = (_player || getPlayer())
    for (const [key, val] of pairs(data)) {
        player.SetAttribute(key, encodedAttribute(val))
    }
}

export const usePlayerAtts = <T extends Partial<TPlayerAtts>,>(def: T, _player?: Player) => {
    const [data, setData] = useState(getPlayerAtts() as T)

    useEffect(() => {
        const player = _player || getPlayer()
        const connection = player.AttributeChanged.Connect((name) => {
            if (def[name as 'gems'] !== undefined) {
                const newData = getPlayerAtts(player) as T
                setData(newData)
                // print('got data', newData)
            }
        })
        return () => connection.Disconnect()
    }, [])

    return data
}

