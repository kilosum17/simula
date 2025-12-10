import { RunService, Workspace } from "@rbxts/services"
import { col, getHRP, getHumanoid, getPlayer } from "shared/help/assist"

const SHOW_PET_POS_PARTS = false

export class PetPositions {
    player: Player
    pos: Vector3[]

    constructor() {
        this.player = getPlayer()
        this.pos = []
        this._setPositions()

        RunService.RenderStepped.Connect(() => {
            this._setPositions()
        })
    }

    private _getAngles(start: number, stop: number, inc: number) {
        const angles = []
        for (let i = start; i <= stop; i += inc) {
            angles.push(i)
        }
        return angles.sort((a, b) => {
            return math.abs(a - 0) < math.abs(b - 0)
        })
    }
    private angles = [
        [],
        [20, -20, 60, -60],
        this._getAngles(-80, 80, 20),
        this._getAngles(-90, 90, 13),
        this._getAngles(-90, 90, 9),
        this._getAngles(-90, 90, 7),
    ]

    _parts = [] as BasePart[]
    private _showParts() {
        if (!SHOW_PET_POS_PARTS) return
        for (let i = 0; i < this.pos.size(); i++) {
            let part = this._parts[i]
            if (!part) {
                part = new Instance("Part")
                part.Size = part.Size.mul(0.1)
                part.Parent = Workspace.Targets.Ignore
                part.Name = "Pet Position"
                part.CanCollide = false
                part.Color = col("blue")
                part.Anchored = true
                this._parts[i] = part
            }
            part.Position = this.pos[i]
        }
    }

    last_pos = Vector3.zero
    private _setPositions() {
        const pos = getHRP(this.player).Position
        if (this.last_pos.sub(pos).Magnitude < 0.2) {
            return
        }
        this.last_pos = pos
        const { X: hrpX, Y: hrpY, Z: hrpZ } = pos
        this.pos = []
        // const height = getHumanoid().HipHeight - 0
        const height = getHumanoid(this.player).HipHeight
        const [, yRotRad,] = getHRP(this.player).CFrame.ToEulerAnglesYXZ()
        const yRotDeg = math.deg(yRotRad)
        // print('rotate', math.round(yRotDeg))
        const R = 8
        for (let row = 1; row <= 5; row++) {
            for (let i = 0; i < this.angles[row].size(); i++) {
                // const angle = this.angles[i] + 90 + yRotDeg
                const radius = R * row
                const angle = this.angles[row][i] - yRotDeg + 90
                const x = hrpX + radius * math.cos(math.rad(angle))
                const z = hrpZ + radius * math.sin(math.rad(angle))
                const y = hrpY - height
                // placeTestPart(x, y, z)
                this.pos.push(new Vector3(x, y, z))
            }
        }
        this._showParts()
    }
    update() {
        this._setPositions()
    }
}
