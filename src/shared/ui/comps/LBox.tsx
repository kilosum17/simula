import React from "@rbxts/react";

type TLbox = {
    children?: React.ReactNode;
    dir?: "ver" | "hor"
    trans?: number
    pos?: UDim2,
    size?: UDim2,
    anchor?: Vector2,
    zIndex?: number,
}

export const LBox = ({ dir, children, trans = 1, pos, size, anchor, zIndex }: TLbox) => {

    return <frame Transparency={trans} Position={pos} Size={size} AnchorPoint={anchor} ZIndex={zIndex}  >
        {dir && <uilistlayout FillDirection={dir === "ver" ? "Vertical" : "Horizontal"} />}
        {children}
    </frame>
}