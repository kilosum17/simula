import React, { ReactNode } from "@rbxts/react"
import { LBox, LEmpty, LLine, LText } from "../comps/Wrappers"
import { getAnyConf, getPetConf, getRankColor } from "shared/help/pet_catalog"
import { col } from "shared/help/assist"
import { Atom, useAtom } from "shared/signals/atom"
import { getTextDimensions } from "shared/help/math"

export type TTooltipKind = 'ITEM' | 'TEXT'

type TTooltip = {
    pos: UDim2,
    itemId?: string,
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
    const { kind, pos, itemId, open, text } = state
    if (!open) return <LEmpty />

    let body = <LText Text="Unkown" AutoSize="XY" TextSize={32} />
    const conf = getAnyConf(itemId || '')
    let sizeX = 0
    if (kind === 'ITEM' && conf) {
        const about = conf.isPet ? conf.info! : conf.desc!
        sizeX = getTextDimensions(about, 16).X
        body = <>
            <LText TextSize={32} AutoSize="XY" LayoutOrder={0} Text={conf.name!} fontWeight="ExtraBold" />
            <LText TextSize={16} AutoSize="XY" LayoutOrder={1} Text={conf.rank!} Color={getRankColor(conf.rank!)}
                StrokeThickness={1} />
            <LLine />
            <LText TextSize={16} AutoSize="XY" LayoutOrder={2} Text={about} StrokeThickness={0} />
        </>
    } else if (kind === 'TEXT' && text) {
        sizeX = getTextDimensions(text, 32).X
        body = <LText Text={text} AutoSize="XY" TextSize={32} StrokeThickness={0} />
    }
    return (
        <LBox Pos={pos} Size={new UDim2(0, sizeX, 0, 0)} AutoSize="Y" StrokeThickness={2} CornerRadius2={new UDim(0.05, 0)}
            SpaceX={new UDim(0, 7)} SpaceY={new UDim(0, 7)} SortOrder="LayoutOrder"
            Background={col('white')} Vert Center Padding={new UDim(0.04, 0)}
        >
            {body}
        </LBox>
    )
}

export const NTooltip = ({
    Size = new UDim2(1, 0, 1, 0),
    Pos, children,
    data, disable,
}: {
    Size?: UDim2, Pos?: UDim2,
    children: ReactNode, disable?: boolean,
    data: {
        text?: string,
        kind: TTooltipKind,
        itemId?: string,
        boostId?: number,
        maxSize?: Vector2,
    }
}) => {
    return (
        <frame Size={Size} Position={Pos} BackgroundTransparency={1}
            Event={{
                MouseEnter: () => {
                    if (disable) return
                    tooltipAtom.update({ ...data, open: true })
                },
                MouseLeave: () => {
                    if (disable) return
                    tooltipAtom.update({ open: false, text: undefined, itemId: undefined, maxSize: undefined })
                },
                MouseMoved: (_, x, y) => {
                    if (disable) return
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