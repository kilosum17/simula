import { usePlayerAtts } from "shared/signals/player_attributes"
import { EggOne } from "../egg_one"
import { getEggState } from "../egg_utils"
import { LBox, LHover, LText } from "shared/ui/comps/Wrappers"
import React from "@rbxts/react"
import { col } from "shared/help/assist"
import { CostUI } from "shared/ui/comps/CostUI"

export function EggPriceUI({ egg }: {
    egg: EggOne
}) {
    const { eggs } = usePlayerAtts({ eggs: [] })
    const { available, unlocked, eggCost: cost } = getEggState(egg.eggNo)
    let background = new Color3()
    let text = ''
    let showCostUi = false
    if (!available) {
        background = Color3.fromHex('353242')
        text = 'Locked!'
    } else if (!unlocked) {
        background = Color3.fromHex('84ff00')
        text = 'Unlock!'
    } else {
        background = Color3.fromHex('fff124')
        showCostUi = true
    }

    return (
        <LHover onClick={() => egg.eggClicked()} >
            <LBox Size={new UDim2(0.9, 0, 0.85, 0)}
                Background={background} Center
                CornerRadius2={new UDim(0.15, 0)}
                StrokeThickness={8} StokeColor={Color3.fromRGB(0, 0, 0)}
            >
                {!showCostUi && <LText Text={text} Size={new UDim2(1, 0, 1, 0)}
                    Color={col('white')} StrokeThickness={2} TextSize={50}
                />}
                {showCostUi && <CostUI cost={cost} size={new UDim2(1, 0, 1, 0)} short minSize={0} />}
            </LBox >
        </LHover >
    )
}