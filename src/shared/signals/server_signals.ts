import Signal from "@rbxts/signal";

export const enteredAreaSig = new Signal<(areaNo: number) => void>()

export const enteredMineSig = new Signal<(areaNo: number) => void>()
