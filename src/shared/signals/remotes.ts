import Net from "@rbxts/net";
import { TVfxTypes } from "shared/effects/vfx/vfx";
import { TPetBody } from "shared/pets/pet";
import { TPlayerTradeData } from "shared/player/player_utils";

export const Remotes = Net.Definitions.Create({
    /// CLIENT to SERVER
    SetAttribute: Net.Definitions.ClientToServerEvent<[part: BasePart, name: string, value: string | number | boolean]>(),
    SetNetOwner: Net.Definitions.ClientToServerEvent<[part: BasePart]>(),
    SendFossilDamage: Net.Definitions.ClientToServerEvent<[part: BasePart, pet: TPetBody]>(),
    CollectDrop: Net.Definitions.ClientToServerEvent<[part: BasePart]>(),
    BuyStage: Net.Definitions.ClientToServerEvent<[stageNo: number]>(),
    UnlockEgg: Net.Definitions.ClientToServerEvent<[eggNo: number]>(),
    BuyEgg: Net.Definitions.ClientToServerEvent<[eggNo: number, count: number]>(),

    //// TRADE
    AddTradeRequest: Net.Definitions.ClientToServerEvent<[remoteUserId: number]>(),
    AcceptTradeRequest: Net.Definitions.ClientToServerEvent<[remoteUserId: number]>(),
    UpdateTrade: Net.Definitions.ClientToServerEvent<[data: Partial<TPlayerTradeData>, player: Player]>(),

    // SERVER TO CLIENT
    PlayVFX: Net.Definitions.ServerToClientEvent<[pos: Vector3, type: TVfxTypes]>(),
    BreakStageBoard: Net.Definitions.ServerToClientEvent<[stageNo: number]>(),
    HatchedNewPets: Net.Definitions.ServerToClientEvent<[petIds: number[]]>(),

    //// TRADE
    StartTrade: Net.Definitions.ServerToClientEvent<[remoteUserId: number]>(),
    CancelTrade: Net.Definitions.ServerToClientEvent<[cancelUserId: number]>(),

    MakeHello: Net.Definitions.ServerAsyncFunction<(message: string) => string>(),

});

