import "./dev";

import React from "@rbxts/react";
import { DropServiceClient } from "shared/drops/drops_service_client";
import { FossilServiceClient } from "shared/fossils/fossil_service_client";
import { MineServiceClient } from "shared/mine/mine_service_client";
import { PetsServiceClient } from "shared/pets/pets_service_client";
import { PlayerServiceClient } from "shared/player/player_service_client";
import { mountFrame } from "shared/ui/create_root";
import { InvFrame } from "shared/ui/inv/InvFrame";
import { LeftButtons } from "shared/ui/leftbuttons/LeftButtons";
import { NTooltipFrame } from "shared/ui/nitifications/NTooltip";

mountFrame(<LeftButtons />)
mountFrame(<InvFrame />)
mountFrame(<NTooltipFrame />)


new PetsServiceClient()
new MineServiceClient()
new FossilServiceClient()
new PlayerServiceClient()
new DropServiceClient()
