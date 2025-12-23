import { LBox, LImage, LText } from "shared/ui/comps/Wrappers";
import { EggOne } from "../egg_one";
import { getEggState } from "../egg_utils";
import React, { useEffect, useRef, useState } from "@rbxts/react";
import { useAtom } from "shared/signals/atom";
import { createCloseTween, createOpenTween } from "shared/signals/animations";
import { col, colHex } from "shared/help/assist";
import { icon } from "shared/help/icons";
import { icons } from "shared/help/DATA";
import { getPetConf } from "shared/help/pet_catalog";

export function EggPetListUi({ egg }: {
    egg: EggOne,
}) {
    const { open } = useAtom(egg.atom)
    const { petsWeights: petsList } = getEggState(egg.eggNo)
    const [vis, setVis] = useState(false)
    const scalerRef = useRef<UIScale>()

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
        <LBox Size={new UDim2(1, 0, 1, 0)} Background={col('white')} CornerRadius2={new UDim(0.1, 0)}
            Padding={new UDim(0.07, 0)} Center Visible={vis}
            AnchorPoint={new Vector2(0.5, 0.5)} Pos={new UDim2(0.5, 0, 0.5, 0)}
        >
            {petsList.map(p => {
                const perc = `${p.perc}%`
                const petConf = getPetConf(p.id)!
                return (
                    <LBox key={p.id} Size={new UDim2(0.2, 0, 0.8, 0)} NoList Trans Aspect={1} >
                        <LImage Image={petConf.icon} Size={new UDim2(1, 0, 1, 0)} />
                        <LImage Size={new UDim2(0.9, 0, 0.9, 0)} Image={icon('rand')} />
                        <LText Text={perc} Pos={new UDim2(0.9, 0, 0.1, 0)} Size={new UDim2(0.7, 0, 0.5, 0)}
                            Color={colHex('84ff00')} StrokeThickness={2} ZIndex={10} AnchorPoint={new Vector2(0.5, 0.5)} />
                    </LBox >
                )
            })}
            <uiscale ref={scalerRef} />
        </LBox >
    )
}