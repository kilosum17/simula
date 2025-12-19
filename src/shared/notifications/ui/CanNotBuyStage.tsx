import React, { useEffect } from "@rbxts/react";
import { col } from "shared/help/assist";
import { icon } from "shared/help/icons";
import { canNotBuyAtom } from "shared/signals/atoms";
import { LRecButton } from "shared/ui/comps/base_comps";
import { LBox, LHiders, LHover, LImage, LPusher, LText } from "shared/ui/comps/Wrappers";

const TOP_COLOR = Color3.fromHex('4eddff')

const useData = canNotBuyAtom.getHook()

export function CanNotBuyStage() {
    const { open } = useData()

    useEffect(() => {
        warn('open', open)
    }, [open])

    const onClose = () => {
        canNotBuyAtom.update({ open: false })
    }

    return (
        <LBox BgPatterns NoList StrokeThickness={5} Size={new UDim2(0.9, 0, 0.8, 0)} Pos={new UDim2(0.5, 0, 0.5, 0)}
            MaxSize={new Vector2(800, 600)} Trans Visible={open} Aspect={1.2}
            AnchorPoint={new Vector2(0.5, 0.5)} CornerRadius2={new UDim(0.04, 0)}
        >
            <LBox Size={new UDim2(1, 0, 1, 0)} Trans Vert >
                <LBox Size={new UDim2(1, 0, 0.15, 0)} Background={TOP_COLOR} CornerRadius2={new UDim(0.25, 0)} NoList >
                    <LHiders Corners={['BL', 'BR']} Color={TOP_COLOR} Size={new UDim2(0, 15, 0, 15)} />
                    <LText Text="Oops!" Pos={new UDim2(0.5, 0, 0.5, 0)} AnchorPoint={new Vector2(0.5, 0.5)} Size={new UDim2(1, 0, 0.8, 0)}
                        StrokeThickness={2} Color={col('white')} />
                </LBox>
                <LBox Trans Vert Center Size={new UDim2(1, 0, 0.85, 0,)} >
                    <LPusher gapS={0.05} />
                    <LText Size={new UDim2(1, 0, 0.3, 0)} Text="You cannot afford this \n area!"
                        StrokeThickness={0} Color={col('black')} StrokeColor={col('black')} />
                    <LImage Size={new UDim2(1, 0, 0.3, 0)} Aspect Image={icon('inv_pets')} />
                    <LBox Size={new UDim2(1, 0, 0.3, 0)} Center Trans >
                        <LRecButton color="green" Size={new UDim2(0.5, 0, 0.7, 0)} onClick={onClose} >
                            <LText StrokeThickness={3} Text="Ok!" Color={col('white')} Size={new UDim2(0.8, 0, 0.8, 0)} />
                        </LRecButton>
                    </LBox>
                    <LPusher gapS={0.05} />
                </LBox>
            </LBox>
            <LHover Pos={new UDim2(1, 0, 0, 0)} Size={new UDim2(2, 0, 0.12, 0)} Aspect={1} AnchorPoint={new Vector2(0.5, 0.5)}
                onClick={onClose} >
                <LImage Size={new UDim2(1, 0, 1, 0)} Aspect Image={icon("square_red_close_but")} />
            </LHover>
        </LBox>
    )
}