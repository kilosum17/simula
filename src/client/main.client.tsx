import "./dev";

import React, { StrictMode } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import { App } from "./components/app";
import { PetsServiceClient } from "shared/pets/pets_service_client";
import { root } from "shared/ui/create_root";

const target = Players.LocalPlayer.WaitForChild("PlayerGui");
root.render(<StrictMode>{createPortal(<App />, target)}</StrictMode>);

new PetsServiceClient()

