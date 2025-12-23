import { useEffect, useState } from "@rbxts/react"

export type TFossilAtts = {
    health: number,
    killed: boolean,
    maxHealth: number,
    guid: number,
    lastMineTime: number,
    accessed: boolean,
}

export const FOSSIL_ATTS_DEF = {
    maxHealth: 100,
    health: 100,
    killed: false,
    guid: 0,
    lastMineTime: 0,
    accessed: false,
} as TFossilAtts

export const getFossilAtts = (fossil: BasePart) => {
    const data = fossil.GetAttributes() as unknown as TFossilAtts
    return { ...FOSSIL_ATTS_DEF, ...data }
}

export const useFossilAtts = (fossil: BasePart) => {
    const [data, setData] = useState(getFossilAtts(fossil))
    const [lastMine, setLastMine] = useState(-math.huge)

    useEffect(() => {
        fossil.AttributeChanged.Connect((name) => {
            setData(getFossilAtts(fossil))
            if (name === "health") {
                setLastMine(os.time())
            }
        })
    }, [])

    return { ...data, lastMine }
}
