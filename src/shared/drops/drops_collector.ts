import { RunService } from "@rbxts/services";
import { getDropsFolder, getHRP } from "shared/help/assist";
import { getPlayerAtts } from "shared/signals/player_attributes";
import { DropCollectorOne } from "./drops_collector_one";
import { Remotes } from "shared/signals/remotes";

export class DropCollector {
    constructor() {

        let i = 0
        RunService.RenderStepped.Connect(() => {
            i++
            if (i % 12 === 0) {
                this.collectDrops()
            }
        })
    }

    collectDrops() {
        const hrpPos = getHRP().Position
        const stageNo = getPlayerAtts().inStageNo
        const dropsFold = getDropsFolder(stageNo)
        const drops = dropsFold.GetChildren() as BasePart[]
        let no = 0
        for (const drop of drops) {
            if (drop.Position.sub(hrpPos).Magnitude < 30) {
                if (!drop.HasTag('collected')) {
                    drop.AddTag('collected')
                    Remotes.Client.Get('SetAttribute').SendToServer(drop, 'collected', true)
                    new DropCollectorOne(drop)
                    no++
                }
            }
        }
        print('collect drops in ', stageNo, dropsFold.GetChildren().size(), 'near', no)
    }

}


