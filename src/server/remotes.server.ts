import { Remotes } from "shared/signals/remotes";
import { fossilDamageSig } from "shared/signals/server_signals";

const SetAttribute = Remotes.Server.Get("SetAttribute")
const SendFossilDamage = Remotes.Server.Get("SendFossilDamage")
const MakeHello = Remotes.Server.Get("MakeHello")

SetAttribute.Connect((_player, part, name, value) => {
    part.SetAttribute(name, value)
});

SendFossilDamage.Connect((player, fossil, pet) => {
    // part.SetAttribute(name, value)
    fossilDamageSig.Fire(player, fossil, pet)
});

// This will take the input string
MakeHello.SetCallback((player: Player, message: string) => `Hello, ${message}!`);