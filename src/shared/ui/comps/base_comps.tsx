import React from "@rbxts/react"
import { LBox, LHover, LImage, LText } from "./Wrappers"
import { icon } from "shared/help/icons"

export const LRecButton = ({
    color, Size, Pos, text
}: {
    Size?: UDim2, Pos?: UDim2,
    color: 'green' | 'red', text: string,
}) => {
    const img = color === "green" ? icon('green_rec') : icon('rand')

    return <LHover Size={Size} Pos={Pos} >
        <LBox Size={new UDim2(1, 0, 1, 0)} NoList Trans >
            <LImage Image={img} Size={new UDim2(1, 0, 1, 0)} />
            <LText Text={text} Size={new UDim2(0.9, 0, 0.9, 0)} Pos={new UDim2(0.5, 0, 0.5, 0)} AnchorPoint={new Vector2(0.5, 0.5)} />
        </LBox>
    </LHover>
}