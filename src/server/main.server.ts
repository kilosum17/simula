import { Players } from "@rbxts/services";
import { FossilService } from "shared/fossils/fossil_services";
import { PlayerService } from "shared/player/player_service";

const playerServices = {} as Record<number, PlayerService>

Players.PlayerAdded.Connect(player => {
    const ps = new PlayerService(player)
    playerServices[player.UserId] = ps
})

Players.PlayerRemoving.Connect(player => {
    const ps = playerServices[player.UserId]
    if (ps) {
        ps.playerRemoving()
    }
})

const fossilService = new FossilService()

