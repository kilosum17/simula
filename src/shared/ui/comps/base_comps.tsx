import React from "@rbxts/react"
import { LBox, LCenter, LHover, LImage } from "./Wrappers"
import { icon } from "shared/help/icons"

export const LRecButton = ({
    color, Size, Pos, onClick, children,
}: {
    Size?: UDim2, Pos?: UDim2, color: 'green' | 'red',
    children: React.JSX.Element,
    onClick?: () => void,
}) => {
    const img = color === "green" ? icon('green_rec') : icon('rand')

    return <LHover Size={Size} Pos={Pos} onClick={onClick} >
        <LBox Size={new UDim2(1, 0, 1, 0)} NoList Trans >
            <LImage Image={img} Size={new UDim2(1, 0, 1, 0)} />
            <LCenter>
                {children}
            </LCenter>
        </LBox>
    </LHover>
}