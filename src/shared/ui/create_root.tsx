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

export const mountSurfaceGui = ({ name, comp, part, face }: { name: string, comp: React.JSX.Element, part: BasePart, face: Enum.NormalId }) => {
    const surfaceGui = new Instance("SurfaceGui");
    surfaceGui.Parent = part;
    surfaceGui.MaxDistance = 800
    surfaceGui.Face = face
    const root = createRoot(surfaceGui);
    root.render(comp);
    return root
}

export const mountBillboardGui = ({
    part, size, extendsOffset, alwaysOnTop = false, maxDistance, comp,
}: {
    part: BasePart, size: UDim2, extendsOffset: Vector3,
    alwaysOnTop?: boolean, maxDistance?: number, comp: React.JSX.Element,
}) => {
    const billboard = new Instance("BillboardGui");
    billboard.Parent = part;
    billboard.Size = size
    billboard.ExtentsOffset = extendsOffset
    billboard.AlwaysOnTop = alwaysOnTop
    if (maxDistance) billboard.MaxDistance = maxDistance

    const root = createRoot(billboard);
    root.render(comp);
    return root
}
