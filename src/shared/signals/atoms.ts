import { getPlayerPetsFolder } from "shared/pets/pet_utils";
import { Atom } from "./atom";

// UI atoms
export const canNotBuyAtom = new Atom({ open: false })


export type TFrameKind = 'INV' | ""

export const frameStateAtom = new Atom({ frame: '' as TFrameKind })

