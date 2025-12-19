import { createRoot } from "@rbxts/react-roblox";
import { getStageBoardPart } from "shared/help/assist";
import { StageBoardOne } from "./StageBoardOne";
import React from "@rbxts/react";
import { mountSurfaceGui } from "shared/ui/create_root";
import { enteredAreaSig } from "shared/signals/server_signals";

export class StageBoards {
    mountedStages = [] as number[]

    constructor() {


        enteredAreaSig.Connect((_, areaNo) => {
            print("Enter", areaNo)
            for (let i = 0; i < 3; i++) {
                this.mountStageBoard((areaNo + 2) + i)
            }
        })

    }

    mountStageBoard(stageNo: number) {
        if (stageNo === 1) return
        if (this.mountedStages.includes(stageNo)) return
        this.mountedStages.push(stageNo)

        const board = getStageBoardPart(stageNo)
        const face = stageNo > 35 ? Enum.NormalId.Right : Enum.NormalId.Left
        return mountSurfaceGui({
            name: 'Board', part: board,
            comp: <StageBoardOne stageNo={stageNo} />,
            face,
        })
    }

}