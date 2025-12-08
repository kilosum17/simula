import Signal from "@rbxts/signal";

const signal = new Signal<(tab: Array<string>) => void>();
const strings = new Array<string>();

signal.Connect(a => print(a))

print(strings) // table: 2BC04578
signal.Fire(strings) // table: 2BC04578

export const mineActionSignal=new Signal()
