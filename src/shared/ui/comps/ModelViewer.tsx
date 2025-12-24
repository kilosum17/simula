import React, { useEffect, useRef, useState } from "@rbxts/react";
import { LBox, LHover, LText } from "./Wrappers";
import { col } from "shared/help/assist";

export const ModelViewer = ({ model, name }: { model: Model, name: string }) => {
    const [size, setSize] = useState(4)
    const [rot, setRot] = useState(-45)
    const viewportRef = useRef<ViewportFrame>();

    useEffect(() => {
        const viewport = viewportRef.current;
        if (!viewport) return;

        viewport.ClearAllChildren();
        viewport.BackgroundColor3 = col('white')

        const worldModel = new Instance("WorldModel");
        worldModel.Parent = viewport;

        // 1. Setup the Pet Model first so we can calculate bounds
        const clonedModel = model.Clone();
        const cframe = new CFrame(0, 0, 0)
        clonedModel.PivotTo(cframe);
        clonedModel.Parent = worldModel;


        // 2. Calculate Center and Front
        // modelCF is the center of the model, modelSize is the total dimensions
        const [modelCF, modelSize] = clonedModel.GetBoundingBox();

        // Calculate the distance: Half the depth of the model + 3 studs
        const distanceOffset = (modelSize.Z / 2) + 3;

        // 3. Setup the Camera
        const camera = new Instance("Camera");
        camera.FieldOfView = 50;

        // Position the camera 3 studs in front of the center
        // We use modelCF.LookVector to find "Forward" and multiply by distance
        camera.CFrame = new CFrame(
            modelCF.Position.add(modelCF.LookVector.mul(distanceOffset).mul(size)),
            modelCF.Position // Look at the center
        );
        const pivot = cframe.mul(CFrame.Angles(0, math.rad(rot), 0))
        clonedModel.PivotTo(pivot);
        const outlineModel = clonedModel.Clone();
        outlineModel.Name = "Outline";
        outlineModel.PivotTo(clonedModel.GetPivot());
        outlineModel.PivotTo(pivot.add(camera.CFrame.LookVector.mul(0.1)))
        // outlineModel.Parent = worldModel;

        for (const part of outlineModel.GetDescendants()) {
            if (part.IsA("BasePart")) {
                // part.Color = Color3.fromRGB(255, 255, 255); // White outline
                part.Color = Color3.fromRGB(0, 0, 0); // White outline
                part.Material = Enum.Material.Neon;
                part.Transparency = 0;
                part.CanCollide = false;
                part.CastShadow = false;

                // Slightly increase the size to peek out from behind
                part.Size = part.Size.add(new Vector3(0.15, 0.15, 0.15));
            }
        }

        camera.Parent = viewport;
        viewport.CurrentCamera = camera;

        // 1. Create a light source
        const light = new Instance("PointLight");
        light.Brightness = 2;
        light.Range = 20;
        // Position it slightly above and to the side of the camera for nice shadows
        light.Parent = camera;

        // 2. Alternatively, use a directional "Sun" effect
        viewport.LightDirection = new Vector3(1, -1, 1); // Top-down diagonal light
        viewport.LightColor = Color3.fromRGB(255, 255, 255);
        viewport.Ambient = Color3.fromRGB(255, 255, 255); // General "fill" light

        warn('drawm', model.Name, 'rot', rot, 'size', size)
        return () => {
            clonedModel.Destroy();
            worldModel.Destroy();
            camera.Destroy();
        };
    }, [model, rot, size]);

    const resize = (bigger: boolean) => {
        setSize(math.max(bigger ? size + 1 : size - 1, 1))
    }

    const rotate = (bigger: boolean) => {
        setRot(bigger ? rot + 45 : rot - 45)
    }

    return (
        <LBox RandomBG Vert Trans Size={new UDim2(1, 0, 1, 0)} Center>
            <LText Text={name} Size={new UDim2(1, 0, 0.1, 0)} Color={col('blue_mid')} StrokeThickness={2} />
            <viewportframe
                ref={viewportRef}
                Size={new UDim2(1, 0, 1, 0)}
                BackgroundTransparency={1}
            />
            <LBox Size={new UDim2(1, 0, 0.2, 0)} Trans Padding={new UDim(0.05, 0)} >
                <LHover Size={new UDim2(0.2, 0, 1, 0)} Aspect={1} onClick={() => resize(false)}  >
                    <LText Text="IN" Size={new UDim2(1, 0, 1, 0)} Color={col('blue_mid')} StrokeThickness={2} />
                </LHover>
                <LHover Size={new UDim2(0.2, 0, 1, 0)} Aspect={1} onClick={() => resize(true)}  >
                    <LText Text="OUT" Size={new UDim2(1, 0, 1, 0)} Color={col('blue_mid')} StrokeThickness={2} />
                </LHover>
                <LHover Size={new UDim2(0.2, 0, 1, 0)} Aspect={1} onClick={() => rotate(false)}  >
                    <LText Text="ROT+" Size={new UDim2(1, 0, 1, 0)} Color={col('blue_mid')} StrokeThickness={2} />
                </LHover>
                <LHover Size={new UDim2(0.2, 0, 1, 0)} Aspect={1} onClick={() => rotate(true)}  >
                    <LText Text="ROT-" Size={new UDim2(1, 0, 1, 0)} Color={col('blue_mid')} StrokeThickness={2} />
                </LHover>
            </LBox>
        </LBox>
    );
};

