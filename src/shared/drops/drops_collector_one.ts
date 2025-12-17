import { RunService } from "@rbxts/services"
import { getHRP } from "shared/help/assist"
import { Remotes } from "shared/signals/remotes"

export class DropCollectorOne {
    body: BasePart
    bodyPosition: AlignPosition
    connection: RBXScriptConnection

    constructor(body: BasePart) {
        this.body = body
        this.bodyPosition = this.configureDrop()
        Remotes.Client.Get('SetNetOwner').SendToServer(body)

        let i = 0
        this.connection = RunService.RenderStepped.Connect(() => {
            if (i % 5 === 0) {
                this.updateDrop()
            }
        })
    }

    configureDrop() {
        // const bodyPosition = new Instance("BodyPosition")
        // bodyPosition.P = bodyPosition.P * 2
        // bodyPosition.Position = this.body.Position
        // bodyPosition.MaxForce = new Vector3(math.huge, math.huge, math.huge)
        // bodyPosition.Parent = this.body
        // bodyPosition.SetAttribute("P", bodyPosition.P)
        // return bodyPosition
        const attachment = new Instance("Attachment");
        attachment.Parent = this.body;

        const alignPos = new Instance("AlignPosition");
        alignPos.Mode = Enum.PositionAlignmentMode.OneAttachment;
        alignPos.Attachment0 = attachment;

        // This is the magic part:
        alignPos.MaxVelocity = 50; // Set a constant speed (studs/sec)
        alignPos.MaxForce = math.huge;
        alignPos.Responsiveness = 200; // Higher = Snappier

        alignPos.Position = this.body.Position;
        alignPos.Parent = this.body;

        return alignPos;
    }

    updateDrop() {
        const hrpPos = getHRP().Position
        this.bodyPosition.Position = hrpPos
        if (this.body.Position.sub(hrpPos).Magnitude < 1) {
            this.connection.Disconnect()
            this.body.Transparency = 1
            this.body.FindFirstChild('BillboardGui')?.Destroy()
            print('pass collected', this.body.GetAttribute('kind'))
        } else {
            print('moving', this.body.GetAttribute('kind'))
        }
    }

}