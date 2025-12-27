import { RunService } from "@rbxts/services";
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
import { EggPetsRevealUI } from "shared/egg/ui/egg_pets_reveal_ui";
import { TeleportFrame } from "shared/ui/teleport/TeleportFrame";
import { TradeListFrame } from "shared/ui/trade/TradeListFrame";
import { SettingsFrame } from "shared/ui/settings/SettingsFrame";
import { TradeFrame } from "shared/ui/trade/TradeFrame";

mountFrame(<LeftButtons />)
mountFrame(<InvFrame />)
mountFrame(<TradeListFrame />)
mountFrame(<SettingsFrame />)
mountFrame(<TradeFrame />)
mountFrame(<TeleportFrame />)

mountFrame(<NTooltipFrame />, 3)
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
    // mountFrame(<PetViewer />)

    // const cracker = new EggCracker()
    // UserInputService.InputBegan.Connect((inp, gpe) => {
    //     if (gpe) return
    //     if (inp.KeyCode === Enum.KeyCode.F) {
    //         buyEggSig.Fire(getPlayer(), randInt(0, 18), randInt(1, 4) as 1)
    //         cracker.startCracking(randInt(0, 18), 4)
    //         print('created eggs', cracker)
    //     }
    // })
}
