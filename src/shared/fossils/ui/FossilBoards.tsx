import { getAtt, getFossilsFolder } from "shared/help/assist"
import { enteredAreaSig, enteredMineSig } from "shared/signals/server_signals"
import { mountBillboardGui } from "shared/ui/create_root"
import { FossilBoardOne } from "./FossilBoardOne"
import React from "@rbxts/react"

export class FossilBoards {

    enteredStages = [] as number[]

    constructor() {

        enteredMineSig.Connect((_, areaNo) => {
            print("Enter", areaNo)
            if (this.enteredStages.includes(areaNo)) {
                return
            }
            const fold = getFossilsFolder(areaNo)
            fold.ChildAdded.Connect(() => this.mountFossilsBoards(areaNo))
            this.mountFossilsBoards(areaNo)
        })
        this.mountFossilsBoards(1)
    }

    mountFossilsBoards(stageNo: number) {
        const fold = getFossilsFolder(stageNo)
        for (const fos of fold.GetChildren() as BasePart[]) {
            if (getAtt(fos, 'hasBoard', false)) continue
            fos.SetAttribute('hasBoard', true)
            mountBillboardGui({
                part: fos,
                size: new UDim2(10, 0, 0.65, 0),
                extendsOffset: new Vector3(0, 0.5, 0),
                alwaysOnTop: true,
                maxDistance: 800,
                comp: <FossilBoardOne fos={fos} />
            })
            print("added fossil board to", fos)
        }
    }
}

