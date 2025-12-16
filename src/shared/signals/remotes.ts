import Net from "@rbxts/net";
import { TVfxTypes } from "shared/effects/vfx/vfx";
import { TPetBody } from "shared/pets/pet";

export const Remotes = Net.Definitions.Create({
    MakeHello: Net.Definitions.ServerAsyncFunction<(message: string) => string>(),
    SetAttribute: Net.Definitions.ClientToServerEvent<[part: BasePart, name: string, value: string | number | boolean]>(),
    SendFossilDamage: Net.Definitions.ClientToServerEvent<[part: BasePart, pet: TPetBody]>(),
    SendPlayVFX: Net.Definitions.ServerToClientEvent<[pos: Vector3, type: TVfxTypes]>(),

});

