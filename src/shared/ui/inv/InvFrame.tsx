import React from "@rbxts/react";
import { LBox } from "../comps/Wrappers";
import { col } from "shared/help/assist";
import { InvSidebar } from "./InvSidebar";
import { InvHeader } from "./InvHeader";
import { InvPetsFrame } from "./Inv_pets/InvPetsFrame";
import { usePageState } from "../hooks/use_page_state";



export function InvFrame() {
    const { page } = usePageState()

    if (page !== 'INV') {
        return <frame Transparency={1} />
    }
    return (
        <LBox NoList Size={new UDim2(0.9, 0, 0.6, 0)} Pos={new UDim2(0.5, 0, 0.5, 0)}
            MaxSize={new Vector2(800, 600)} Trans
            AnchorPoint={new Vector2(0.5, 0.5)}
        >
            <LBox Size={new UDim2(1, 0, 1, 0)} CornerRadius2={new UDim(0.04, 0)}
                Background={col('white')} StokeColor={col('black')} StrokeThickness={5} NoList  >
                <InvPetsFrame />
                <InvHeader />
            </LBox>
            <InvSidebar />
        </LBox>
    )
}