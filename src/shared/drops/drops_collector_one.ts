import { RunService } from "@rbxts/services"
import { getHRP } from "shared/help/assist"
import { Remotes } from "shared/signals/remotes"
import { TDropBody } from "./DropOne"

export class DropCollectorOne {
    body: TDropBody
    alignPos: AlignPosition
    connection: RBXScriptConnection

    constructor(body: BasePart) {
        this.body = body as TDropBody
        this.alignPos = this.body.AlignPosition
        this.alignPos.Enabled = true
        Remotes.Client.Get('SetNetOwner').SendToServer(body)

        let i = 0
        this.connection = RunService.Heartbeat.Connect(() => {
            if (i % 5 === 0) {
                this.updateDrop()
            }
        })
    }

    configureDrop() {
        const attachment = new Instance("Attachment");
        attachment.Parent = this.body;

        const alignPos = new Instance("AlignPosition");
        alignPos.Mode = Enum.PositionAlignmentMode.OneAttachment;
        alignPos.Attachment0 = attachment;
        alignPos.MaxVelocity = 50;
        alignPos.MaxForce = math.huge;
        alignPos.Responsiveness = 200;
        alignPos.Position = this.body.Position;
        alignPos.Parent = this.body;
        return alignPos;
    }

    updateDrop() {
        const hrpPos = getHRP().Position
        this.alignPos.Position = hrpPos
        if (this.body.Position.sub(hrpPos).Magnitude < 1) {
            this.connection.Disconnect()
            this.body.Transparency = 1
            this.body.FindFirstChild('BillboardGui')?.Destroy()
            Remotes.Client.Get('CollectDrop').SendToServer(this.body)
        }
    }

}