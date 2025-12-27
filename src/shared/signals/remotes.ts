import Net from "@rbxts/net";
import { Players } from "@rbxts/services";
import { TVfxTypes } from "shared/effects/vfx/vfx";
import { TPetBody } from "shared/pets/pet";
import { TPlayerDataSettings, TPlayerTradeData } from "shared/player/player_utils";
import { clientEventSig } from "./server_signals";

export type TSendEventToPlayerKind = 'CANCEL_TRADE'

export const Remotes = Net.Definitions.Create({
    /// CLIENT to SERVER
    SetAttribute: Net.Definitions.ClientToServerEvent<[part: BasePart, name: string, value: string | number | boolean]>(),
    SetNetOwner: Net.Definitions.ClientToServerEvent<[part: BasePart]>(),
    SendFossilDamage: Net.Definitions.ClientToServerEvent<[part: BasePart, pet: TPetBody]>(),
    CollectDrop: Net.Definitions.ClientToServerEvent<[part: BasePart]>(),
    BuyStage: Net.Definitions.ClientToServerEvent<[stageNo: number]>(),
    UnlockEgg: Net.Definitions.ClientToServerEvent<[eggNo: number]>(),
    BuyEgg: Net.Definitions.ClientToServerEvent<[eggNo: number, count: number]>(),
    UpdateSettings: Net.Definitions.ClientToServerEvent<[settings: TPlayerDataSettings]>(),
    SendEventToClient: Net.Definitions.ClientToServerEvent<[player: Player, event: TSendEventToPlayerKind, args: unknown]>(),

    //// TRADE
    AddTradeRequest: Net.Definitions.ClientToServerEvent<[remoteUserId: number]>(),
    AcceptTradeRequest: Net.Definitions.ClientToServerEvent<[remoteUserId: number]>(),
    UpdateTrade: Net.Definitions.ClientToServerEvent<[data: Partial<TPlayerTradeData>, player: Player]>(),

    // SERVER TO CLIENT
    PlayVFX: Net.Definitions.ServerToClientEvent<[pos: Vector3, type: TVfxTypes]>(),
    BreakStageBoard: Net.Definitions.ServerToClientEvent<[stageNo: number]>(),
    HatchedNewPets: Net.Definitions.ServerToClientEvent<[petIds: string[]]>(),

    //// TRADE
    StartTrade: Net.Definitions.ServerToClientEvent<[remoteUserId: number]>(),
    CancelTrade: Net.Definitions.ServerToClientEvent<[cancelUserId: number]>(),
    PassEventToPlayer: Net.Definitions.ServerToClientEvent<[event: TSendEventToPlayerKind, args: unknown]>(),

    MakeHello: Net.Definitions.ServerAsyncFunction<(message: string) => string>(),

});

export const sendEventToClient = (player: Player, event: TSendEventToPlayerKind, args: unknown) => {
    if (!typeIs(player, 'Instance')) {
        warn('Not a player', player, event, args)
        return
    }
    if (player === Players.LocalPlayer) {
        clientEventSig.Fire(event, args)
    } else {
        Remotes.Client.Get('SendEventToClient').SendToServer(player, event, args)
    }
}