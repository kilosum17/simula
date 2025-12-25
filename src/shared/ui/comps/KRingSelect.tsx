import React, { useEffect, useRef, useState } from "@rbxts/react";
import { UserInputService } from "@rbxts/services";
import { icon } from "shared/help/icons";
import { formatNumber } from "shared/help/helpers";
import { LText } from "./Wrappers";
import { col } from "shared/help/assist";

export const KRingSelect = ({ size, pos, val, setVal, children, max }: {
    size?: UDim2, pos?: UDim2, max: number,
    val: number, setVal: (val: number) => void,
    children: React.ReactNode,
}) => {
    const [ratio, setRatio] = useState(math.clamp(val, 0, 1));
    const [open, setOpen] = useState(false)
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
                setOpen(true)
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
                    setOpen(false)
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

    const getRots = (ratio: number) => {
        const angle = (1 - ratio) * 360
        const rots = [] as number[]
        for (let i = 0; i < angle; i += 3) {
            rots.push(i)
        }
        return rots
    }

    const r = math.clamp(ratio, 0, 1)
    const rots = getRots(r)
    const text = formatNumber(max * (1 - r))

    return (
        <imagelabel ref={containerRef} Size={size} BackgroundTransparency={1} Position={pos} >
            {children as React.JSX.Element}
            <LText key="val" Text={text} Size={new UDim2(0.9, 0, 0.4, 0)} Pos={new UDim2(0.5, 0, 0.5, 0)}
                AnchorPoint={new Vector2(0.5, 0.5)} Color={col("blue_mid")} StrokeThickness={2}
                ZIndex={10} Visible={r < 1} />
            {open && rots.map(rot => {
                return <imagelabel key={rot} BackgroundTransparency={1} Position={new UDim2(0.5, 0, 0.5, 0)}
                    Size={new UDim2(1.2, 0, 1.2, 0)} AnchorPoint={new Vector2(0.5, 0.5)}
                    Image={icon('ring_selct')} Rotation={rot} ZIndex={10} />
            })}
        </imagelabel>
    );
};
