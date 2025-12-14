import { Remotes } from "shared/signals/remotes";

const MakeHello = Remotes.Client.Get("MakeHello")

MakeHello.CallServerAsync("Roblox").then((message: string) => {
    print(message);
});
