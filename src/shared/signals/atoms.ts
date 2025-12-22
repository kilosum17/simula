import { Atom } from "./atom";

// UI atoms

export const canNotBuyAtom = new Atom({
    open: false,
    kind: '' as 'STAGE' | 'EGG'
})


export type TFrameKind = 'INV' | "TELEPORT" | ""

export const frameStateAtom = new Atom({ frame: '' as TFrameKind })

export const hatchedDropperAtom = new Atom({
    open: false,
    petIds: [] as number[],
    cords: [] as number[][],
})
