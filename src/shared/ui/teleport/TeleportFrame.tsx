
import React, { useRef } from "@rbxts/react";
import { MainFrame, TMainFrameAtom } from "../comps/MainFrame";
import { Atom } from "shared/signals/atom";
import { GPT_ICONS } from "shared/help/DATA";
import { icon } from "shared/help/icons";
import { TeleportFrameBody } from "./TeleportFrameBody";

export function TeleportFrame() {
    const atom = useRef(new Atom({
        searchText: '',
        frameKind: "TELEPORT",
        headerIcon: icon("tools_teleport"),
        headerTitle: 'Teleport!',
        showSearch: true,
        showSidebar: false,
    } satisfies TMainFrameAtom as TMainFrameAtom))

    return (
        <MainFrame atom={atom.current} >
            <TeleportFrameBody />
        </MainFrame>
    )
}