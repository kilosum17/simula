import React from "@rbxts/react";
import { StrictMode } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import { getPlayerGui } from "shared/help/assist";

const playerGui = getPlayerGui()

interface LayerProps {
    displayOrder?: number;
    children?: React.ReactNode;
}

export function Layer({ displayOrder, children }: LayerProps) {
    return (
        <screengui
            DisplayOrder={displayOrder}
            IgnoreGuiInset
            ResetOnSpawn={false}
        // ZIndexBehavior={Enum.ZIndexBehavior.Sibling}
        >
            {children}
        </screengui>
    )
}


export const mountFrame = (frame: React.JSX.Element, displayOrder = 1) => {
    task.spawn(() => {
        const root = createRoot(new Instance("Folder"));
        root.render(
            <StrictMode>
                {createPortal(
                    <Layer displayOrder={displayOrder}>
                        {frame}
                    </Layer>,
                    playerGui
                )}
            </StrictMode>
        );
    })
}
