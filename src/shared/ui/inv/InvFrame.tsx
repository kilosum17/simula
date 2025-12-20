import React, { useEffect, useRef, useState } from "@rbxts/react";
import { LBox } from "../comps/Wrappers";
import { col } from "shared/help/assist";
import { InvSidebar } from "./InvSidebar";
import { InvHeader } from "./InvHeader";
import { InvPetsFrame } from "./Inv_pets/InvPetsFrame";
import { useFrameState } from "shared/signals/use_frame_state";
import { createCloseTween, createOpenTween } from "shared/signals/animations";

export function InvFrame() {
    const [visible, setVisible] = useState(false)
    const { frame } = useFrameState()
    const scaleRef = useRef<UIScale>()
    const open = frame === 'INV'

    useEffect(() => {
        if (!scaleRef.current) return
        if (open) {
            setVisible(true)
            const anim = createOpenTween({ scaler: scaleRef.current! })
            anim.Play()
        } else {
            const anim = createCloseTween({ scaler: scaleRef.current! })
            anim.Completed.Connect(() => {
                setVisible(false)
            })
            anim.Play()
        }
        warn('Inv open changed!', open)
    }, [open])

    return (
        <LBox NoList Size={new UDim2(0.9, 0, 0.6, 0)} Pos={new UDim2(0.5, 0, 0.5, 0)}
            MaxSize={new Vector2(800, 600)} Trans
            AnchorPoint={new Vector2(0.5, 0.5)} Visible={visible}
        >
            <LBox Size={new UDim2(1, 0, 1, 0)} CornerRadius2={new UDim(0.04, 0)}
                BgPatterns StokeColor={col('black')} StrokeThickness={5} NoList  >
                <InvPetsFrame />
                <InvHeader />
            </LBox>
            <InvSidebar />
            <uiscale ref={scaleRef} />
        </LBox>
    )
}