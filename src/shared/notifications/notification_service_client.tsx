import { mountFrame } from "shared/ui/create_root";
import { CanNotBuyStage } from "./ui/CanNotBuyStage";
import React from "@rbxts/react";


export class NotificationServiceClient {
    constructor() {
        mountFrame(<CanNotBuyStage />, 10)
    }
}