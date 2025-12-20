import { LBox, LHover, LText } from "shared/ui/comps/Wrappers";
import React, { useEffect, useRef, useState } from "@rbxts/react";
import { useAtom } from "shared/signals/atom";
import { createCloseTween, createOpenTween } from "shared/signals/animations";
import { col } from "shared/help/assist";
import { EggOne } from "../egg_one";

export function EggPrompUI({ egg }: {
    egg: EggOne
}) {
    const scalerRef = useRef<UIScale>()
    const { open } = useAtom(egg.atom)
    const [vis, setVis] = useState(false)

    useEffect(() => {
        const scaler = scalerRef.current
        if (!scaler) return
        if (open) {
            setVis(true)
            const openAnim = createOpenTween({ scaler, small: true })
            openAnim.Play()
        } else {
            const closeAnim = createCloseTween({ scaler, small: true })
            closeAnim.Completed.Once(() => {
                setVis(false)
            })
            closeAnim.Play()
        }
    }, [open])

    return (
        <LHover onClick={() => egg.eggClicked()} >
            <LBox Visible={vis} Size={new UDim2(1, 0, 1, 0)}
                Background={col('white')} CornerRadius2={new UDim(0.2, 0)}
                StrokeThickness={4} StokeColor={col('black')} Center
            >
                <LText Text="E" Size={new UDim2(0.8, 0, 0.8, 0)}
                    Color={col('black')} StrokeThickness={0}
                />
                <uiscale ref={scalerRef} />
            </LBox >
        </LHover >
    )
}

