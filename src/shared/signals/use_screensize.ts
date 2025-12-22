import { useEventListener } from "@rbxts/pretty-react-hooks";
import Roact, { useEffect, useState } from "@rbxts/react";
import { Workspace } from "@rbxts/services";

export function useSceenSize() {
    const camera = Workspace.CurrentCamera;
    const [size, setSize] = useState(camera!.ViewportSize)

    useEventListener(camera!.GetPropertyChangedSignal("ViewportSize"), () => {
        setSize(camera!.ViewportSize);
    })

    return { size, width: size.X, height: size.Y }
}



export function useFrameSize(ref: React.RefObject<Frame>) {
    const [size, setSize] = useState(new Vector2(0, 0));

    useEffect(() => {
        const frame = ref.current;
        if (!frame) return;

        // 1. Set the initial size
        setSize(frame.AbsoluteSize);

        // 2. Listen for size changes (AbsoluteSize)
        const connection = frame.GetPropertyChangedSignal("AbsoluteSize").Connect(() => {
            setSize(frame.AbsoluteSize);
        });

        return () => connection.Disconnect();
    }, [ref]); // Re-run if the ref changes

    return { size, width: size.X, height: size.Y };
}