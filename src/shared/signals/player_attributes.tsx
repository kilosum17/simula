import { useEventListener } from "@rbxts/pretty-react-hooks"
import { useEffect, useState } from "@rbxts/react"
import { decodeAttribute, getPlayer } from "shared/help/assist"

export type TPlayerAtts = {
    coins: number,
    gems: number,
    progStage: number,
    rebirth: number,
    inMine: boolean,
    inStageNo: number,
    eggs: number[],

    isCrackingEgg: boolean,

}

export const PLAYER_ATTS_DEF = {
    coins: 0,
    gems: 0,
    progStage: 0,
    rebirth: 0,
    inMine: false,
    inStageNo: 0,
    eggs: [1],
    isCrackingEgg: false,
} as TPlayerAtts

export const getPlayerAtts = (player?: Player) => {
    const data = (player || getPlayer()).GetAttributes() as unknown as TPlayerAtts
    const decData = {} as Record<string, unknown>
    for (const [key, val] of pairs(data)) {
        decData[key] = decodeAttribute(val)
    }
    return { ...PLAYER_ATTS_DEF, ...decData } as TPlayerAtts
}

export const usePlayerAtts = <T extends Partial<TPlayerAtts>,>(def: T) => {
    const [data, setData] = useState(getPlayerAtts() as T)

    useEffect(() => {
        const connection = getPlayer().AttributeChanged.Connect((name) => {
            if (def[name as 'gems']) {
                const newData = getPlayerAtts() as T
                setData(newData)
                // print('got data', newData)
            }
        })
        return () => connection.Disconnect()
    }, [])

    return data
}

