import React, { ReactNode } from "@rbxts/react"
import { LBox, LEmpty, LLine, LText } from "../comps/Wrappers"
import { getPetConf, getRankColor } from "shared/help/pet_catalog"
import { col } from "shared/help/assist"
import { Atom, useAtom } from "shared/signals/atom"

export type TTooltipKind = 'PET' | 'TEXT' | 'BOOST'

type TTooltip = {
    pos: UDim2,
    petId?: number,
    boostId?: number,
    open?: boolean,
    text?: string,
    maxSize?: Vector2,
    kind: TTooltipKind,
}

const defTooltip = {
    pos: new UDim2(),
} as TTooltip

const tooltipAtom = new Atom(defTooltip as TTooltip)

export const NTooltipFrame = () => {
    const state = useAtom(tooltipAtom)
    const { kind, pos, petId, open, text, maxSize = new Vector2(150, 0) } = state
    if (!open) return <LEmpty />

    const pet = getPetConf(petId || -1)
    let body = <LText Text="Unkown" AutoSize="XY" TextSize={32} />
    if (kind === 'PET' && pet) {
        body = <>
            <LText TextSize={32} AutoSize="XY" Text={pet.name} StrokeThickness={1} />
            <LText TextSize={16} AutoSize="XY" Text={pet.rank} Color={getRankColor(pet.rank)}
                StrokeThickness={1} />
            <LLine />
            <LText TextSize={16} AutoSize="XY" Text={pet.info} StrokeThickness={0} />
        </>
    } else if (kind === 'TEXT' && text) {
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
    Pos, children,
    data,
}: {
    Size?: UDim2, Pos?: UDim2,
    children: ReactNode,
    data: {
        text?: string,
        kind: TTooltipKind,
        petId?: number,
        boostId?: number,
        maxSize?: Vector2,
    }
}) => {
    return (
        <frame Size={Size} Position={Pos} BackgroundTransparency={1}
            Event={{
                MouseEnter: () => {
                    tooltipAtom.update({ ...data, open: true })
                },
                MouseLeave: () => {
                    tooltipAtom.update({ open: false, text: undefined, petId: undefined, maxSize: undefined })
                },
                MouseMoved: (_, x, y) => {
                    const vec = new Vector2(x + 15, y + 15);
                    const pos = new UDim2(0, vec.X, 0, vec.Y)
                    tooltipAtom.update({ ...data, pos, open: true, })
                    // warn("offset", vec, 'pos', x, y, 'frame')
                }
            }} >
            {children as React.JSX.Element}
        </frame>
    )
}