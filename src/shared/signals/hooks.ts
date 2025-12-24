import { useEffect, useState } from "@rbxts/react"
import { Players } from "@rbxts/services"

export const usePlayers = () => {
    const [players, setPlayers] = useState(Players.GetPlayers())

    useEffect(() => {
        Players.PlayerAdded.Connect((player) => {
            setPlayers([...players, player])
        })
        Players.PlayerRemoving.Connect((player) => {
            setPlayers(players.filter(p => p !== player))
        })
    })

    return players
}