import { useEventListener } from "@rbxts/pretty-react-hooks";
import Roact, { useEffect, useState } from "@rbxts/react";
import { Workspace } from "@rbxts/services";

export function useSceenSize() {
    const camera = Workspace.CurrentCamera;
    const [size, setSize] = useState(camera!.ViewportSize)

    useEventListener(camera!.GetPropertyChangedSignal("ViewportSize"), () => {
        setSize(camera!.ViewportSize);
    })

    return { size }
}