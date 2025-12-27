import { Players, RunService } from "@rbxts/services";
import { getEggState } from "shared/egg/egg_utils";
import { getPlayerAtts, setPlayerAtts } from "shared/signals/player_attributes";
import { Remotes } from "shared/signals/remotes";
import { buyEggSig, buyStageSig, collectDropsSig, fossilDamageSig, unlockEggSig, updateSettingsSig } from "shared/signals/server_signals";


Remotes.Server.Get('SetAttribute').Connect((_player, part, name, value) => {
    part.SetAttribute(name, value)
});


Remotes.Server.Get('SetNetOwner').Connect((_player, part) => {
    if (!part.Parent) {
        warn('Set network owner for destroyed', part)
        return
    }
    part.SetNetworkOwner(_player)
});

Remotes.Server.Get('SendFossilDamage').Connect((player, fossil, pet) => {
    fossilDamageSig.Fire(player, fossil, pet)
});


Remotes.Server.Get('CollectDrop').Connect((player, drop) => {
    collectDropsSig.Fire(player, drop)
});

Remotes.Server.Get('BuyStage').Connect((player, stageNo) => {
    buyStageSig.Fire(player, stageNo)
});

Remotes.Server.Get('UnlockEgg').Connect((player, eggNo) => {
    unlockEggSig.Fire(player, eggNo)
});

Remotes.Server.Get('BuyEgg').Connect((player, eggNo, eggCount) => {
    buyEggSig.Fire(player, eggNo, eggCount)
});

Remotes.Server.Get('UpdateSettings').Connect((player, settings) => {
    updateSettingsSig.Fire(player, settings)
});

Remotes.Server.Get('AddTradeRequest').Connect((player, remoteUserId,) => {
    const remotePlayer = Players.GetPlayerByUserId(remoteUserId)
    if (!remotePlayer) return
    const localData = getPlayerAtts(player).trade
    localData.sentTradeRegs.push(remoteUserId)
    setPlayerAtts({ trade: localData }, player)
});

Remotes.Server.Get('AcceptTradeRequest').Connect((player, remoteUserId) => {
    const remotePlayer = Players.GetPlayerByUserId(remoteUserId)
    if (!remotePlayer) return
    const localPlayer = player
    const remoteData = getPlayerAtts(remotePlayer).trade
    const localData = getPlayerAtts(localPlayer).trade
    if (!remoteData.sentTradeRegs.includes(localPlayer.UserId)) {
        warn("NO trade reg from", remotePlayer.Name, 'local', localPlayer.Name)
        return
    }
    if (remoteData.isTrading) {
        warn("Playe isTrading :", remotePlayer.Name, 'local', localPlayer.Name)
        return
    }
    remoteData.sentTradeRegs = remoteData.sentTradeRegs
        .filter(t => t !== localPlayer.UserId)
    remoteData.isTrading = true
    localData.isTrading = true
    remoteData.tradePatner = localPlayer.UserId
    localData.tradePatner = remotePlayer.UserId
    setPlayerAtts({ trade: remoteData }, remotePlayer)
    setPlayerAtts({ trade: localData }, localPlayer)
    Remotes.Server.Get("StartTrade").SendToPlayer(localPlayer, remotePlayer.UserId)
    Remotes.Server.Get("StartTrade").SendToPlayer(remotePlayer, localPlayer.UserId)
});

Remotes.Server.Get('UpdateTrade').Connect((_, data, player) => {
    if (data.sentTradeRegs) delete data.sentTradeRegs
    const trade = getPlayerAtts(player).trade
    const newTrade = { ...trade, ...data }
    setPlayerAtts({ trade: newTrade }, player)
})

Remotes.Server.Get('SendEventToClient').Connect((_, player, event, arg) => {
    Remotes.Server.Get('PassEventToPlayer').SendToPlayer(player, event, arg)
})


