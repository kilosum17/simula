import { PlayerLocation } from "shared/player/player_location";
import { enteredMineSig } from "shared/signals/server_signals";
import { MineSender } from "./mine_sender";
import { getPlayer } from "shared/help/assist";

export class MineServiceClient {
    ps_location: PlayerLocation
    ms_sender: MineSender

    constructor() {
        const player = getPlayer()
        this.ps_location = new PlayerLocation(player)
        this.ms_sender = new MineSender(this)

        enteredMineSig.Connect((p, areaNo, entered) => {
            if (entered) {
                this.ms_sender.sendToArea(areaNo)
            }
        })
    }

}