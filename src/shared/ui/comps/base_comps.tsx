import React from "@rbxts/react"
import { LBox, LCenter, LHover, LImage } from "./Wrappers"
import { icon } from "shared/help/icons"

export const LRecButton = ({
    color, Size, Pos, onClick, children, disabled,
}: {
    Size?: UDim2, Pos?: UDim2, color: 'green' | 'red',
    children: React.JSX.Element, disabled?: boolean
    onClick?: () => void,
}) => {

    const getImg = () => {
        if (disabled) return icon('gray_rec_but')
        return color === "green" ? icon('green_rec_but') : icon('red_rec_but')
    }

    return <LHover Size={Size} Pos={Pos} onClick={onClick} >
        <LBox Size={new UDim2(1, 0, 1, 0)} NoList Trans >
            <LImage Image={getImg()} Size={new UDim2(1, 0, 1, 0)} />
            <LCenter>
                {children}
            </LCenter>
        </LBox>
    </LHover>
}


