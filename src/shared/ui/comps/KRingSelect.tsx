import React, { useEffect, useRef, useState } from "@rbxts/react";
import { UserInputService } from "@rbxts/services";
import { icon } from "shared/help/icons";
import { formatNumber } from "shared/help/helpers";
import { LText } from "./Wrappers";
import { col } from "shared/help/assist";

export const KRingSelect = ({ size, pos, val, setVal, children, max, Aspect, MinSize }: {
    size?: UDim2, pos?: UDim2, max: number, Aspect: number,
    val: number, setVal: (val: number) => void,
    children: React.ReactNode, MinSize?: Vector2
}) => {
    const [ratio, setRatio] = useState(math.clamp(val, 0, 1));
    const [open, setOpen] = useState(false)
    const containerRef = useRef<ImageLabel>();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let isDragging = false;
        let curRatio = 0

        const updateCircularRatio = (input: InputObject) => {
            const absPos = container.AbsolutePosition;
            const absSize = container.AbsoluteSize;

            const center = absPos.add(absSize.mul(0.5));
            const mousePos = new Vector2(input.Position.X, input.Position.Y);
            const delta = mousePos.sub(center);

            // 3. Calculate angle (in radians)
            // math.atan2(y, x) 
            // We negate Y because UI coordinates increase downwards
            let angle = math.atan2(-delta.Y, delta.X);

            // 4. Convert -PI to PI range into 0 to 1 ratio
            // We add math.pi / 2 if we want 0 to start at the TOP
            let degrees = math.deg(angle);
            let normalized = ((-degrees + 90) % 360); // 0 at top, clockwise
            if (normalized < 0) normalized += 360;

            curRatio = normalized / 360;
            setRatio(curRatio);
            return curRatio;
        };

        const inputBegan = UserInputService.InputBegan.Connect((input) => {
            // Start dragging if clicking inside the ring area
            if (input.UserInputType === Enum.UserInputType.MouseButton1 || input.UserInputType === Enum.UserInputType.Touch) {
                const mousePos = new Vector2(input.Position.X, input.Position.Y);
                const dist = mousePos.sub(container.AbsolutePosition.add(container.AbsoluteSize.mul(0.5))).Magnitude;

                // Optional: Only start if clicking near the ring (radius check)
                if (dist < container.AbsoluteSize.X) {
                    isDragging = true;
                    setOpen(true);
                    updateCircularRatio(input);
                }
            }
        });

        const inputChanged = UserInputService.InputChanged.Connect((input) => {
            if (isDragging && (input.UserInputType === Enum.UserInputType.MouseMovement || input.UserInputType === Enum.UserInputType.Touch)) {
                updateCircularRatio(input);
            }
        });

        const inputEnded = UserInputService.InputEnded.Connect((input) => {
            if (input.UserInputType === Enum.UserInputType.MouseButton1 || input.UserInputType === Enum.UserInputType.Touch) {
                if (isDragging) {
                    isDragging = false;
                    setOpen(false);
                    setVal(curRatio);
                }
            }
        });

        return () => {
            inputBegan.Disconnect();
            inputChanged.Disconnect();
            inputEnded.Disconnect();
        };
    }, [setVal]);

    const getRots = (ratio: number) => {
        const angle = ratio * 360
        const rots = [] as number[]
        for (let i = 0; i < angle; i += 3) {
            rots.push(i)
        }
        return rots
    }

    const r = math.clamp(ratio, 0, 1)
    const rots = getRots(r)
    const text = formatNumber(max * r)

    return (
        <imagelabel ref={containerRef} Size={size} BackgroundTransparency={1} Position={pos} >
            {children as React.JSX.Element}
            <LText key="val" Text={text} Size={new UDim2(0.9, 0, 0.4, 0)} Pos={new UDim2(0.5, 0, 0.5, 0)}
                AnchorPoint={new Vector2(0.5, 0.5)} Color={col("blue_mid")} StrokeThickness={2}
                ZIndex={10} Visible={r > 0} />
            {open && rots.map(rot => {
                return <imagelabel key={rot} BackgroundTransparency={1} Position={new UDim2(0.5, 0, 0.5, 0)}
                    Size={new UDim2(1.2, 0, 1.2, 0)} AnchorPoint={new Vector2(0.5, 0.5)}
                    Image={icon('ring_selct')} Rotation={rot} ZIndex={10} />
            })}
            <uiaspectratioconstraint AspectRatio={Aspect} />
            <uisizeconstraint MinSize={MinSize} />
        </imagelabel>
    );
};
