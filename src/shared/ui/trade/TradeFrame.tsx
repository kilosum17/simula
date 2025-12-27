
import React, { useEffect } from "@rbxts/react";
import { MainFrame } from "../comps/MainFrame";
import { TradeFrameBody } from "./TradeFrameBody";
import { getPlayer } from "shared/help/assist";
import { TradeFrameHeader } from "./TradeFrameHeader";
import { clientEventSig, startTradeSig } from "shared/signals/server_signals";
import { useFrameState } from "shared/signals/use_frame_state";
import { Players } from "@rbxts/services";
import { canNotAtom } from "shared/signals/atoms";
import { Remotes } from "shared/signals/remotes";
import { getPlayerDefTrade, TPlayerTradeData } from "shared/player/player_utils";
import { getCancelTradeMessage, tradeFrameAtom } from "./trade_utils";

export function TradeFrame() {
    const { openFrame, closeFrame } = useFrameState()

    useEffect(() => {
        task.spawn(() => {
            task.wait(2)
            Remotes.Client.Get('AddTradeRequest').SendToServer(getPlayer().UserId)
            Remotes.Client.Get('AcceptTradeRequest').SendToServer(getPlayer().UserId)
        })

    }, [])

    useEffect(() => {
        const con1 = startTradeSig.Connect((remotePlayerId) => {
            openFrame("TRADE", true)
            print('Start trade', remotePlayerId)
            const resetData = getPlayerDefTrade() as Partial<TPlayerTradeData>
            delete resetData.isReady
            delete resetData.tradePatner
            delete resetData.sentTradeRegs
            Remotes.Client.Get('UpdateTrade').SendToServer(resetData, getPlayer())
            Remotes.Client.Get('UpdateTrade').SendToServer(resetData,
                Players.GetPlayerByUserId(remotePlayerId)!)
        })
        const con2 = clientEventSig.Connect((event, args) => {
            if (event === 'CANCEL_TRADE') {
                const cancelUserId = args as number
                const message = getCancelTradeMessage(cancelUserId)
                closeFrame("TRADE")
                canNotAtom.update({ kind: 'CUSTOM', open: true, message })
                print('Cancel trade', cancelUserId)
            }
        })

        return () => {
            con1.Disconnect()
            con2.Disconnect()
        }
    }, [openFrame, closeFrame])

    return (
        <MainFrame atom={tradeFrameAtom}  >
            <TradeFrameBody />
            <TradeFrameHeader />
        </MainFrame>
    )
}