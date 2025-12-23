import { getFossilsFolder } from "shared/help/assist"
import { enteredAreaSig } from "shared/signals/server_signals"
import { mountBillboardGui } from "shared/ui/create_root"
import { FossilBoardOne } from "./FossilBoardOne"
import React from "@rbxts/react"
import ReactRoblox from "@rbxts/react-roblox"
import { getFossilAtts } from "shared/signals/fossil_attributes"

export class FossilBoards {
    billboards = [] as ReactRoblox.Root[]
    prevAreaNo = -2
    fosAddedConnection?: RBXScriptConnection

    constructor() {

        enteredAreaSig.Connect((_, areaNo) => {
            if (areaNo < 0) return
            this.fosAddedConnection?.Disconnect()
            this.billboards.forEach(root => {
                root.unmount()
            })
            this.connections.forEach(conn => {
                conn.Disconnect()
            })
            print("Enter", areaNo, this.prevAreaNo)
            this.prevAreaNo = areaNo
            const fold = getFossilsFolder(areaNo)
            this.fosAddedConnection = fold.ChildAdded.Connect((fos) => {
                this.mountFossilBoard(fos as BasePart)
            })
            fold.GetChildren().forEach(fos => {
                this.mountFossilBoard(fos as BasePart)
            })
        })
    }

    connections = [] as RBXScriptConnection[]
    mountFossilBoard(fos: BasePart) {
        if (!fos.IsA('BasePart') || !fos.HasTag('fossil') || fos.HasTag('HasUI')) return
        if (!getFossilAtts(fos).accessed) {
            const conn = fos.AttributeChanged.Connect((name) => {
                if (name !== 'accessed') return
                this.mountFossilBoard(fos)
            })
            this.connections.push(conn)
            return
        }
        fos.AddTag('HasUI')
        const root = mountBillboardGui({
            part: fos,
            size: new UDim2(10, 0, 0.65, 0),
            extendsOffset: new Vector3(0, 0.5, 0),
            alwaysOnTop: true,
            maxDistance: 800,
            comp: <FossilBoardOne fos={fos} />
        })
        this.billboards.push(root)
        // print("Added fossil board to", fos)
    }
}

