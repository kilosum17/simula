import React, { useRef } from "@rbxts/react";
import { MainFrame, TMainFrameAtom } from "../comps/MainFrame";
import { Atom } from "shared/signals/atom";
import { icon } from "shared/help/icons";
import { InvFrameBody } from "./InvFrameBody";
import { invSidebarItems } from "./inventory_utils";

const headerIcons = [
    { name: "lock", icon: icon('rand') },
    { name: "grid", icon: icon('rand') },
    { name: "delete", icon: icon('rand') },
]

export function InvFrame() {
    const atom = useRef(new Atom({
        searchText: '',
        frameKind: "INV",
        headerIcon: icon("inv_pets"),
        headerTitle: 'Inventory!',
        showSearch: true,
        showSidebar: true,
        sidebarItems: invSidebarItems,
        sidebarItem: 'Pets',
    } satisfies TMainFrameAtom as TMainFrameAtom))

    return (
        <MainFrame atom={atom.current} >
            <InvFrameBody atom={atom.current} />
        </MainFrame>
    )
}