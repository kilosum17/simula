
import React, { useRef } from "@rbxts/react";
import { MainFrame, TMainFrameAtom } from "../comps/MainFrame";
import { Atom } from "shared/signals/atom";
import { icon } from "shared/help/icons";
import { TradeListFooter } from "./TradeListFooter";
import { TradeListBody } from "./TradeListBody";

export function TradeListFrame() {
    const atom = useRef(new Atom({
        searchText: '',
        frameKind: "TRADE_LIST",
        headerIcon: icon("tools_trade"),
        headerTitle: 'Trading!',
        showSearch: false,
        showSidebar: false,
        mode: 'THIN',
    } satisfies TMainFrameAtom as TMainFrameAtom))

    return (
        <MainFrame atom={atom.current}  >
            <TradeListBody />
            <TradeListFooter atom={atom.current} />
        </MainFrame>
    )
}