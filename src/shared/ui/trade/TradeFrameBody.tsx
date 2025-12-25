import { LBox, LHover, LImage, LPusher, LText, LTextbox } from "../comps/Wrappers";
import React, { useState } from "@rbxts/react";
import { getItemConf, IItemConfig } from "shared/help/DATA";
import { NTooltip } from "../nitifications/NTooltip";
import { icon } from "shared/help/icons";
import { col } from "shared/help/assist";
import { KButton } from "../comps/KButton";
import KSelect from "../comps/KSelect";
import { KRingSelect } from "../comps/KRingSelect";
import { randInt } from "shared/help/math";

export function TradeFrameBody() {

    return (
        <LBox Size={new UDim2(0.95, 0, 0.95, 0)} Pos={new UDim2(0.5, 0, 0.5, 0)}
            AnchorPoint={new Vector2(0.5, 0.5)} Trans >
            <TradeLocalSection size={new UDim2(0.45, 0, 1, 0)} />
            <LBox Size={new UDim2(0.1, 0, 1, 0)} Trans NoList >
                <LImage Image={icon('tade_arrors')} Size={new UDim2(0.9, 0, 1, 0)} Aspect
                    Pos={new UDim2(0.5, 0, 0.2, 0)} AnchorPoint={new Vector2(0.5, 0)} />
            </LBox>
            <TradeRemoteSection size={new UDim2(0.45, 0, 1, 0)} />
        </LBox>
    )
}

function TradeLocalSection({ size }: {
    size: UDim2,
}) {
    const items = getItems(30)

    return (
        <LBox Size={size} Vert HAlign="Center" VAlign="Bottom" Trans
        >
            <TradeItemsList size={new UDim2(1, -10, 0.73, 0)} items={items} PadBottom={70} >
                <LBox Size={new UDim2(0.65, 0, 0.1, 0)} AnchorPoint={new Vector2(1, 0.5)}
                    Pos={new UDim2(0.95, 0, 1, -2)} Center StrokeThickness={3}
                    CornerRadius2={new UDim(0.5, 0)} Background={col("white")} >
                    <LTextbox Text='' Placeholder="Search" Align="Right"
                        Size={new UDim2(0.85, 0, 0.9, 0)} />
                </LBox>
            </TradeItemsList>
            <LPusher gapS={0.08} />
            <LBox Size={new UDim2(1, 0, 0.12, 0)} Center Padding={new UDim(0.05, 0)}
                Background={col('lightgray')} TransVal={0.2} CornerRadius2={new UDim(0.2, 0)}
                StrokeThickness={3} >
                <LImage Image={icon('diamond')} Size={new UDim2(2, 0, 0.9, 0)} Aspect />
                <LTextbox Text='0' Placeholder="0" Align="Left" StrokeThickness={2}
                    Size={new UDim2(0, 0, 0.9, 0)} AutoSize="X" Color={col('blue_mid')} />
            </LBox>
        </LBox>
    )
}



function TradeRemoteSection({ size }: {
    size: UDim2,
}) {
    const items = getItems(4)

    return (
        <LBox Size={size} Vert HAlign="Center" VAlign="Bottom" Trans
        >
            <TradeItemsList size={new UDim2(1, -10, 0.65, 0)} items={items} PadBottom={50} />
            <LPusher gapS={0.01} />
            <LBox Size={new UDim2(1, 0, 0.12, 0)} Center Trans >
                <LImage Image={icon('diamond')} Size={new UDim2(1, 0, 0.9, 0)} Aspect />
                <LText Text="0" AutoSize="X" Size={new UDim2(0, 0, 1, 0)} Color={col('blue_mid')}
                    StrokeThickness={2} Align="Left" />
            </LBox>
            <LBox Size={new UDim2(1, 0, 0.15, 0)} Trans Center>
                <KButton Size={new UDim2(0.42, 0, 1, 0)} color="red" >
                    <LText Text="Cancel" Size={new UDim2(0.85, 0, 0.9, 0)} Color={col('white')} StrokeThickness={2} />
                </KButton>
                <LPusher gapS={0.16} />
                <KButton Size={new UDim2(0.42, 0, 1, 0)} color="green" >
                    <LText Text="Ready!" Size={new UDim2(0.85, 0, 0.9, 0)} Color={col('white')} StrokeThickness={2} />
                </KButton>
            </LBox>
        </LBox>
    )
}

function TradeItemsList({ items, size, children, PadBottom = 100 }: {
    items: IItemConfig[], size: UDim2, PadBottom?: number,
    children?: React.ReactNode,
}) {
    const [val, setVal] = useState(0.2)
    // const max = math.random(2000, 5000)

    return (
        <LBox Size={size} Trans StrokeThickness={3} CornerRadius2={new UDim(0.04, 0)} NoList  >
            <LBox isScroll Pos={new UDim2(0.5, 0, 0.5, 0)} Size={new UDim2(1, 15, 1, 0)}
                AnchorPoint={new Vector2(0.5, 0.5)} Trans AutoCanvasSize="Y"
                SpaceY={new UDim(0, 5)} SpaceR={new UDim(0, 7)}
                TrackWidth={15} SortOrder="LayoutOrder" Wraps HAlign="Center"
            >
                {items.map((conf, i) => {
                    return (
                        <LHover key={conf.name + i} Size={new UDim2(1 / 4, -3, 0, 500)} Aspect={1}
                            Scale={1.08} LayoutOrder={i} >
                            <KRingSelect val={val} setVal={setVal} size={new UDim2(1, 0, 1, 0)}
                                max={randInt(1000, 5000)} >
                                {/* <NTooltip data={{ kind: 'PET', petId: 1 }} > */}
                                <LBox Size={new UDim2(1, 0, 1, 0)} NoList Trans  >
                                    <LImage Size={new UDim2(1, 0, 1, 0)} Image={icon('pet')} />
                                    <LText Pos={new UDim2(1, 0, 1, 0)} Size={new UDim2(1, 0, 0.3, 0)}
                                        AnchorPoint={new Vector2(1, 1)} Text="6.78t" Align="Right"
                                        StrokeThickness={2} Color={col('white')} />
                                </LBox>
                                {/* </NTooltip> */}
                            </KRingSelect>
                        </LHover>
                    )
                })}
                <LBox Size={new UDim2(0.95, 0, 0, PadBottom)} Trans LayoutOrder={items.size()} />
            </LBox>
            {children as React.JSX.Element}
        </LBox>
    )
}

const getItems = (no: number) => {
    const items = [] as IItemConfig[]
    for (let i = 1; i <= no; i++) {
        items.push(getItemConf(i)!)
    }
    return items
}