import Signal from "@rbxts/signal";
import { TPetBody } from "shared/pets/pet";

export const enteredAreaSig = new Signal<(player: Player, areaNo: number, val: number) => void>()

export const enteredMineSig = new Signal<(player: Player, areaNo: number, val: boolean) => void>()

export const fossilDamageSig = new Signal<(player: Player, fossil: BasePart, petBody: TPetBody) => void>()

