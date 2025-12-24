import { Players } from "@rbxts/services";
import { getEggState } from "shared/egg/egg_utils";
import { getPlayerAtts, setPlayerAtts } from "shared/signals/player_attributes";
import { Remotes } from "shared/signals/remotes";
import { buyEggSig, buyStageSig, collectDropsSig, fossilDamageSig, unlockEggSig } from "shared/signals/server_signals";


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

Remotes.Server.Get('AddTradeRequest').Connect((player, remoteUserId,) => {
    const remotePlayer = Players.GetPlayerByUserId(remoteUserId)
    if (!remotePlayer) return
    const { sentTradeRegs } = getPlayerAtts(player)
    sentTradeRegs.push(remoteUserId)
    setPlayerAtts({ sentTradeRegs }, player)
});

