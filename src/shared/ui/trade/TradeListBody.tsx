import { LBox, LImage, LPusher, LText } from "../comps/Wrappers";
import { usePlayers } from "shared/signals/hooks";
import React from "@rbxts/react";
import { Players, RunService } from "@rbxts/services";
import { col, getPlayer } from "shared/help/assist";
import { KButton } from "../comps/KButton";
import { usePlayerAtts } from "shared/signals/player_attributes";
import { TPlayerDataSettings } from "shared/player/player_utils";
import { Remotes } from "shared/signals/remotes";
import { canNotAtom } from "shared/signals/atoms";

export function TradeListBody() {
    const players = usePlayers().filter(p => {
        if (RunService.IsStudio()) return true
        return p.UserId !== getPlayer().UserId
    })

    return (
        <LBox isScroll Vert Pos={new UDim2(0.5, 0, 0.5, 0)} Size={new UDim2(1, 20, 0.95, 0)}
            AnchorPoint={new Vector2(0.5, 0.5)} Trans Spacing={new UDim(0, 20)} AutoCanvasSize="Y"
            TrackWidth={15} SortOrder="LayoutOrder" >
            {players.map((player, i) => {
                return <TradeListRow key={player.UserId} remotePlayer={player} idx={i} />
            })}
            <LPusher key='push2' gapF={250} LayoutOrder={players.size()} NoAspect />
        </LBox>
    )
}

export const TradeListRow = ({ remotePlayer, idx }: {
    remotePlayer: Player, idx: number,
}) => {
    const localPlayer = getPlayer()
    const remoteData = usePlayerAtts(['settings', 'trade', 'rank'], remotePlayer)
    const localData = usePlayerAtts(['settings', 'trade', 'rank'],)

    const [avatar, _ready] = Players.GetUserThumbnailAsync(remotePlayer.UserId,
        Enum.ThumbnailType.HeadShot,
        Enum.ThumbnailSize.Size150x150
    )

    const isFriendsOnly = remoteData.settings.tradingType !== 'all'
    const isPending = localData.trade.sentTradeRegs.includes(remotePlayer.UserId)
    const isReceived = remoteData.trade.sentTradeRegs.includes(localPlayer.UserId)
    const text = isFriendsOnly ? 'Friends Only' : isReceived ? "Accept!" : isPending ? 'Pending' : 'Trade!'
    const color = isFriendsOnly ? 'gray' : isReceived ? 'green' : isPending ? 'dark_green' : 'green'

    const onClick = () => {
        warn(remotePlayer.Name, 'pending', isPending, 'recv', isReceived, 'frends only', isFriendsOnly)
        if (isFriendsOnly) return
        if (isReceived) {
            warn("starting trade with", remotePlayer.Name)
            if (remoteData.trade.isTrading) {
                canNotAtom.update({ kind: "ALREADY_TRADING", open: true })
            } else {
                Remotes.Client.Get('AcceptTradeRequest').SendToServer(remotePlayer.UserId)
            }
        } else if (isPending) {
            warn("Waiting for accept from", remotePlayer.Name)
        } else {
            warn("sending req to", remotePlayer.Name)
            Remotes.Client.Get('AddTradeRequest').SendToServer(remotePlayer.UserId)
        }
    }

    const displayName = localPlayer === remotePlayer ? "Me" : remotePlayer.DisplayName
    return (
        <LBox Size={new UDim2(1, 0, 0, 1000)} Aspect={7} Trans Center SpaceX={new UDim(0.025, 0)} >
            <LBox Size={new UDim2(0.75, 0, 0.85, 0)} Trans LayoutOrder={idx}>
                <LBox Size={new UDim2(1, 0, 1, 0)} Aspect={1} Trans NoList >
                    <LImage Image={avatar} Size={new UDim2(1, 0, 1, 0)} />
                    <LBox Background={col('black')} Size={new UDim2(0.3, 0, 0.3, 0)} Center
                        Pos={new UDim2(0, 0, 1, 0)} AnchorPoint={new Vector2(0.5, 0.5)} CornerRadius2={new UDim(0.5, 0)} >
                        <LText Text={tostring(remoteData.rank)} Size={new UDim2(0.95, 0, 0.95, 0)}
                            Color={col('white')} fontWeight="Bold" />
                    </LBox>
                </LBox>
                <LPusher gapS={0.05} />
                <LBox Vert Size={new UDim2(0.8, 0, 1, 0)} Trans  >
                    <LText Size={new UDim2(1, 0, 0.6, 0)} Align="Left" Color={col('blue_mid')} StrokeThickness={2}
                        Text={displayName} />
                    <LText Size={new UDim2(1, 0, 0.4, 0)} Align="Left" Color={col('black')} fontWeight="Bold"
                        Text={remotePlayer.Name} />
                </LBox>
            </LBox>
            <LPusher gapS={0.05} />
            <KButton color={color} Size={new UDim2(0.25, 0, 0.75, 0)} onClick={onClick} >
                <LText Text={text} Size={new UDim2(0.85, 0, 0.9, 0)} Color={col('white')}
                    StrokeThickness={2} />
            </KButton>
        </LBox>
    )
}