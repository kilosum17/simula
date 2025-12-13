import { useState } from "@rbxts/react"
import { Sync } from "shared/signals/Sync"

type TPageKind = "" | "INV"

const pageSig = new Sync({
    page: "" as TPageKind
})
const usePageSig = pageSig.getHook()

export const usePageState = () => {
    const [{ page }, pageSig] = usePageSig()

    const setPage = (page: TPageKind) => {
        pageSig.update({ page })
    }

    return { page, setPage }
}