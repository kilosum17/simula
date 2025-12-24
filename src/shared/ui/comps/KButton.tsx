import React from "@rbxts/react"
import { LBox, LCenter, LHover, LImage } from "./Wrappers"
import { getImgKind, TImgKind } from "./comp_utils"

export const KButton = ({
    color, Size, Pos, onClick, children, disabled,
}: {
    Size?: UDim2, Pos?: UDim2, color: TImgKind,
    children?: React.JSX.Element, disabled?: boolean
    onClick?: () => void,
}) => {

    return <LHover Size={Size} Pos={Pos} onClick={onClick} >
        <LBox Size={new UDim2(1, 0, 1, 0)} NoList Trans >
            <LImage Image={getImgKind(color, disabled)} Size={new UDim2(1, 0, 1, 0)} />
            <LCenter>
                {children}
            </LCenter>
        </LBox>
    </LHover>
}

