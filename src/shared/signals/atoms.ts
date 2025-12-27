import { Atom } from "./atom";

// UI atoms

export const canNotAtom = new Atom({
    open: false,
    message: '',
    kind: '' as 'STAGE' | 'EGG' | "LOCKED_AREA" | 'ALREADY_IN_AREA' |
        "ALREADY_TRADING" | 'CUSTOM'
})


export type TFrameKind = "" | 'INV' | "TELEPORT" | "TRADE_LIST" | 'SETTINGS'
    | "TRADE"

export const frameStateAtom = new Atom({
    frame: '' as TFrameKind,
    isLock: false,
})

export const hatchedDropperAtom = new Atom({
    open: false,
    petIds: [] as string[],
    cords: [] as number[][],
})
