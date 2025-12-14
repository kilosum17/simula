import Signal from "@rbxts/signal";

export const enteredAreaSig = new Signal<(player: Player, areaNo: number, val: number) => void>()

export const enteredMineSig = new Signal<(player: Player, areaNo: number, val: boolean) => void>()
