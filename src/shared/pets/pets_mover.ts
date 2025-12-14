import { PetsServiceClient } from "./pets_service_client";
import { TPetBody } from "./pet";
import { PetBouncer } from "./pet_bouncer";
import { getPlayerPetsFolder } from "./pet_utils";
import { PetClient } from "./pet_client";

export class PetsMover {
    petCServ: PetsServiceClient
    petBouncher: PetBouncer
    pets = [] as PetClient[]
    moverStatus = "FOLLOW" as "FOLLOW" | "GOMINE" | "MINING"
    stageNo = 0

    constructor(petCServ: PetsServiceClient) {
        this.petCServ = petCServ
        this.petBouncher = new PetBouncer()

        const fold = getPlayerPetsFolder()
        fold.GetChildren().forEach(c => {
            this.addPetClient(c as TPetBody)
        })
        fold.ChildAdded.Connect(c => this.addPetClient(c as TPetBody))
        fold.ChildRemoved.Connect(c => this.removePetClient(c as TPetBody))
    }

    addPetClient(petBody: TPetBody) {
        const pet = new PetClient(this, petBody)
        this.pets.push(pet)
    }

    removePetClient(petBody: TPetBody) {
        this.pets = this.pets.filter(p => p._body !== petBody)
    }

    enteredMine(stageNo: number) {
        this.stageNo = stageNo
        this.moverStatus = "GOMINE"
        this.pets.forEach(p => {
            p.startMining()
        })
    }

    leavingMine() {
        this.moverStatus = "FOLLOW"
        this.pets.forEach(p => {
            p.stopMining()
        })
    }

}