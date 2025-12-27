import { mountFrame } from "shared/ui/create_root";
import React from "@rbxts/react";
import { CanNotUI } from "./ui/CanNotBuyUI";

export class NotificationServiceClient {
    constructor() {
        mountFrame(<CanNotUI />, 10)
    }
}