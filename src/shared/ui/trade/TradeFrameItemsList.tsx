import React, { useState } from "@rbxts/react"
import { TItemGroup } from "../inv/inventory_utils"
import { LBox, LText } from "../comps/Wrappers"
import { ItemGroupRender } from "../comps/ItemGroupRender"
import { usePlayerAtts } from "shared/signals/player_attributes"
import { Remotes } from "shared/signals/remotes"
import { col, getPlayer } from "shared/help/assist"


export function TradeFrameItemsList({
    items, size, children, showSelect, PadBottom = 100, isReady,
}: {
    size: UDim2, PadBottom?: number,
    items: TItemGroup[], showSelect?: boolean,
    children?: React.ReactNode, isReady?: boolean,
}) {
    const { petIds, boostIds, trade: localData } = usePlayerAtts(['trade', 'petIds', 'boostIds'])
    const [counts, setCounts] = useState({} as Record<string, number>)

    const setCount = (id: string, ratio: number) => {
        setCounts({ ...counts, [id]: ratio })
        const allItems = { ...petIds, ...boostIds }
        const total = allItems[id] || 0
        const no = math.round(total * ratio)
        if (no > 0) {
            localData.itemIds[id] = no
        } else {
            delete localData.itemIds[id]
        }
        Remotes.Client.Get('UpdateTrade').SendToServer({
            itemIds: localData.itemIds,
        }, getPlayer())
    }

    return (
        <LBox Size={size} Trans StrokeThickness={3} CornerRadius2={new UDim(0.04, 0)} NoList  >
            <LBox isScroll Pos={new UDim2(0.5, 0, 0.5, 0)} Size={new UDim2(1, 15, 1, 0)}
                AnchorPoint={new Vector2(0.5, 0.5)} Trans AutoCanvasSize="Y"
                SpaceY={new UDim(0, 5)} SpaceR={new UDim(0, 7)}
                TrackWidth={15} SortOrder="LayoutOrder" Wraps HAlign="Center"
            >
                <ItemGroupRender LayoutOrder={0} size={new UDim2(1, 0, 0, 0)} items={items}
                    showSelect={showSelect} setCount={setCount} counts={counts}
                    prefersCols={5} minSize={new Vector2(60, 60)} />
                <LBox Size={new UDim2(0.95, 0, 0, PadBottom)} Trans LayoutOrder={10_000} />
            </LBox>
            <LBox Size={new UDim2(1, 0, 1, 0)} CornerRadius2={new UDim(0.04, 0)} NoList
                Background={col('green_light')} TransVal={0.5} Visible={isReady}
            >
                <LText Text="Ready!" Pos={new UDim2(0.5, 0, 0.9, 0)} AnchorPoint={new Vector2(0.5, 1)}
                    Size={new UDim2(1, 0, 0.14, 0)} Color={col('green_dark')} StrokeThickness={2} />
            </LBox>
            {children as React.JSX.Element}
        </LBox>
    )
}
