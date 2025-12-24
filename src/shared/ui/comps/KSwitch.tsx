import React, { useState, useEffect, useRef } from "@rbxts/react"
import { TweenService } from "@rbxts/services"
import { LImage, LText } from "./Wrappers"
import { getImgKind } from "./comp_utils"
import { col } from "shared/help/assist"
import { KButton } from "./KButton"

export const KSwitch = ({ size, pos, val, setVal }: {
    size?: UDim2, pos?: UDim2,
    val: boolean, setVal: (val: boolean) => void,
}) => {
    const getLoc = (val: boolean) => {
        if (val) return new UDim2(0.75, 0, 0.5, 0)
        else return new UDim2(0.25, 0, 0.5, 0)
    }
    const [loc, _setLoc] = useState(getLoc(val))
    const ref = useRef<Frame>()

    useEffect(() => {
        const frame = ref.current
        if (!frame) return
        const tweenInfo = new TweenInfo(
            0.2,
            Enum.EasingStyle.Quad,
            Enum.EasingDirection.Out
        );
        const tween = TweenService.Create(frame, tweenInfo, { Position: getLoc(val) });
        tween.Play();
        return () => tween.Cancel();
    }, [val])
    const text = val ? "On" : "Off"
    return (
        <LImage Size={size} Pos={pos} Image={getImgKind('gray')} >
            <frame Position={loc} Size={new UDim2(0.6, 0, 1.1, 0)} BackgroundTransparency={1}
                AnchorPoint={new Vector2(0.5, 0.5)} ref={ref} >
                <KButton color={val ? 'green' : 'red'} Size={new UDim2(1, 0, 1, 0)}
                    onClick={() => setVal(!val)} >
                    <LText Text={text} Size={new UDim2(0.8, 0, 0.8, 0)} StrokeThickness={2}
                        Color={col('white')} />
                </KButton>
            </frame>
        </LImage>
    )
}
