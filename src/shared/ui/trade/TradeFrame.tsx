
import React, { useRef } from "@rbxts/react";
import { MainFrame, TMainFrameAtom } from "../comps/MainFrame";
import { Atom } from "shared/signals/atom";
import { icon } from "shared/help/icons";
import { TradeFrameBody } from "./TradeFrameBody";
import { DEV_PLAYER_ID } from "shared/help/assist";
import { TradeFrameHeader } from "./TradeFrameHeader";
import { invSidebarItems } from "../inv/inventory_utils";

export type TTradeData = {
    localPlayerId: number,
    remotePlayerId: number,
} & TMainFrameAtom

export function TradeFrame() {

    const tradeAtom = useRef(new Atom({
        searchText: '',
        frameKind: "TRADE",
        headerIcon: icon("tools_trade"),
        headerTitle: 'Trading!',
        showSearch: false,
        hideHeader: true,
        showSidebar: true,
        sidebarItems: invSidebarItems,

        localPlayerId: DEV_PLAYER_ID,
        remotePlayerId: DEV_PLAYER_ID,
    } satisfies TTradeData as TTradeData))

    return (
        <MainFrame atom={tradeAtom.current as unknown as Atom<TMainFrameAtom>}  >
            <TradeFrameBody />
            <TradeFrameHeader atom={tradeAtom.current} />
        </MainFrame>
    )
}