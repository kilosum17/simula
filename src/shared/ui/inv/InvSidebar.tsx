import React from "@rbxts/react";
import { LBox, LHover, LImage } from "../comps/Wrappers";
import { col } from "shared/help/assist";
import { GPT_ICONS } from "shared/help/DATA";

export function InvSidebar() {
    const Header = [
        { icon: GPT_ICONS.nav_dinopaw, name: 'Pets', ver: 'pets' },
        { icon: GPT_ICONS.nav_backpack, name: 'Boosts', ver: 'boosts' },
        { icon: GPT_ICONS.nav_potions, name: 'Potions', ver: 'potions' },
        // { icon: GPT_ICONS.nav_book, name: 'Enchants', ver: 'books' },
        { icon: GPT_ICONS.nav_hover, name: 'Hovers', ver: 'hoverboards' },
    ]

    return (
        <LBox Vert Size={new UDim2(0.05, 0, 0.9, 0)} Pos={new UDim2(0.005, 0, 1, 0)}
            AnchorPoint={new Vector2(1, 1)} Background={col("white")} Center
            StrokeThickness={4} CornerRadius2={new UDim(0.5, 0)}
            Padding={new UDim(0.02, 0)} MinSize={new Vector2(40, 0)}
        >
            {Header.map(h => {
                return (
                    <LHover key={h.name} Size={new UDim2(0.95, 0, 0.2, 0)} Aspect={1} Scale={1.05} >
                        <LBox Size={new UDim2(1, 0, 1, 0)} Center Trans >
                            <LImage Size={new UDim2(1, 0, 1, 0)} Aspect Image={h.icon} />
                        </LBox>
                    </LHover>
                )
            })}
        </LBox>
    )
}