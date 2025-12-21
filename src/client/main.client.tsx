import { ReplicatedStorage, RunService, UserInputService } from "@rbxts/services";
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
import { NotificationServiceClient } from "shared/notifications/notification_service_client";
import { EggServiceClient } from "shared/egg/egg_service_client";
import { EggCracker } from "shared/egg/egg_cracker";
import { randInt } from "shared/help/math";
import { EggPetsRevealUI } from "shared/egg/ui/egg_pets_reveal_ui";

mountFrame(<LeftButtons />)
mountFrame(<InvFrame />)
mountFrame(<NTooltipFrame />)
mountFrame(<EggPetsRevealUI />)

new PetsServiceClient()
new MineServiceClient()
new FossilServiceClient()
new PlayerServiceClient()
new DropServiceClient()
new NotificationServiceClient()
new EggServiceClient()

// TEST
if (RunService.IsStudio()) {
    // canNotBuyAtom.update({ open: true })
    const cracker = new EggCracker()
    UserInputService.InputBegan.Connect((inp, gpe) => {
        if (gpe) return
        if (inp.KeyCode === Enum.KeyCode.F) {
            cracker.startCracking(randInt(0, 18), 4)
            print('created eggs', cracker)
        }
        if (inp.KeyCode === Enum.KeyCode.R) {
            cracker.stopCracking()
            print('Destrroyed eggs', cracker)
        }
    })
}
