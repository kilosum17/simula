import React, { useEffect, useRef, useState } from "@rbxts/react";
import { LBox } from "../comps/Wrappers";
import { col } from "shared/help/assist";
import { useFrameState } from "shared/signals/use_frame_state";
import { createCloseTween, createOpenTween } from "shared/signals/animations";
import { Atom, useAtom } from "shared/signals/atom";
import { TFrameKind } from "shared/signals/atoms";
import { MainFrameHeader } from "./MainFrameHeader";
import { MainFrameSidebar } from "./MainFrameSidebar";

export type TMainFrameAtom = {
    searchText: string,
    icons?: { name: string, icon: string }[],
    headerTitle: string, headerIcon: string,
    headerIcons?: { name: string, icon: string }[],
    frameKind: TFrameKind,
    showSearch?: boolean,
    showSidebar?: boolean,
    sidebarItems?: { name: string, icon: string }[],
    onSidebarClicked?: (name: string) => void
}

export function MainFrame({
    atom, children,
}: {
    atom: Atom<TMainFrameAtom>, children: React.JSX.Element,
}) {
    const state = useAtom(atom)
    const [visible, setVisible] = useState(false)
    const { frame } = useFrameState()
    const scaleRef = useRef<UIScale>()
    const open = frame === state.frameKind

    useEffect(() => {
        if (!scaleRef.current) return
        if (open) {
            setVisible(true)
            const anim = createOpenTween({ scaler: scaleRef.current! })
            anim.Play()
        } else {
            const anim = createCloseTween({ scaler: scaleRef.current! })
            anim.Completed.Connect(() => {
                setVisible(false)
            })
            anim.Play()
        }
        // warn(`${state.frameKind} changed!`, open)
    }, [open])

    return (
        <LBox NoList Size={new UDim2(0.9, 0, 0.6, 0)} Pos={new UDim2(0.5, 0, 0.5, 0)}
            MaxSize={new Vector2(1200, 600)} Trans Aspect={2}
            AnchorPoint={new Vector2(0.5, 0.5)} Visible={visible}
        >
            <LBox Size={new UDim2(1, 0, 1, 0)} CornerRadius2={new UDim(0.04, 0)}
                BgPatterns StokeColor={col('black')} StrokeThickness={5} NoList  >
                {children}
                <MainFrameHeader atom={atom} />
            </LBox>
            {state.showSidebar && <MainFrameSidebar atom={atom} />}
            <uiscale ref={scaleRef}  />
        </LBox>
    )
}