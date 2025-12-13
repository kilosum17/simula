import "./dev";

import React from "@rbxts/react";
import { PetsServiceClient } from "shared/pets/pets_service_client";
import { mountFrame } from "shared/ui/create_root";
import { InvFrame } from "shared/ui/inv/InvFrame";
import { LeftButtons } from "shared/ui/leftbuttons/LeftButtons";

mountFrame(<LeftButtons />)
mountFrame(<InvFrame />)

new PetsServiceClient()

