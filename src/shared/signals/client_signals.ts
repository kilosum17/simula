import Signal from "@rbxts/signal";
import { getPetConf, TPetData } from "shared/help/pet_catalog";
import { TPetBody } from "shared/pets/pet";
import { getPlayerPetsFolder } from "shared/pets/pet_utils";

export const mineActionSignal = new Signal()


// PETS
export const petsSig = new Signal<(args: { petBody: TPetBody, petConf: TPetData }[]) => void>()

export const getPetsSigData = () => {
    return petsFolder.GetChildren().map(c => {
        const petBody = c as TPetBody
        const id = (petBody.GetAttribute('id') || 1) as number
        const petConf = getPetConf(id)!
        return { petBody, petConf }
    })
}

const petsFolder = getPlayerPetsFolder()

const updatePetsSig = () => {
    petsSig.Fire(getPetsSigData())
}

petsFolder.ChildAdded.Connect(c => updatePetsSig())
petsFolder.ChildRemoved.Connect(c => updatePetsSig())
updatePetsSig()



