import { useEffect, useState } from "@rbxts/react"
import { getPetsSigData, petsSig } from "shared/signals/client_signals"

export const usePets = () => {
    const [pets, setPets] = useState(getPetsSigData())

    useEffect(() => {
        petsSig.Connect(pets => {
            setPets(pets)
        })
    }, [])

    return { pets }
}