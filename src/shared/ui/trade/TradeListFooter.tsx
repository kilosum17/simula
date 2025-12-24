import React from "@rbxts/react";
import { LBox, LPusher, LText, LTextbox } from "../comps/Wrappers";
import { Atom } from "shared/signals/atom";
import { TMainFrameAtom } from "../comps/MainFrame";
import { col } from "shared/help/assist";
import { TextIcons } from "shared/help/icons";

export function TradeListFooter({ atom }: {
    atom: Atom<TMainFrameAtom>
}) {
    const icons = [
        { name: 'History', icon: TextIcons.Clock },
        { name: 'Friends', icon: TextIcons.Smiley },
        { name: 'Settings', icon: TextIcons.Settings },
    ]

    return (
        <LBox Size={new UDim2(0.9, 0, 0.1, 0)} Pos={new UDim2(0.5, 0, 1, 0)}
            AnchorPoint={new Vector2(0.5, 0.5)} Trans Center>
            <LBox Size={new UDim2(0.3, 0, 1, 0)} Trans >
                <LBox Size={new UDim2(0, 0, 1, 0)} CornerRadius2={new UDim(0.5, 0)} SortOrder='LayoutOrder'
                    StrokeThickness={3} Background={col('white')} Center AutoSize="X" SpaceX={new UDim(0, 5)} >
                    {icons.map((c, i) => {
                        return <LText key={c.name} Text={c.icon} Size={new UDim2(1, 0, 0.95, 0)}
                            Aspect={1} LayoutOrder={i} />
                    })}
                </LBox>
            </LBox>
            <LPusher gapS={0.05} NoAspect />
            <LBox Size={new UDim2(0.65, 0, 1, 0)} StrokeThickness={3} CornerRadius2={new UDim(0.5, 0)}
                Center Background={col('white')} >
                <LTextbox Size={new UDim2(0.95, 0, 0.95, 0)} Placeholder="Search" Text=""
                    Align="Right" Color={col('gray')}
                    onChange={(inp) => atom.update({ searchText: inp })} />
            </LBox>
        </LBox>
    )
}
