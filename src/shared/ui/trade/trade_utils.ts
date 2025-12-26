import { deepClone, getPlayer } from "shared/help/assist"
import { TMainFrameAtom } from "../comps/MainFrame"
import { invSidebarItems } from "../inv/inventory_utils"
import { Atom } from "shared/signals/atom"
import { icon } from "shared/help/icons"

export type TTradeData = {
    localPlayerId: number,
    remotePlayerId: number,
} & TMainFrameAtom

export const getDefTradeData = () => {
    return {
        searchText: '',
        frameKind: "TRADE",
        headerIcon: icon("tools_trade"),
        headerTitle: 'Trading!',
        showSearch: false,
        hideHeader: true,
        showSidebar: true,
        sidebarItems: invSidebarItems,

        localPlayerId: getPlayer().UserId,
        remotePlayerId: getPlayer().UserId,
    } satisfies TTradeData as TTradeData
}

export const tradeAtom = new Atom(getDefTradeData())
