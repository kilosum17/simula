import React, { ReactNode, useState } from "@rbxts/react"
import { LBox, LLine, LText } from "../comps/Wrappers"
import { getRankColor, TPetData } from "shared/help/pet_catalog"
import { col } from "shared/help/assist"
import { GuiService } from "@rbxts/services"
import { Sync } from "shared/signals/Sync"

type TTooltip = {
    pos: UDim2,
    pet?: TPetData,
    open?: boolean,
    text?: string,
    maxSize?: Vector2,
}

const defTooltip = {
    pos: new UDim2(),
} as TTooltip

const tooltipSync = new Sync(defTooltip)

const useTooltip = tooltipSync.getHook()

export const NTooltipFrame = () => {
    const [tooltip] = useTooltip()
    const { pos, pet, open, text, maxSize = new Vector2(150, 0) } = tooltip

    if (!open) return <frame BackgroundTransparency={1} />

    let body = <LText Text="Unkown" AutoSize="XY" TextSize={32} />
    if (pet) {
        body = <>
            <LText TextSize={32} AutoSize="XY" Text={pet.name} StrokeThickness={1} />
            <LText TextSize={16} AutoSize="XY" Text={pet.rank} Color={getRankColor(pet.rank)}
                StrokeThickness={1} />
            <LLine />
            <LText TextSize={16} AutoSize="XY" Text={pet.info} StrokeThickness={0} />
        </>
    } else if (text) {
        body = <LText Text={text} AutoSize="XY" TextSize={32} StrokeThickness={0} />
    }
    return (
        <LBox Pos={pos} Size={new UDim2()} AutoSize="XY" StrokeThickness={2} CornerRadius2={new UDim(0.05, 0)}
            SpaceX={new UDim(0, 10)} SpaceY={new UDim(0, 4)} Background={col('white')}
            MaxSize={maxSize} Vert HAlign="Center" >
            {body}
        </LBox>
    )
}

export const NTooltip = ({
    Size = new UDim2(1, 0, 1, 0),
    Pos, pet, children, text, maxSize,
}: {
    Size?: UDim2, Pos?: UDim2, text?: string,
    pet?: TPetData, children: ReactNode, maxSize?: Vector2,
}) => {
    return (
        <frame Size={Size} Position={Pos} BackgroundTransparency={1}
            Event={{
                MouseEnter: () => {
                    tooltipSync.update({ pet, text, maxSize, open: true })
                },
                MouseLeave: () => {
                    tooltipSync.update({ open: false, text: undefined, pet: undefined, maxSize: undefined })
                },
                MouseMoved: (_, x, y) => {
                    const vec = new Vector2(x + 15, y + 15);
                    const pos = new UDim2(0, vec.X, 0, vec.Y)
                    tooltipSync.update({ pos, pet, text, maxSize, open: true, })
                    // warn("offset", vec, 'pos', x, y, 'frame')
                }
            }} >
            {children as React.JSX.Element}
        </frame>
    )
}