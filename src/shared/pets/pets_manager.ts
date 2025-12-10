import { Pet } from "./pet";
import { PetPositions } from "./pet_positions";
import { PetsService } from "./pets_service";
import { listToCountMap } from "shared/help/math";

export class PetsManager {
    petsServ: PetsService
    pets = [] as Pet[]

    constructor(petsServ: PetsService) {
        this.petsServ = petsServ
    }

    updateEquipedPets(ids: string[]) {
        const existCounts = listToCountMap(this.pets.map(p => p.id))
        const newCounts = listToCountMap(ids)
        const addCounts = {} as Record<string, number>
        for (const [id, count] of pairs(existCounts)) {
            const newCount = newCounts[id] || 0
            addCounts[id] = newCount - count
        }
        for (const [id, count] of pairs(newCounts)) {
            if (existCounts[id]) continue
            addCounts[id] = count
        }

        for (const [id, count] of pairs(addCounts)) {
            if (count > 0) {
                this._addPet(id, count)
            }
            if (count < 0) {
                this._removePet(id, -count)
            }
        }
        this._setPetPositions()
    }

    _addPet(id: string, count: number) {
        for (let i = 0; i < count; i++) {
            const pet = new Pet(this, id)
            this.pets.push(pet)
        }
    }

    _removePet(id: string, count: number) {
        for (let i = 0; i < count; i++) {
            let idx = -1
            for (let i = this.pets.size() - 1; i >= 0; i--) {
                if (this.pets[i].id === id) {
                    idx = i
                    break
                }
            }
            if (idx === -1) {
                warn("Did not find pet", id, count)
                return
            }
            const pet = this.pets.remove(idx)
            if (pet) pet.kill()
        }
    }

    _setPetPositions() {
        this.pets.forEach((pet, i) => {
            pet.setPos(i)
        })
    }

}