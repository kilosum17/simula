import Signal from "@rbxts/signal";
import { TPetBody } from "shared/pets/pet";

export const enteredAreaSig = new Signal<(player: Player, areaNo: number, enter: number) => void>()

export const enteredMineSig = new Signal<(player: Player, areaNo: number, enter: boolean) => void>()

export const fossilDamageSig = new Signal<(player: Player, fossil: BasePart, petBody: TPetBody) => void>()

export const addDropsSig = new Signal<(pos: Vector3) => void>()

export const collectDropsSig = new Signal<(player: Player, drop: BasePart) => void>()

export const buyStageSig = new Signal<(player: Player, stageNo: number) => void>()

export const unlockEggSig = new Signal<(player: Player, eggNo: number) => void>()

export const buyEggSig = new Signal<(player: Player, eggNo: number, count: number) => void>()

export const updateEquipedPets = new Signal<(player: Player, petsIds: Record<string, number>) => void>()

export const freezePetsSig = new Signal<(freeze: boolean) => void>()
