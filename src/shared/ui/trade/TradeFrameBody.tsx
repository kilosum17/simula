import { LBox, LImage, LPusher, LText, LTextbox } from "../comps/Wrappers";
import React, { useState } from "@rbxts/react";
import { getItemConf, IItemConfig } from "shared/help/DATA";
import { icon } from "shared/help/icons";
import { col, getPlayer } from "shared/help/assist";
import { KButton } from "../comps/KButton";
import { Remotes } from "shared/signals/remotes";
import { useAtom } from "shared/signals/atom";
import { tradeAtom } from "./trade_utils";
import { usePlayerAtts } from "shared/signals/player_attributes";
import { Players } from "@rbxts/services";
import { getItemsInGroups, TItemGroup } from "../inv/inventory_utils";
import { ItemGroupRender } from "../comps/ItemGroupRender";
import { useFrameState } from "shared/signals/use_frame_state";

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
    const state = useAtom(tradeAtom)
    const { petIds, boostIds } = usePlayerAtts(['petIds', 'boostIds'])
    const items = getItemsInGroups(state.sidebarItem || 'Pets', petIds, boostIds)

    return (
        <LBox Size={size} Vert HAlign="Center" VAlign="Bottom" Trans
        >
            <TradeItemsList size={new UDim2(1, -10, 0.73, 0)} items={items} isLocal={true}
                PadBottom={70} >
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
    const state = useAtom(tradeAtom)
    const localPlayer = getPlayer()
    const localData = usePlayerAtts(['trade'], localPlayer).trade
    const remotePlayer = Players.GetPlayerByUserId(localData.tradePatner)
    const remoteData = usePlayerAtts(['trade'], remotePlayer).trade
    const { closeFrame } = useFrameState()

    const { petIds, boostIds } = usePlayerAtts(['petIds', 'boostIds'], remotePlayer)
    const items = getItemsInGroups('all', petIds, boostIds)

    const onCancel = () => {
        closeFrame('TRADE')
        if (localData.isReady) {
            Remotes.Client.Get('UpdateTrade').SendToServer({ isReady: false }, localPlayer)
        } else {
            // Remotes.Client.Get('RequestCancelTrade').SendToServer()
        }
    }

    const onReady = () => {
        if (!localData.isReady) {
            Remotes.Client.Get('UpdateTrade').SendToServer({ isReady: true }, localPlayer)
        }
    }

    const cancelText = localData.isReady ? 'Back' : 'Cancel'
    const readyText = (localData.isReady && remoteData.isReady) ? 'Confirm!' :
        localData.isReady ? 'Wait' : "Ready"

    return (
        <LBox Size={size} Vert HAlign="Center" VAlign="Bottom" Trans
        >
            <TradeItemsList size={new UDim2(1, -10, 0.65, 0)} items={items} PadBottom={50}
                isLocal={false} />
            <LPusher gapS={0.01} />
            <LBox Size={new UDim2(1, 0, 0.12, 0)} Center Trans >
                <LImage Image={icon('diamond')} Size={new UDim2(1, 0, 0.9, 0)} Aspect />
                <LText Text="0" AutoSize="X" Size={new UDim2(0, 0, 1, 0)} Color={col('blue_mid')}
                    StrokeThickness={2} Align="Left" />
            </LBox>
            <LBox Size={new UDim2(1, 0, 0.15, 0)} Trans Center>
                <KButton Size={new UDim2(0.42, 0, 1, 0)} color="red" onClick={onCancel} >
                    <LText Text={cancelText}
                        Size={new UDim2(0.85, 0, 0.9, 0)} Color={col('white')} StrokeThickness={2} />
                </KButton>
                <LPusher gapS={0.16} />
                <KButton Size={new UDim2(0.42, 0, 1, 0)} color="green" onClick={onReady} >
                    <LText Text={readyText}
                        Size={new UDim2(0.85, 0, 0.9, 0)} Color={col('white')} StrokeThickness={2} />
                </KButton>
            </LBox>
        </LBox>
    )
}

function TradeItemsList({ items, size, children, isLocal, PadBottom = 100 }: {
    size: UDim2, PadBottom?: number,
    items: TItemGroup[], isLocal?: boolean,
    children?: React.ReactNode,
}) {
    const [counts, setCounts] = useState({} as Record<string, number>)

    const setCount = (id: string, ratio: number) => {
        warn('update count', id, ratio)
        setCounts({ ...counts, [id]: ratio })
    }

    return (
        <LBox Size={size} Trans StrokeThickness={3} CornerRadius2={new UDim(0.04, 0)} NoList  >
            <LBox isScroll Pos={new UDim2(0.5, 0, 0.5, 0)} Size={new UDim2(1, 15, 1, 0)}
                AnchorPoint={new Vector2(0.5, 0.5)} Trans AutoCanvasSize="Y"
                SpaceY={new UDim(0, 5)} SpaceR={new UDim(0, 7)}
                TrackWidth={15} SortOrder="LayoutOrder" Wraps HAlign="Center"
            >
                <ItemGroupRender LayoutOrder={0} size={new UDim2(1, 0, 0, 0)} items={items}
                    showSelect={isLocal} setCount={setCount} counts={counts}
                    prefersCols={5} minSize={new Vector2(60, 60)} />
                <LBox Size={new UDim2(0.95, 0, 0, PadBottom)} Trans LayoutOrder={10_000} />
            </LBox>
            {children as React.JSX.Element}
        </LBox>
    )
}
