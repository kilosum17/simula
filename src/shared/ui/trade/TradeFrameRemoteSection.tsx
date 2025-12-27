import React from "@rbxts/react"
import { col, getPlayer } from "shared/help/assist"
import { usePlayerAtts } from "shared/signals/player_attributes"
import { Players } from "@rbxts/services"
import { getFilteredItems } from "../inv/inventory_utils"
import { Remotes, sendEventToClient } from "shared/signals/remotes"
import { KButton } from "../comps/KButton"
import { LBox, LImage, LPusher, LText } from "../comps/Wrappers"
import { icon } from "shared/help/icons"
import { TradeFrameItemsList } from "./TradeFrameItemsList"
import { formatNumber } from "shared/help/helpers"

export function TradeFrameRemoteSection({ size }: {
    size: UDim2,
}) {
    const localPlayer = getPlayer()
    const localData = usePlayerAtts(['trade'], localPlayer).trade
    const remotePlayer = Players.GetPlayerByUserId(localData.tradePatner)
    const remoteData = usePlayerAtts(['trade'], remotePlayer).trade

    const items = getFilteredItems({
        kind: 'all',
        itemIds: remoteData.itemIds,
        searchText: '',
    })

    const onCancel = () => {
        if (localData.isReady) {
            Remotes.Client.Get('UpdateTrade').SendToServer({ isReady: false }, localPlayer)
        } else {
            sendEventToClient(localPlayer, 'CANCEL_TRADE', localPlayer.UserId)
            sendEventToClient(remotePlayer!, 'CANCEL_TRADE', localPlayer.UserId)
        }
    }

    const onReady = () => {
        if (!localData.isReady) {
            Remotes.Client.Get('UpdateTrade').SendToServer({ isReady: true }, localPlayer)
        }
    }

    const gemsInfo = formatNumber(remoteData.gems)
    const cancelText = localData.isReady ? 'Back' : 'Cancel'
    const readyText = (localData.isReady && remoteData.isReady) ? 'Confirm!' :
        localData.isReady ? 'Wait' : "Ready"
    const readyColor = readyText === 'Wait' ? 'gray' : 'green'

    return (
        <LBox Size={size} Vert HAlign="Center" VAlign="Bottom" Trans
        >
            <TradeFrameItemsList size={new UDim2(1, -10, 0.65, 0)} items={items}
                PadBottom={50} showSelect={false} isReady={remoteData.isReady} />
            <LPusher gapS={0.01} />
            <LBox Size={new UDim2(1, 0, 0.12, 0)} Center Trans >
                <LImage Image={icon('diamond')} Size={new UDim2(1, 0, 0.9, 0)} Aspect />
                <LText Text={gemsInfo} AutoSize="X" Size={new UDim2(0, 0, 1, 0)} Color={col('blue_mid')}
                    StrokeThickness={2} Align="Left" />
            </LBox>
            <LBox Size={new UDim2(1, 0, 0.15, 0)} Trans Center>
                <KButton Size={new UDim2(0.42, 0, 1, 0)} color="red" onClick={onCancel} >
                    <LText Text={cancelText}
                        Size={new UDim2(0.85, 0, 0.9, 0)} Color={col('white')} StrokeThickness={2} />
                </KButton>
                <LPusher gapS={0.16} />
                <KButton Size={new UDim2(0.42, 0, 1, 0)} color={readyColor} onClick={onReady} >
                    <LText Text={readyText}
                        Size={new UDim2(0.85, 0, 0.9, 0)} Color={col('white')} StrokeThickness={2} />
                </KButton>
            </LBox>
        </LBox>
    )
}
