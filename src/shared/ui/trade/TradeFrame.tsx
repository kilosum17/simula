
import React, { useEffect } from "@rbxts/react";
import { MainFrame, TMainFrameAtom } from "../comps/MainFrame";
import { Atom } from "shared/signals/atom";
import { TradeFrameBody } from "./TradeFrameBody";
import { getPlayer } from "shared/help/assist";
import { TradeFrameHeader } from "./TradeFrameHeader";
import { cancelTradeSig, startTradeSig } from "shared/signals/server_signals";
import { useFrameState } from "shared/signals/use_frame_state";
import { Players } from "@rbxts/services";
import { canNotAtom } from "shared/signals/atoms";
import { getDefTradeData, tradeAtom } from "./trade_utils";

export function TradeFrame() {
    const { openFrame, closeFrame } = useFrameState()

    useEffect(() => {
        const con1 = startTradeSig.Connect((remotePlayerId) => {
            openFrame("TRADE")
            tradeAtom.update({ ...getDefTradeData(), remotePlayerId })
            print('Start trade', remotePlayerId)
        })
        const con2 = cancelTradeSig.Connect((cancelUserId) => {
            const cancelPlayer = Players.GetPlayerByUserId(cancelUserId)
            closeFrame("TRADE")
            const message = cancelPlayer?.UserId === getPlayer().UserId ? "You Canceled Trade!" :
                `${cancelPlayer?.DisplayName} Canceled Trade!`
            canNotAtom.update({ kind: 'CUSTOM', open: true, message })
            print('Cancel trade', cancelUserId)
        })
        return () => {
            con1.Disconnect()
            con2.Disconnect()
        }
    }, [])

    return (
        <MainFrame atom={tradeAtom as unknown as Atom<TMainFrameAtom>}  >
            <TradeFrameBody />
            <TradeFrameHeader />
        </MainFrame>
    )
}