import { LBox, LImage, LPusher, LText } from "../comps/Wrappers";
import { usePlayers } from "shared/signals/hooks";
import React from "@rbxts/react";
import { Players } from "@rbxts/services";
import { col, getPlayer } from "shared/help/assist";
import { LRecButton } from "../comps/base_comps";
import { getPlayerAtts, TPlayerAtts, usePlayerAtts } from "shared/signals/player_attributes";
import { TPlayerDataSettings } from "shared/player/player_utils";
import { Remotes } from "shared/signals/remotes";

export function TradeListBody() {
    const _players = usePlayers()
    const players = [
        ..._players, ..._players, ..._players, ..._players, ..._players,
        ..._players, ..._players, ..._players, ..._players, ..._players,
        ..._players, ..._players, ..._players, ..._players, ..._players,
    ]

    return (
        <LBox isScroll Vert Pos={new UDim2(0.5, 0, 0.5, 0)} Size={new UDim2(1, 20, 0.95, 0)}
            AnchorPoint={new Vector2(0.5, 0.5)} Trans Spacing={new UDim(0, 20)} AutoCanvasSize="Y"
            TrackWidth={15} SortOrder="LayoutOrder" >
            {players.map((player, i) => {
                return <TradeListRow key={player.UserId} remotePlayer={player} idx={i} />
            })}
            <LPusher gapF={80} LayoutOrder={players.size()} />
        </LBox>
    )
}

export const TradeListRow = ({ remotePlayer, idx }: {
    remotePlayer: Player, idx: number,
}) => {
    const defAtts = {
        settings: { tradeFriendsOnly: false } as TPlayerDataSettings,
        sentTradeRegs: [] as number[],
        rank: 0,
    }
    const localPlayer = getPlayer()
    const remoteData = usePlayerAtts(defAtts, remotePlayer)
    const localData = usePlayerAtts(defAtts,)

    const [avatar, _ready] = Players.GetUserThumbnailAsync(remotePlayer.UserId,
        Enum.ThumbnailType.HeadShot,
        Enum.ThumbnailSize.Size150x150
    )

    const isFriendsOnly = remoteData.settings.tradeFriendsOnly
    const isPending = localData.sentTradeRegs.includes(remotePlayer.UserId)
    const isReceived = remoteData.sentTradeRegs.includes(localPlayer.UserId)
    const text = isFriendsOnly ? 'Friends Only' : isPending ? 'Pending' : isReceived ? "Accept!" : 'Trade!'
    const color = isFriendsOnly ? 'gray' : isPending ? 'dark_green' : isReceived ? 'green' : 'green'

    const onClick = () => {
        warn(remotePlayer.Name, 'pending', isPending, 'recv', isReceived, 'frends only', isFriendsOnly)
        if (isFriendsOnly) return
        if (isReceived) {
            warn("starting trade with", remotePlayer.Name)

        } else if (isPending) {
            warn("Waiting for accept from", remotePlayer.Name)

        } else {
            warn("sending req to", remotePlayer.Name)
            Remotes.Client.Get('AddTradeRequest').SendToServer(remotePlayer.UserId)
        }
    }

    return (
        <LBox Size={new UDim2(1, 0, 0, 1000)} Aspect={7} Trans Center SpaceX={new UDim(0.025, 0)} >
            <LBox Size={new UDim2(0.75, 0, 0.9, 0)} Trans LayoutOrder={idx}>
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
                        Text={remotePlayer.DisplayName} />
                    <LText Size={new UDim2(1, 0, 0.4, 0)} Align="Left" Color={col('black')} fontWeight="Bold"
                        Text={remotePlayer.Name} />
                </LBox>
            </LBox>
            <LPusher gapS={0.05} />
            <LRecButton color={color} Size={new UDim2(0.25, 0, 0.8, 0)} onClick={onClick} >
                <LText Text={text} Size={new UDim2(0.85, 0, 0.9, 0)} Color={col('white')}
                    StrokeThickness={2} />
            </LRecButton>
        </LBox>
    )
}