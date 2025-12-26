import React from "@rbxts/react";
import { col } from "shared/help/assist";
import { ITEMS_CONFING } from "shared/help/DATA";
import { LBox, LHover, LImage, LLine, LPusher, LText } from "shared/ui/comps/Wrappers";
import { NTooltip } from "shared/ui/nitifications/NTooltip";
import { petsAtom } from "shared/signals/client_signals";
import { Atom, useAtom } from "shared/signals/atom";
import { icon } from "shared/help/icons";
import { TMainFrameAtom } from "../comps/MainFrame";
import { usePlayerAtts } from "shared/signals/player_attributes";
import { getItemsInGroups } from "./inventory_utils";
import { ItemGroupRender } from "../comps/ItemGroupRender";

export function InvFrameBody({ atom }: {
    atom: Atom<TMainFrameAtom>,
}) {
    const state = useAtom(atom)
    const { petIds, boostIds } = usePlayerAtts(['petIds', 'boostIds'])

    const items = getItemsInGroups(state.sidebarItem || 'Pets', petIds, boostIds)

    return (
        <LBox isScroll Vert Pos={new UDim2(0.5, 0, 0.5, 0)} Size={new UDim2(1, 20, 0.95, 0)}
            AnchorPoint={new Vector2(0.5, 0.5)} Trans Spacing={new UDim(0, 20)} AutoCanvasSize="Y"
            TrackWidth={15} >
            <LPusher gapF={10} LayoutOrder={-3} />
            <LLine Text={`<font color="#36393C">Your Best Pets </font><font color="#00BFFF">24/24</font>`}
                TextY={30} LayoutOrder={-2} />
            <LPusher gapF={30} LayoutOrder={-1} />
            <ItemGroupRender LayoutOrder={0} size={new UDim2(1, 0, 0, 0)} items={items}
                prefersCols={6} minSize={new Vector2(80, 80)} />
            <LPusher gapF={40} LayoutOrder={1000} />
        </LBox>
    )
}

