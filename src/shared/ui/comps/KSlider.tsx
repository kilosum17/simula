import React, { useEffect, useRef, useState } from "@rbxts/react";
import { UserInputService } from "@rbxts/services";
import { KButton } from "./KButton";
import { getImgKind } from "./comp_utils";

export const KSlider = ({ size, pos, val, setVal }: {
    size?: UDim2, pos?: UDim2,
    val: number, setVal: (val: number) => void,
}) => {
    const [ratio, setRatio] = useState(math.clamp(val, 0, 1));
    const containerRef = useRef<ImageLabel>();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let isDragging = false;
        let curRatio = ratio

        const updateRatio = (input: InputObject) => {
            const absPos = container.AbsolutePosition;
            const absSize = container.AbsoluteSize;
            curRatio = math.clamp((input.Position.X - absPos.X) / absSize.X, 0, 1);
            setRatio(curRatio);
        };

        const isInsideContainer = (input: InputObject) => {
            const container = containerRef.current;
            if (!container) return false;
            const mousePos = input.Position;
            const topLeft = container.AbsolutePosition;
            const bottomRight = topLeft.add(container.AbsoluteSize);
            return (
                mousePos.X >= topLeft.X &&
                mousePos.X <= bottomRight.X &&
                mousePos.Y >= topLeft.Y &&
                mousePos.Y <= bottomRight.Y
            );
        }

        const inputBegan3 = UserInputService.InputBegan.Connect((input) => {
            if (!isInsideContainer(input)) return
            const isMouse = input.UserInputType === Enum.UserInputType.MouseButton1;
            const isTouch = input.UserInputType === Enum.UserInputType.Touch;
            if (isMouse || isTouch) {
                isDragging = true;
                updateRatio(input);
                print('input began')
            }
        })

        const inputChanged = UserInputService.InputChanged.Connect((input) => {
            const isMove = input.UserInputType === Enum.UserInputType.MouseMovement;
            const isTouch = input.UserInputType === Enum.UserInputType.Touch;
            if (isDragging && (isMove || isTouch)) {
                updateRatio(input);
                print('input changed')
            }
        });

        const inputEnded = UserInputService.InputEnded.Connect((input) => {
            const isMouse = input.UserInputType === Enum.UserInputType.MouseButton1;
            const isTouch = input.UserInputType === Enum.UserInputType.Touch;
            if (isMouse || isTouch) {
                if (isDragging) {
                    isDragging = false;
                    setVal(curRatio);
                    print('input end changed')
                }
            }
        });

        return () => {
            inputBegan3.Disconnect();
            inputChanged.Disconnect();
            inputEnded.Disconnect();
        };
    }, [setVal]);

    return (
        <imagelabel ref={containerRef} Size={size} BackgroundTransparency={1}
            Position={pos} Image={getImgKind('gray')} >
            <imagelabel Size={new UDim2(1, 0, 1.5, 0)} BackgroundTransparency={1}
                Position={new UDim2(ratio, 0, 0.5, 0)}
                AnchorPoint={new Vector2(0.5, 0.5)} Image=""
            >
                <KButton color={'green'} Size={new UDim2(1, 0, 1, 0)}>
                </KButton>
                <uiaspectratioconstraint AspectRatio={1} />
            </imagelabel>
        </imagelabel>
    );
};
