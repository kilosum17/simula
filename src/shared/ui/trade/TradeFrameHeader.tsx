import React from "@rbxts/react";
import { LBox, LImage, LText } from "../comps/Wrappers";
import { TTradeData } from "./TradeFrame";
import { Atom, useAtom } from "shared/signals/atom";
import { Players } from "@rbxts/services";
import { col } from "shared/help/assist";
import { icon } from "shared/help/icons";

export function TradeFrameHeader({ atom }: {
    atom: Atom<TTradeData>,
}) {
    const state = useAtom(atom)
    const remotePlayer = Players.GetPlayerByUserId(state.remotePlayerId)!
    const localPlayer = Players.GetPlayerByUserId(state.localPlayerId)!

    const remoteAvatar = Players.GetUserThumbnailAsync(remotePlayer.UserId, Enum.ThumbnailType.HeadShot, Enum.ThumbnailSize.Size150x150)[0]
    const localAvatar = Players.GetUserThumbnailAsync(localPlayer.UserId, Enum.ThumbnailType.HeadShot, Enum.ThumbnailSize.Size150x150)[0]

    return (
        <LBox AnchorPoint={new Vector2(0.5, 0.5)} Pos={new UDim2(0.5, 0, 0, -2)}
            Size={new UDim2(1, 0, 0.15, 0)} NoList Trans >
            {/* AVATAR 1 */}
            <LBox Size={new UDim2(2, 0, 1, 0)} Aspect={1} Pos={new UDim2(0, 0, 0.5, 0)}
                AnchorPoint={new Vector2(0.5, 0.5)} Background={col('black')} TransVal={0.3}
                StrokeThickness={4} CornerRadius2={new UDim(0.5, 0)} >
                <LImage Image={localAvatar} Size={new UDim2(1, 0, 1, 0)} Aspect CornerRadius={new UDim(0.5, 0)} />
            </LBox>
            <LBox Pos={new UDim2(0.5, 0, 0.5, 0)} Size={new UDim2(0.9, 0, 1, 0)} Trans
                AnchorPoint={new Vector2(0.5, 0.5)} Center >
                <LBox Vert Size={new UDim2(0.4, 0, 1, 0)} Trans>
                    <LText Text="Your Offer" Size={new UDim2(1, 0, 0.6, 0)} Color={col('white')} StrokeThickness={3} Align="Left" />
                    <LText Text="Trade Value: 💎0" Size={new UDim2(1, 0, 0.4, 0)} Color={col('blue_mid')} StrokeThickness={2} Align="Left" />
                </LBox>
                <LBox Center Size={new UDim2(0.2, 0, 0.7, 0)} Trans  >
                    <LBox Size={new UDim2(1, 0, 1, 0)} Aspect={1} CornerRadius2={new UDim(0.5, 0)}
                        StrokeThickness={4} Center >
                        <LImage Image={icon('rand')} Size={new UDim2(0.8, 0, 0.8, 0)} Aspect />
                    </LBox>
                </LBox>
                <LBox Vert Size={new UDim2(0.4, 0, 1, 0)} Trans >
                    <LText Text={remotePlayer.DisplayName} Size={new UDim2(1, 0, 0.6, 0)} Color={col('white')} StrokeThickness={3} Align="Right" />
                    <LText Text="Trade Value: 💎0" Size={new UDim2(1, 0, 0.4, 0)} Color={col('blue_mid')} StrokeThickness={2} Align="Right" />
                </LBox>
            </LBox>
            {/* AVATAR 2 */}
            <LBox Size={new UDim2(2, 0, 1, 0)} Aspect={1} Pos={new UDim2(1, 0, 0.5, 0)}
                AnchorPoint={new Vector2(0.5, 0.5)} Background={col('black')} TransVal={0.3}
                StrokeThickness={4} CornerRadius2={new UDim(0.5, 0)}   >
                <LImage Image={remoteAvatar} Size={new UDim2(1, 0, 1, 0)} Aspect CornerRadius={new UDim(0.5, 0)} />
            </LBox>
        </LBox>
    )
}