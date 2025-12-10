import { PhysicsService, Players } from "@rbxts/services";
import { FossilService } from "shared/fossils/fossil_services";
import { PetsService } from "shared/pets/pets_service";
import { PlayerService } from "shared/player/player_service";

PhysicsService.RegisterCollisionGroup("PET")
PhysicsService.RegisterCollisionGroup("PLAYER")
// PhysicsService.RegisterCollisionGroup("FOSSIL")
PhysicsService.CollisionGroupSetCollidable("PET", "PET", false)
PhysicsService.CollisionGroupSetCollidable("PET", "PLAYER", false)
// PhysicsService.CollisionGroupSetCollidable("PET", "FOSSIL", false)
// PhysicsService.CollisionGroupSetCollidable("PLAYER", "FOSSIL", false)

const playerServices = {} as Record<number, PlayerService>
const petsServices = {} as Record<number, PetsService>

Players.PlayerAdded.Connect(player => {
    const ps = new PlayerService(player)
    playerServices[player.UserId] = ps

    const petServ = new PetsService(player)
    petsServices[player.UserId] = petServ
})

Players.PlayerRemoving.Connect(player => {
    const ps = playerServices[player.UserId]
    if (ps) {
        ps.playerRemoving()
    }
})

const fossilService = new FossilService()

