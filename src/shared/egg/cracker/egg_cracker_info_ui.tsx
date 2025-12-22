import React, { useEffect, useRef } from "@rbxts/react";
import { createOpenTween } from "shared/signals/animations";
import { LBox, LText } from "shared/ui/comps/Wrappers";
import { EggCracker } from "./egg_cracker";
import { useAtom } from "shared/signals/atom";
import { col } from "shared/help/assist";

export function EggCrackerInfo({ cracker }: { cracker: EggCracker }) {
    const { open } = useAtom(cracker.atom)
    const scaleRef = useRef<UIScale>()

    useEffect(() => {
        if (open) {
            const openAnim = createOpenTween({ scaler: scaleRef.current!, small: true })
            openAnim.Play()
        }
    }, [open])

    if (!open) return <></>
    return <LBox Trans Center Pos={new UDim2(0.5, 0, 0.9, 0)} AnchorPoint={new Vector2(0.5, 0.5)}
        Size={new UDim2(1, 0, 0.1, 0)} >
        <LText Text="Click to open!" Size={new UDim2(1, 0, 1, 0)}
            StrokeThickness={3} Color={col('white')} />
        <uiscale ref={scaleRef} />
    </LBox>
}
