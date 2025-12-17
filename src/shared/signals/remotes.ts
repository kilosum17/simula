import Net from "@rbxts/net";
import { TVfxTypes } from "shared/effects/vfx/vfx";
import { TPetBody } from "shared/pets/pet";

export const Remotes = Net.Definitions.Create({

    SetAttribute: Net.Definitions.ClientToServerEvent<[part: BasePart, name: string, value: string | number | boolean]>(),
    SetNetOwner: Net.Definitions.ClientToServerEvent<[part: BasePart]>(),
    SendFossilDamage: Net.Definitions.ClientToServerEvent<[part: BasePart, pet: TPetBody]>(),
    CollectDrop: Net.Definitions.ClientToServerEvent<[part: BasePart]>(),

    SendPlayVFX: Net.Definitions.ServerToClientEvent<[pos: Vector3, type: TVfxTypes]>(),

    MakeHello: Net.Definitions.ServerAsyncFunction<(message: string) => string>(),

});

