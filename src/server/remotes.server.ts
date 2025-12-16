import { Remotes } from "shared/signals/remotes";
import { fossilDamageSig } from "shared/signals/server_signals";


Remotes.Server.Get('SetAttribute').Connect((_player, part, name, value) => {
    part.SetAttribute(name, value)
});

Remotes.Server.Get('SendFossilDamage').Connect((player, fossil, pet) => {
    // part.SetAttribute(name, value)
    fossilDamageSig.Fire(player, fossil, pet)
});

