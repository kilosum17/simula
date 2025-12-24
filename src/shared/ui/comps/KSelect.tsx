import { col } from 'shared/help/assist'
import { LText } from './Wrappers'
import React from '@rbxts/react'
import { KButton } from './KButton'

export type TSelectOption = {
    text: string,
    red?: boolean
}

export default function KSelect({ size, pos, val, setVal, options }: {
    size?: UDim2, pos?: UDim2,
    options: TSelectOption[],
    val: string, setVal: (val: string) => void,
}) {
    const ops = options.size() === 0 ? [{ text: 'No Options!', red: true }] : options
    const i = ops.findIndex(p => p.text === val)
    const idx = i === -1 ? 0 : i
    const option = ops[idx]
    const color = option.red ? 'red' : 'green'

    const onClick = () => {
        const i = (idx + 1) % ops.size()
        setVal(ops[i].text)
    }

    return (
        <KButton Size={size} Pos={pos} color={color} onClick={onClick} >
            <LText Text={option.text} Size={new UDim2(0.85, 0, 0.9, 0)}
                Color={col('white')} StrokeThickness={2} />
        </KButton>
    )
}
