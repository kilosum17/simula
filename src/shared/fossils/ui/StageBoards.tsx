import { createRoot } from "@rbxts/react-roblox";
import { getStageBoardPart } from "shared/help/assist";
import { StageBoardOne } from "./StageBoardOne";
import React from "@rbxts/react";

export class StageBoards {

    constructor() {

        this.mountStageBoard(1)
    }

    mountStageBoard(stageNo: number) {
        const board = getStageBoardPart(stageNo)
        const surfaceGui = new Instance("SurfaceGui");
        surfaceGui.Parent = board;
        surfaceGui.MaxDistance = 800
        surfaceGui.Face = stageNo > 35 ? Enum.NormalId.Right : Enum.NormalId.Left
        const root = createRoot(surfaceGui);
        root.render(<StageBoardOne stageNo={stageNo} />);
        return () => root.unmount();
    }
}