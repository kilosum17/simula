import React, { useEffect } from "@rbxts/react"
import { useRef, useState } from "@rbxts/react"
import { shakeUI } from "shared/help/assist"
import { formatNumber } from "shared/help/helpers"
import { LText } from "shared/ui/comps/Wrappers"
import { Fossil } from "./fossil"

export const FossilHealthUi = ({ fos }: { fos: Fossil }) => {
    const setUpdates = useState(0)[1]
    const ref = useRef<UIScale>()
    const val = fos.health / fos.maxHealth
    const shakeTweenRef = useRef(undefined as Tween | undefined)
    let color = BrickColor.Red().Color
    if (val > 0.75) {
        color = BrickColor.White().Color
    } else if (val > 0.5) {
        color = Color3.fromHex('#D4FF42')
    } else if (val > 0.25) {
        color = Color3.fromHex('#FF6942')
    } else {
        color = BrickColor.Red().Color
    }

    const vis = (() => {
        const dur = math.abs(os.time() - fos.last_mine_time)
        return !fos.killed && dur < 4
    })()

    const health = (() => {
        return `${formatNumber(math.floor(fos.health))}`
    })()

    useEffect(() => {
        fos.changeSig.Connect(() => {
            const shakeTween = shakeTweenRef.current
            if (!shakeTween) {
                shakeTweenRef.current = shakeUI(ref.current, {})
            }
            shakeTween?.Play()
            setUpdates(p => p + 1)
        })
    }, [])

    const enabled = fos.mesh.Transparency < 0.5
    return (
        <billboardgui Size={new UDim2(10, 0, 0.65, 0)} ExtentsOffset={new Vector3(0, 0.5, 0)} AlwaysOnTop MaxDistance={1000}
            Enabled={enabled} >
            <frame BackgroundColor={BrickColor.Black()} BackgroundTransparency={0.5} Visible={vis}
                Size={new UDim2(1, 0, 1, 0)} AnchorPoint={new Vector2(0.5, 0.5)} Position={new UDim2(0.5, 0, 0.5, 0)} >
                <frame BackgroundColor3={color} Size={new UDim2(val, 0, 1, 0)} >
                    <uicorner CornerRadius={new UDim(0.5, 0)} />
                    < uistroke Thickness={2} />
                </frame>
                <LText Text={health} Size={new UDim2(0.5, 0, 3.5, 0)} AnchorPoint={new Vector2(0.5, 0.5)} Pos={new UDim2(0.5, 0, 0.5, 0)}
                    StrokeThickness={2} Var="white" />
                <uicorner CornerRadius={new UDim(0.5, 0)} />
                <uiscale ref={ref} Scale={1} />
            </frame>
        </billboardgui>
    )
}
