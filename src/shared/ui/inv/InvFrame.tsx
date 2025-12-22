import React, { useRef } from "@rbxts/react";
import { InvPetsFrame } from "./InvPetsFrame";
import { MainFrame, TMainFrameAtom } from "../comps/MainFrame";
import { Atom } from "shared/signals/atom";
import { GPT_ICONS } from "shared/help/DATA";
import { icon } from "shared/help/icons";

const sidebarItems = [
    { icon: GPT_ICONS.nav_dinopaw, name: 'Pets', ver: 'pets' },
    { icon: GPT_ICONS.nav_backpack, name: 'Boosts', ver: 'boosts' },
    { icon: GPT_ICONS.nav_potions, name: 'Potions', ver: 'potions' },
    // { icon: GPT_ICONS.nav_book, name: 'Enchants', ver: 'books' },
    { icon: GPT_ICONS.nav_hover, name: 'Hovers', ver: 'hoverboards' },
]

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
        sidebarItems,
    } satisfies TMainFrameAtom as TMainFrameAtom))

    return (
        <MainFrame atom={atom.current} >
            <InvPetsFrame />
        </MainFrame>
    )
}