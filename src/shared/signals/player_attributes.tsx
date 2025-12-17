import { useEventListener } from "@rbxts/pretty-react-hooks"
import { useState } from "@rbxts/react"
import { getPlayer } from "shared/help/assist"

export type TPlayerAtts = {
    coins: number,
    gems: number,
    progStage: number,
    rebirth: number,
    inMine: boolean,
    inStageNo: number,
}

export const PLAYER_ATTS_DEF = {
    coins: 0,
    gems: 0,
    progStage: 0,
    rebirth: 0,
    inMine: false,
    inStageNo: 0,
} as TPlayerAtts

export const getPlayerAtts = (player?: Player) => {
    const data = (player || getPlayer()).GetAttributes() as unknown as TPlayerAtts
    return { ...PLAYER_ATTS_DEF, ...data }
}

export const usePlayerAtts = () => {
    const [data, setData] = useState(getPlayerAtts())

    useEventListener(getPlayer().AttributeChanged, () => {
        setData(getPlayerAtts())
    })

    return data
}
