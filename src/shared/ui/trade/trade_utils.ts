import { deepClone, getPlayer } from "shared/help/assist"
import { TMainFrameAtom } from "../comps/MainFrame"
import { invSidebarItems } from "../inv/inventory_utils"
import { Atom } from "shared/signals/atom"
import { icon } from "shared/help/icons"
import { Players } from "@rbxts/services"

export const tradeFrameAtom = new Atom({
    searchText: '',
    frameKind: "TRADE",
    headerIcon: icon("tools_trade"),
    headerTitle: 'Trading!',
    showSearch: false,
    hideHeader: true,
    showSidebar: true,
    sidebarItems: invSidebarItems,
} satisfies TMainFrameAtom as TMainFrameAtom)

// export const tradeDataAtom = new Atom({
//     open: false,
// })

export const getCancelTradeMessage = (closerUserId: number) => {
    const player = getPlayer()
    if (player.UserId === closerUserId) {
        return "You Canceled Trade!"
    }
    const remotePlayer = Players.GetPlayerByUserId(closerUserId)
    return `${remotePlayer?.DisplayName} Canceled Trade!`
}
