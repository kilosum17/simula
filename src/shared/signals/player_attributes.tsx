import { useEventListener } from "@rbxts/pretty-react-hooks"
import { useState } from "@rbxts/react"
import { number } from "@rbxts/react/src/prop-types"
import { decodeAttribute, getPlayer } from "shared/help/assist"

export type TPlayerAtts = {
    coins: number,
    gems: number,
    progStage: number,
    rebirth: number,
    inMine: boolean,
    inStageNo: number,
    eggs: number[],
}

export const PLAYER_ATTS_DEF = {
    coins: 0,
    gems: 0,
    progStage: 0,
    rebirth: 0,
    inMine: false,
    inStageNo: 0,
    eggs: [1],
} as TPlayerAtts

export const getPlayerAtts = (player?: Player) => {
    const data = (player || getPlayer()).GetAttributes() as unknown as TPlayerAtts
    const decData = {} as Record<string, unknown>
    for (const [key, val] of pairs(data)) {
        decData[key] = decodeAttribute(val)
    }
    return { ...PLAYER_ATTS_DEF, ...decData } as TPlayerAtts
}

export const usePlayerAtts = () => {
    const [data, setData] = useState(getPlayerAtts())

    useEventListener(getPlayer().AttributeChanged, () => {
        const newData = getPlayerAtts()
        setData(newData)
        // print('got data', newData)
    })

    return data
}

