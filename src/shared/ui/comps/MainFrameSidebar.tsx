import React from "@rbxts/react";
import { LBox, LHover, LImage } from "../comps/Wrappers";
import { col } from "shared/help/assist";
import { NTooltip } from "../nitifications/NTooltip";
import { TMainFrameAtom } from "./MainFrame";
import { Atom, useAtom } from "shared/signals/atom";

export function MainFrameSidebar({ atom }: {
    atom: Atom<TMainFrameAtom>,
}) {
    const state = useAtom(atom)

    return (
        <LBox Vert Size={new UDim2(0.055, 0, 0.9, 0)} Pos={new UDim2(0.005, 0, 1, 0)}
            AnchorPoint={new Vector2(1, 1)} Background={col("white")} Center
            StrokeThickness={3.5} CornerRadius2={new UDim(0.5, 0)}
            Padding={new UDim(0.02, 0)} MinSize={new Vector2(40, 0)}
        >
            {state.sidebarItems?.map(h => {
                const callOnClick = () => {
                    state.onSidebarClicked?.(h.name)
                }
                return (
                    <LHover key={h.name} Size={new UDim2(0.95, 0, 0.2, 0)} Aspect={1} Scale={1.05}
                        onClick={callOnClick} >
                        <NTooltip data={{ kind: 'TEXT', text: h.name }}  >
                            <LBox Size={new UDim2(1, 0, 1, 0)} Center Trans >
                                <LImage Size={new UDim2(1, 0, 1, 0)} Aspect Image={h.icon} />
                            </LBox>
                        </NTooltip>
                    </LHover>
                )
            })}
        </LBox>
    )
}