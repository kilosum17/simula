import { RunService, Workspace } from "@rbxts/services"
import { col, getHRP } from "shared/help/assist"
import { getCameraWorldBounds, getEggModel, getEggState } from "./egg_utils"
import { createEggPopTween } from "shared/signals/animations"

const gridMaps = {
    1: [[0.5, 0.5]],
    2: [[0.25, 0.5], [0.75, 0.5]],
    3: [[0.25, 0.25], [0.75, 0.25], [0.5, 0.75]],
    4: [[0.25, 0.25], [0.75, 0.25], [0.25, 0.75], [0.75, 0.75]],
}

export class EggCracker {
    camera: Camera

    constructor() {
        this.camera = Workspace.Camera

    }

    connection?: RBXScriptConnection
    eggs?: BasePart[]
    startCracking(eggNo: number, count: keyof typeof gridMaps) {
        this.destroy()
        const { modelName } = getEggState(eggNo)
        const eggPart = getEggModel(modelName)
        const points = gridMaps[count]
        const eggs = points.map(p => {
            const part = eggPart.Clone()
            // const part = new Instance('Part')
            // part.Shape = Enum.PartType.Ball
            // part.Size = new Vector3(1, 1, 1)
            part.Parent = game.Workspace
            part.CanCollide = false
            part.Anchored = true
            const { size } = getCameraWorldBounds(5)
            const maxCord = math.min(size.X, size.Y)
            const cols = math.ceil(math.sqrt(count))
            const targetSize = new Vector3(maxCord, maxCord, maxCord).div(cols).mul(0.8)
            const popAnim = createEggPopTween(part, targetSize, new Vector3(0, 0, 0))
            popAnim.Play()
            return part
        })
        this.eggs = eggs

        const SPIN_SPEED = math.rad(45)
        let currentRotation = 0
        this.connection = RunService.RenderStepped.Connect((dt) => {
            for (let i = 0; i < points.size(); i++) {
                const camera = Workspace.CurrentCamera!;
                const [point, egg] = [points[i], eggs[i]]
                let { center, size } = getCameraWorldBounds(5)

                const hX = (size.X * 0.95) / 2;
                const hY = (size.Y * 0.95) / 2;

                const camCF = camera.CFrame;
                const topLeft = new CFrame(center)
                    .add(camCF.RightVector.mul(-hX))
                    .add(camCF.UpVector.mul(hY)).Position;
                const bottomRight = new CFrame(center)
                    .add(camCF.RightVector.mul(hX))
                    .add(camCF.UpVector.mul(-hY)).Position;

                const pos = getRelativeCenter(topLeft, bottomRight, new Vector2(point[0], point[1]))
                currentRotation += SPIN_SPEED * dt;
                egg.CFrame = new CFrame(pos).mul(CFrame.Angles(0, currentRotation, 0));
            }
        })
    }

    destroy() {
        this.connection?.Disconnect()
        this.eggs?.forEach(egg => egg.Destroy())
    }

}

export function getRelativeCenter(
    topLeft: Vector3,
    bottomRight: Vector3,
    scale: Vector2
): Vector3 {
    const camera = Workspace.CurrentCamera!;
    const camCF = camera.CFrame;

    // 1. Calculate the total width and height in world units
    // We use the dot product to find the distance along the camera's local axes
    const fullWidth = bottomRight.sub(topLeft).Dot(camCF.RightVector);
    const fullHeight = bottomRight.sub(topLeft).Dot(camCF.UpVector);

    // 2. Calculate the offset from Top-Left
    // Scale X moves along the RightVector
    const xOffset = camCF.RightVector.mul(fullWidth * scale.X);

    // Scale Y moves along the UpVector (multiplied by scale.Y)
    // Since scale.Y = 1 is "bottom", we move in the direction of fullHeight
    const yOffset = camCF.UpVector.mul(fullHeight * scale.Y);

    // 3. Combine
    return topLeft.add(xOffset).add(yOffset);
}

