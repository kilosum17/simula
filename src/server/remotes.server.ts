import { Remotes } from "shared/signals/remotes";

const SetAttribute = Remotes.Server.Get("SetAttribute")
const MakeHello = Remotes.Server.Get("MakeHello")

SetAttribute.Connect((_player, part, name, value) => {
    part.SetAttribute(name, value)
});

// This will take the input string
// e.g. 'Roblox' and turn it into 'Hello, Roblox!', and send it back to the client
MakeHello.SetCallback((player: Player, message: string) => `Hello, ${message}!`);