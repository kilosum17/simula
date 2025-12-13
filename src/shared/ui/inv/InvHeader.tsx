import React from "@rbxts/react"
import { LBox, LHover, LImage, LPusher, LText, LTextbox } from "../comps/Wrappers"
import { icon } from "shared/help/icons"
import { col } from "shared/help/assist"
import { usePageState } from "../hooks/use_page_state"

export function InvHeader() {
    const { setPage } = usePageState()

    const icons = [
        { name: "lock", icon: icon('rand') },
        { name: "grid", icon: icon('rand') },
        { name: "delete", icon: icon('rand') },
    ]

    return (
        <LBox Pos={new UDim2(0, 0, 0, -2)} Size={new UDim2(1, 0, 0.15, 0)} AnchorPoint={new Vector2(0, 0.5)} Trans VAlign="Center" >
            <LBox Size={new UDim2(0.35, 0, 1, 0)} Trans NoList >
                <LImage Pos={new UDim2(0, 0, 0.5, 0)} Size={new UDim2(1, 0, 1, 0)} AnchorPoint={new Vector2(0.5, 0.5)}
                    Aspect Image={icon("inv_pets")} Scale={1.2} />
                <LText Pos={new UDim2(0.1, 0, 0.5, -2)} Size={new UDim2(0.8, 0, 1, 0)} AnchorPoint={new Vector2(0, 0.5)}
                    Color={col("white")} StrokeThickness={3} Text="Inventory!" Align="Left" />
            </LBox>
            <LBox Size={new UDim2(0.3, 0, 0.6, 0)} Center Trans >
                <LBox Size={new UDim2(0, 0, 1, 0)} AutoSize="X" StrokeThickness={3} CornerRadius2={new UDim(0.5, 0)}
                    Padding={new UDim(0.02, 0)} SpaceX={new UDim(0.1, 0)} Center SortOrder="LayoutOrder" Background={col('white')} >
                    <LPusher gapS={0.5} LayoutOrder={-1} />
                    {icons.map((c, i) => {
                        return (
                            <LHover LayoutOrder={i} key={c.name} Size={new UDim2(2, 0, 0.9, 0)} Aspect={1} Scale={1.05} >
                                <LBox Size={new UDim2(1, 0, 1, 0)} Trans >
                                    <LImage Size={new UDim2(1, 0, 1, 0)} Aspect Image={c.icon} />
                                </LBox>
                            </LHover>
                        )
                    })}
                    <LPusher gapS={0.5} LayoutOrder={10} />
                </LBox>
            </LBox>
            <LBox Size={new UDim2(0.35, 0, 1, 0)} Trans NoList >
                <LBox Pos={new UDim2(0.1, 0, 0.5, 0)} Size={new UDim2(0.75, 0, 0.6, 0)} AnchorPoint={new Vector2(0, 0.5)}
                    StrokeThickness={3} CornerRadius2={new UDim(0.5, 0)} Center Background={col('white')} >
                    <LTextbox Size={new UDim2(0.95, 0, 0.95, 0)} Placeholder="Search" Text="" Align="Right"
                        Color={col('gray')} />
                </LBox>
                <LHover Pos={new UDim2(1, 0, 0.5, 0)} Size={new UDim2(2, 0, 1, 0)} Aspect={1} AnchorPoint={new Vector2(0.5, 0.5)}
                    onClick={() => setPage("")} >
                    <LImage Size={new UDim2(1, 0, 1, 0)} Aspect Image={icon("square_red_close_but")} />
                </LHover>
            </LBox>
        </LBox>
    )
}