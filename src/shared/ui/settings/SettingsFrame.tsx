
import React, { useRef } from "@rbxts/react";
import { MainFrame, TMainFrameAtom } from "../comps/MainFrame";
import { Atom } from "shared/signals/atom";
import { icon } from "shared/help/icons";
import { SettingsFrameBody } from "./SettingsFrameBody";

export function SettingsFrame() {
    const atom = useRef(new Atom({
        searchText: '',
        frameKind: "SETTINGS",
        headerIcon: icon("tools_Settings"),
        headerTitle: 'Settings!',
        showSearch: false,
        showSidebar: false,
        mode: 'THIN',
    } satisfies TMainFrameAtom as TMainFrameAtom))

    return (
        <MainFrame atom={atom.current}  >
            <SettingsFrameBody />
        </MainFrame>
    )
}