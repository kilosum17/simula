import React from "@rbxts/react"
import { useEffect, useRef } from "@rbxts/react"
import { shakeUI } from "shared/help/assist"
import { formatNumber } from "shared/help/helpers"
import { useFossilAtts } from "shared/signals/fossil_attributes"
import { LText } from "shared/ui/comps/Wrappers"

export function FossilBoardOne({ fos }: {
    fos: BasePart,
}) {
    const ref = useRef<UIScale>()
    const { health, maxHealth, lastMine } = useFossilAtts(fos)
    const shakeTweenRef = useRef(undefined as Tween | undefined)
    const killed = health === 0
    const val = health / maxHealth

    const color = (() => {
        if (val > 0.75) {
            return BrickColor.White().Color
        } else if (val > 0.5) {
            return Color3.fromHex('#D4FF42')
        } else if (val > 0.25) {
            return Color3.fromHex('#FF6942')
        } else {
            return BrickColor.Red().Color
        }
    })()

    const vis = (() => {
        const dur = math.abs(os.time() - lastMine)
        return !killed && dur < 4
    })()

    useEffect(() => {
        if (!shakeTweenRef.current) {
            shakeTweenRef.current = shakeUI(ref.current, {})
        }
        shakeTweenRef.current?.Play()
    }, [health])

    const healthInfo = formatNumber(math.floor(health))

    return (
        <frame BackgroundColor={BrickColor.Black()} BackgroundTransparency={0.5} Visible={vis}
            Size={new UDim2(1, 0, 1, 0)} AnchorPoint={new Vector2(0.5, 0.5)} Position={new UDim2(0.5, 0, 0.5, 0)} >
            <frame BackgroundColor3={color} Size={new UDim2(val, 0, 1, 0)} >
                <uicorner CornerRadius={new UDim(0.5, 0)} />
                <uistroke Thickness={2} />
            </frame>
            <LText Text={healthInfo} Size={new UDim2(0.5, 0, 3.5, 0)} AnchorPoint={new Vector2(0.5, 0.5)} Pos={new UDim2(0.5, 0, 0.5, 0)}
                StrokeThickness={2} Var="white" />
            <uicorner CornerRadius={new UDim(0.5, 0)} />
            <uiscale ref={ref} Scale={1} />
        </frame>
    )
}
