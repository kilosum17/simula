import { useEventListener } from "@rbxts/pretty-react-hooks"
import { useState } from "@rbxts/react"
import { getPlayer } from "shared/help/assist"
import { PLAYER_DATA_DEF } from "shared/signals/player_attributes"

const player = getPlayer()

export const usePlayerData = () => {
    const [data, setData] = useState(PLAYER_DATA_DEF)

    useEventListener(player.AttributeChanged, (name) => {
        setData({ ...data, [name]: player.GetAttribute(name) })
    })

    return data
}
