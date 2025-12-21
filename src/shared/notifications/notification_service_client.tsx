import { mountFrame } from "shared/ui/create_root";
import React from "@rbxts/react";
import { CanNotBuyUI } from "./ui/CanNotBuyUI";

export class NotificationServiceClient {
    constructor() {
        mountFrame(<CanNotBuyUI />, 10)
    }
}