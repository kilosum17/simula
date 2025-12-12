import * as React from "@rbxts/react";

export function ModelViewport({ model, Size, Pos }: {
    model: Model, Size?: UDim2, Pos?: UDim2,
}) {
    const cameraRef = React.useRef<Camera | undefined>(undefined);
    const [clonedModel] = React.useState(() => model.Clone());

    React.useLayoutEffect(() => {
        if (!cameraRef.current) return;

        const camera = cameraRef.current;
        const rootPart = clonedModel.PrimaryPart || clonedModel.FindFirstChildOfClass("BasePart");

        if (rootPart) {
            const modelCenter = rootPart.Position;
            const distance = 10; // Adjust this distance as needed

            camera.CFrame = new CFrame(modelCenter.add(new Vector3(distance, distance, distance)), modelCenter);

            clonedModel.Parent = camera.Parent as ViewportFrame;
        }

        return () => {
            clonedModel.Destroy();
            camera.Destroy();
        };
    }, [clonedModel]);


    return (
        <viewportframe Size={Size} Position={Pos}
            ref={(frame) => {
                if (!frame) return;
                if (!cameraRef.current) {
                    const newCamera = new Instance("Camera");
                    newCamera.Parent = frame;
                    cameraRef.current = newCamera;
                }
                frame.CurrentCamera = cameraRef.current;
            }}
            BackgroundColor3={Color3.fromRGB(50, 50, 50)}
        >
            {/* {cameraRef.current && <instance instance={cameraRef.current} />} */}
        </viewportframe>
    );
}