import { enteredAreaSig } from "shared/signals/server_signals";
import { Stage } from "./Stage";

const STAGE_COUNT = 90

export class FossilService {
    stages = [] as Stage[]

    constructor() {
        for (let i = 0; i < STAGE_COUNT; i++) {
            this.stages.push(new Stage(i))
        }

        this.playerEntered(0)

        enteredAreaSig.Connect(stageNo => {
            this.playerEntered(stageNo)
        })
    }

    playerEntered(stageNo: number) {
        if (stageNo < 0 || stageNo >= this.stages.size()) return
        this.stages[stageNo].entered()
    }

}