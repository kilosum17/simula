import { getPlayer } from "shared/help/assist";
import { MineServiceClient } from "./mine_service_client";

export class MineSender {
    mineServ: MineServiceClient

    constructor(mineServ: MineServiceClient) {
        this.mineServ = mineServ
    }

    sendToArea(areaNo: number) {
        warn("Sending pets to", areaNo, getPlayer())
    }

}