import { getAtt, getFossilsFolder } from "shared/help/assist"
import { enteredAreaSig, enteredMineSig } from "shared/signals/server_signals"
import { mountBillboardGui } from "shared/ui/create_root"
import { FossilBoardOne } from "./FossilBoardOne"
import React from "@rbxts/react"

export class FossilBoards {

    constructor() {

        enteredMineSig.Connect((_, areaNo) => {
            print("Enter", areaNo)
            this.mountFossilsBoards(areaNo)
        })

        this.mountFossilsBoards(1)
    }

    mountFossilsBoards(stageNo: number) {
        let stop = true
        const fold = getFossilsFolder(stageNo)
        // if (stop) return
        // fold.ChildAdded.Connect(() => this.mountFossilsBoards(stageNo))
        for (const fos of fold.GetChildren() as BasePart[]) {
            if (getAtt(fos, 'hasBoard', false)) continue
            fos.SetAttribute('hasBoard', true)
            mountBillboardGui({
                part: fos,
                size: new UDim2(10, 0, 0.65, 0),
                extendsOffset: new Vector3(0, 0.5, 0),
                alwaysOnTop: true,
                maxDistance: 500,
                comp: <FossilBoardOne fos={fos} />
            })
        }
    }
}

