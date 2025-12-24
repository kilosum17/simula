import { LBox, LHover, LImage, LPusher, LText } from "../comps/Wrappers";
import React from "@rbxts/react";
import { getItemConf, IItemConfig } from "shared/help/DATA";
import { NTooltip } from "../nitifications/NTooltip";
import { icon } from "shared/help/icons";
import { col } from "shared/help/assist";
import { KButton } from "../comps/KButton";

export function TradeFrameBody() {

    return (
        <LBox Size={new UDim2(0.95, 0, 0.95, 0)} Pos={new UDim2(0.5, 0, 0.5, 0)}
            AnchorPoint={new Vector2(0.5, 0.5)} Trans >
            <TradeLocalSection size={new UDim2(0.45, 0, 1, 0)} />
            <LBox Size={new UDim2(0.1, 0, 1, 0)} Trans>

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
            <TradeItemsList size={new UDim2(1, -10, 0.8, 0)} items={items} />
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
            <TradeItemsList size={new UDim2(1, -10, 0.65, 0)} items={items} />
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

function TradeItemsList({ items, size }: {
    items: IItemConfig[], size: UDim2,
}) {
    return (
        <LBox Size={size} Trans StrokeThickness={3} CornerRadius2={new UDim(0.04, 0)}  >
            <LBox isScroll Pos={new UDim2(0.5, 0, 0.5, 0)} Size={new UDim2(1, 10, 1, 0)}
                AnchorPoint={new Vector2(0.5, 0.5)} Trans AutoCanvasSize="Y"
                SpaceY={new UDim(0, 5)} SpaceR={new UDim(0, 7)}
                TrackWidth={15} SortOrder="LayoutOrder" Wraps HAlign="Center"
            >
                {items.map((conf, i) => {
                    return (
                        <LHover key={conf.name + i} Size={new UDim2(1 / 4, -3, 0, 500)} Aspect={1}
                            Scale={1.08} LayoutOrder={i} >
                            <NTooltip data={{ kind: 'PET', petId: 1 }} >
                                <LBox Size={new UDim2(1, 0, 1, 0)} NoList Trans  >
                                    <LImage Size={new UDim2(1, 0, 1, 0)} Image={icon('pet')} />
                                    <LText Pos={new UDim2(1, 0, 1, 0)} Size={new UDim2(1, 0, 0.3, 0)}
                                        AnchorPoint={new Vector2(1, 1)} Text="6.78t" Align="Right"
                                        StrokeThickness={2} Color={col('white')} />
                                </LBox>
                            </NTooltip>
                        </LHover>
                    )
                })}
            </LBox>
        </LBox>
    )
}


const getItems = (no: number) => {
    const items = [] as IItemConfig[]
    for (let i = 0; i < no; i++) {
        items.push(getItemConf(i)!)
    }
    return items
}