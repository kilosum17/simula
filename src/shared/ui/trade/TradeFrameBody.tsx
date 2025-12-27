import { LBox, LImage, LPusher, LTextbox } from "../comps/Wrappers";
import React from "@rbxts/react";
import { icon } from "shared/help/icons";
import { col, getPlayer } from "shared/help/assist";
import { useAtom } from "shared/signals/atom";
import { tradeFrameAtom } from "./trade_utils";
import { usePlayerAtts } from "shared/signals/player_attributes";
import { getFilteredItems } from "../inv/inventory_utils";
import { TradeFrameItemsList } from "./TradeFrameItemsList";
import { TradeFrameRemoteSection } from "./TradeFrameRemoteSection";
import { Remotes } from "shared/signals/remotes";

export function TradeFrameBody() {

    return (
        <LBox Size={new UDim2(0.95, 0, 0.95, 0)} Pos={new UDim2(0.5, 0, 0.5, 0)}
            AnchorPoint={new Vector2(0.5, 0.5)} Trans >
            <TradeLocalSection size={new UDim2(0.45, 0, 1, 0)} />
            <LBox Size={new UDim2(0.1, 0, 1, 0)} Trans NoList >
                <LImage Image={icon('tade_arrors')} Size={new UDim2(0.9, 0, 1, 0)} Aspect
                    Pos={new UDim2(0.5, 0, 0.2, 0)} AnchorPoint={new Vector2(0.5, 0)} />
            </LBox>
            <TradeFrameRemoteSection size={new UDim2(0.45, 0, 1, 0)} />
        </LBox>
    )
}

function TradeLocalSection({ size }: {
    size: UDim2,
}) {
    const { searchText } = useAtom(tradeFrameAtom)
    const state = useAtom(tradeFrameAtom)
    const { petIds, boostIds, trade: localData } = usePlayerAtts(['petIds', 'boostIds', 'trade'])
    const { isReady } = localData
    const itemIds = isReady ? localData.itemIds : { ...boostIds, ...petIds }
    const items = getFilteredItems({
        kind: isReady ? 'all' : state.sidebarItem || 'Pets',
        itemIds,
        searchText,
    })

    const changeGems = (val: string) => {
        const gems = tonumber(val) || 0
        Remotes.Client.Get('UpdateTrade').SendToServer({ gems }, getPlayer())
    }

    return (
        <LBox Size={size} Vert HAlign="Center" VAlign="Bottom" Trans
        >
            <TradeFrameItemsList size={new UDim2(1, -10, 0.73, 0)} items={items}
                showSelect={!isReady} PadBottom={70} isReady={isReady} >
                <LBox Size={new UDim2(0.65, 0, 0.1, 0)} AnchorPoint={new Vector2(1, 0.5)}
                    Pos={new UDim2(0.95, 0, 1, -2)} Center StrokeThickness={3}
                    CornerRadius2={new UDim(0.5, 0)} Background={col("white")} >
                    <LTextbox Text='' Placeholder="Search" Align="Right"
                        Size={new UDim2(0.85, 0, 0.9, 0)}
                        onChange={val => tradeFrameAtom.update({ searchText: val })} />
                </LBox>
            </TradeFrameItemsList>
            <LPusher gapS={0.08} />
            <LBox Size={new UDim2(1, 0, 0.12, 0)} Center Padding={new UDim(0.05, 0)}
                Background={col('lightgray')} TransVal={0.2} CornerRadius2={new UDim(0.2, 0)}
                StrokeThickness={3} >
                <LImage Image={icon('diamond')} Size={new UDim2(2, 0, 0.9, 0)} Aspect />
                <LTextbox Text='0' Placeholder="0" Align="Left" StrokeThickness={2}
                    Size={new UDim2(0, 0, 0.9, 0)} AutoSize="X" Color={col('blue_mid')}
                    onChange={changeGems} />
            </LBox>
        </LBox>
    )
}


