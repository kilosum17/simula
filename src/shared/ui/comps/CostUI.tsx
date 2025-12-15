import React from "@rbxts/react"
import { useState } from "@rbxts/react"
import { COIN_IMG, GPT_ICONS, icons } from "shared/help/DATA"
import { formatNumber, reverseList } from "shared/help/helpers"
import { LBox, LImage, LPusher, LText } from "shared/ui/comps/Wrappers"

const getData = (cost: number) => {
    const STEP = 100_000
    const steps = [0, STEP]
    for (let i = 0; i < 10; i++) {
        steps.push(steps[steps.size() - 1] * STEP)
    }
    const imgs = [
        icons.gold_coin, icons.gold_bars,
        icons.platinum_coin, icons.platinum_bars,
        icons.emarald_coin, icons.emarald_bars,
        icons.ruby_coin, icons.ruby_bars,
    ]
    const data = steps.map((s, i) => {
        const min = steps[i]
        const max = steps[i + 1] || min
        let cash = cost % max
        if (min > 0) {
            cash = math.floor(cash / min)
        }
        const valid = cost >= min
        const img = imgs[i] || icons.BookLock
        return { img, min, max, cash, valid }
    })
    return data
}

interface ICProps {
    vis?: boolean,
    size?: UDim2,
    short?: boolean,
    cost: number,
    Align?: 'Center' | 'Left' | 'Right',
}

export function CostUI(props: ICProps) {
    const { vis, size, Align } = props
    const cost = props.cost
    const data = getData(cost)
    const maxLen = props.short ? 1 : 2
    const validData = reverseList(data.filter(d => d.valid), maxLen)
    return (
        <LBox Visible={vis} Size={size} Trans VAlign="Center" HAlign={Align || 'Center'} >
            {validData.map((d, i) => {
                const cashInfo = formatNumber(d.cash)
                return (
                    <LBox Center LayoutOrder={1000 - i} AutoSize="X" Size={new UDim2(0, 0, 1, 0)} Trans >
                        <LImage Size={new UDim2(0, 1000, 0.97, 0)} Image={d.img} Aspect />
                        <LPusher gapS={0.05} />
                        <LText Text={cashInfo} Size={new UDim2(0, 0, 0.9, 0)} Align="Left" Var='white'
                            StrokeThickness={2} AutoSize="X" />
                    </LBox>
                )
            })}
        </LBox>
    )
}

