import React, { useEffect, useRef, useState } from "@rbxts/react"
import { col, getPlayer } from "shared/help/assist"
import { usePlayerAtts } from "shared/signals/player_attributes"
import { Players, RunService } from "@rbxts/services"
import { getFilteredItems } from "../inv/inventory_utils"
import { Remotes, sendEventToClient } from "shared/signals/remotes"
import { KButton } from "../comps/KButton"
import { LBox, LImage, LPusher, LText } from "../comps/Wrappers"
import { icon } from "shared/help/icons"
import { TradeFrameItemsList } from "./TradeFrameItemsList"
import { formatNumber } from "shared/help/helpers"
import { setHeartbeatInterval } from "shared/help/math"

const TRADE_CONFIRM_TIME = 5

export function TradeFrameRemoteSection({ size }: {
    size: UDim2,
}) {
    const localPlayer = getPlayer()
    const localData = usePlayerAtts(['trade'], localPlayer).trade
    const remotePlayer = Players.GetPlayerByUserId(localData.tradePatner)
    const remoteData = usePlayerAtts(['trade'], remotePlayer).trade
    const confirmedRef = useRef(false)
    const updates = useState(0)[1]
    print('Render remote section')

    useEffect(() => {
        if (!remoteData.isConfirmed) return
        const con = setHeartbeatInterval(0.5, () => {
            updates(n => n + 1)
        })
        return () => con.Disconnect()
    }, [remoteData.isConfirmed])

    const getCountDown = () => {
        if (!localData.isConfirmed) return { open: false, time: '0' }
        const passedTime = os.time() - localData.confirmedAt
        const left = math.max(0, TRADE_CONFIRM_TIME - passedTime)
        const time = tostring(math.round(left))
        if (left === 0) {
            if (!confirmedRef.current) {
                print('sent confirm')
                confirmedRef.current = true
                Remotes.Client.Get('ConfirmTrade').SendToServer()
                task.spawn(() => {
                    task.wait(1)
                    confirmedRef.current = false
                })
            }
        }
        return { open: true, time }
    }

    const countDown = getCountDown()

    const items = getFilteredItems({
        kind: 'all',
        itemIds: remoteData.itemIds,
        searchText: '',
    })

    const onCancel = () => {
        if (localData.isConfirmed) {
            Remotes.Client.Get('UpdateTrade').SendToServer({ isConfirmed: false }, localPlayer)
            Remotes.Client.Get('UpdateTrade').SendToServer({ isConfirmed: false }, remotePlayer!)
        } else if (localData.isReady) {
            Remotes.Client.Get('UpdateTrade').SendToServer({ isReady: false }, localPlayer)
        } else {
            sendEventToClient(localPlayer, 'CANCEL_TRADE', localPlayer.UserId)
            sendEventToClient(remotePlayer!, 'CANCEL_TRADE', localPlayer.UserId)
        }
    }

    const onReady = () => {
        if (!localData.isReady) {
            Remotes.Client.Get('UpdateTrade').SendToServer({ isReady: true }, localPlayer)
            return
        }
        if (localData.isReady && remoteData.isReady) {
            if (!localData.isConfirmed) {
                const confirmedAt = os.time()
                Remotes.Client.Get('UpdateTrade').SendToServer({ isConfirmed: true, confirmedAt }, localPlayer)
                Remotes.Client.Get('UpdateTrade').SendToServer({ isConfirmed: true, confirmedAt }, remotePlayer!)
            }
        }
    }

    const gemsInfo = formatNumber(remoteData.gems)
    const cancelText = localData.isReady ? 'Back' : 'Cancel'
    const readyText = (() => {
        if (countDown.open) return `${countDown.time}!`
        if (localData.isReady && remoteData.isReady) return 'Confirm!'
        else return localData.isReady ? 'Wait' : "Ready"
    })()
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
