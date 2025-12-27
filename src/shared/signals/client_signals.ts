import Signal from "@rbxts/signal";
import { getPetConf } from "shared/help/pet_catalog";
import { TPetBody } from "shared/pets/pet";
import { getPlayerPetsFolder } from "shared/pets/pet_utils";
import { Atom } from "./atom";

export const mineActionSignal = new Signal()

export type IPageName = "INV"
export const pageChangeSignal = new Signal<(page: IPageName, open: boolean) => void>()

// PETS sync
const petsFolder = getPlayerPetsFolder()

const getPetsSigData = () => {
    return petsFolder.GetChildren().map(c => {
        const petBody = c as TPetBody
        const id = (petBody.GetAttribute('id') || '1') as string
        const petConf = getPetConf(id)!
        return { petBody, petConf }
    })
}

export const petsAtom = new Atom(getPetsSigData())

petsFolder.ChildAdded.Connect(() => {
    petsAtom.update(getPetsSigData())
})

petsFolder.ChildRemoved.Connect(() => {
    petsAtom.update(getPetsSigData())
})

