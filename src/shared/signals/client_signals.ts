import Signal from "@rbxts/signal";
import { getPetConf, TPetData } from "shared/help/pet_catalog";
import { TPetBody } from "shared/pets/pet";
import { getPlayerPetsFolder } from "shared/pets/pet_utils";
import { Sync } from "./Sync";

export const mineActionSignal = new Signal()

export type IPageName = "INV"
export const pageChangeSignal = new Signal<(page: IPageName, open: boolean) => void>()

// PETS sync
const petsFolder = getPlayerPetsFolder()

export const getPetsSigData = () => {
    return petsFolder.GetChildren().map(c => {
        const petBody = c as TPetBody
        const id = (petBody.GetAttribute('id') || 1) as number
        const petConf = getPetConf(id)!
        return { petBody, petConf }
    })
}

export const petsSync = new Sync(getPetsSigData())

petsFolder.ChildAdded.Connect(() => {
    petsSync.update(getPetsSigData())
})

petsFolder.ChildRemoved.Connect(() => {
    petsSync.update(getPetsSigData())
})



