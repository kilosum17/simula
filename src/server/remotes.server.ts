import { Remotes } from "shared/signals/remotes";
import { buyStageSig, collectDropsSig, fossilDamageSig } from "shared/signals/server_signals";


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


