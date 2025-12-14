import Net from "@rbxts/net";

export const Remotes = Net.Definitions.Create({
    MakeHello: Net.Definitions.ServerAsyncFunction<(message: string) => string>(),
    SetAttribute: Net.Definitions.ClientToServerEvent<[part: BasePart, name: string, value: string | number | boolean]>(),
});

