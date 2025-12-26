import React from "@rbxts/react"
import { TItemGroup } from "../inv/inventory_utils"
import { LBox, LEmpty, LHover, LImage, LText } from "./Wrappers"
import { getPetConf } from "shared/help/pet_catalog"
import { NTooltip } from "../nitifications/NTooltip"
import { col } from "shared/help/assist"
import { getItemConf } from "shared/help/DATA"
import { KRingSelect } from "./KRingSelect"

export function ItemGroupRender({
    size, pos, items, LayoutOrder, showSelect, counts, setCount,
    minSize, prefersCols,
}: {
    size?: UDim2, pos?: UDim2, items: TItemGroup[], LayoutOrder?: number, showSelect?: boolean,
    minSize: Vector2, prefersCols: number,
    counts?: Record<string, number>, setCount?: (id: string, ratio: number) => void,
}) {
    return (
        <LBox Size={size} Pos={pos} AutoSize="Y" Wraps HAlign="Center" Trans SortOrder="LayoutOrder"
            LayoutOrder={LayoutOrder}>
            {items.map((item, i) => {
                const size = new UDim2(1 / prefersCols, -1, 0, 500)
                return (
                    <GroupItemCell Size={size} Aspect={1} item={item} showSelect={showSelect}
                        counts={counts} setCount={setCount}
                        MinSize={minSize} LayoutOrder={i}
                    />
                )
            })}
        </LBox>
    )
}

function GroupItemCell({ item, showSelect, counts, setCount, Size, Aspect, LayoutOrder, MinSize }: {
    item: TItemGroup, showSelect?: boolean, Size?: UDim2, Aspect?: number,
    MinSize?: Vector2, LayoutOrder?: number,
    counts?: Record<string, number>, setCount?: (id: string, ratio: number) => void,
}) {
    const countComp = <LText Pos={new UDim2(1, 0, 0, 0)} Size={new UDim2(1, 0, 0.2, 0)}
        AnchorPoint={new Vector2(1, 0)} Text={`x${item.count}`} Align="Right"
        StrokeThickness={2} Color={col('white')} />

    let body = <LEmpty />
    if (item.kind === "pet") {
        const petConf = getPetConf(tonumber(item.id)!)!
        const damage = tostring(petConf.damage)
        body = (
            <NTooltip data={{ kind: 'PET', petId: petConf.id }} >
                <LBox Size={new UDim2(1, 0, 1, 0)} NoList Trans  >
                    <LImage Size={new UDim2(1, 0, 1, 0)} Image={petConf.icon} />
                    <LText Pos={new UDim2(1, 0, 1, 0)} Size={new UDim2(1, 0, 0.3, 0)}
                        AnchorPoint={new Vector2(1, 1)} Text={damage} Align="Right"
                        StrokeThickness={2} Color={col('white')} />
                    {countComp}
                </LBox>
            </NTooltip>
        )
    } else {
        const itemConf = getItemConf(tonumber(item.id)!)!
        body = (
            <NTooltip data={{ kind: 'BOOST', boostId: itemConf.no }} >
                <LBox Size={new UDim2(1, 0, 1, 0)} NoList Trans  >
                    <LImage Size={new UDim2(1, 0, 1, 0)} Image={itemConf.icon} />
                    {countComp}
                </LBox>
            </NTooltip>
        )
    }
    if (showSelect) {
        const val = counts?.[item.id] ?? 0
        const setVal = (r: number) => {
            setCount?.(item.id, r)
        }
        return (
            <KRingSelect val={val} setVal={setVal} size={Size} Aspect={1} max={item.count} MinSize={MinSize} >
                {body}
            </KRingSelect>
        )
    } else {
        return (
            <LHover Size={Size} Aspect={1} LayoutOrder={LayoutOrder} MinSize={MinSize} >
                {body}
            </LHover >
        )
    }
}
