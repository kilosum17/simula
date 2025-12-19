import { col, ensureInstance } from "shared/help/assist";
import { EggOne } from "./egg_one";

const EGGS_PER_ROW = 8

const Shelf = ensureInstance({ path: "Game.Shelf", create: false }) as Model
const step1 = Shelf.WaitForChild("step1") as BasePart
const step2 = Shelf.WaitForChild("step2") as BasePart
const step3 = Shelf.WaitForChild("step3") as BasePart
const step4 = Shelf.WaitForChild("step4") as BasePart

export class EggServiceClient {
    eggs = [] as EggOne[]

    constructor() {
        this.addEggsToShelf()
    }

    addEggsToShelf() {
        const steps = [step1, step2, step3, step4]
        for (let i = 0; i < steps.size(); i++) {
            const step = steps[i]
            const size = new Vector3(step.Size.X / EGGS_PER_ROW, step.Size.Y, step.Size.Z)
            const startPos = step.Position.add(new Vector3(step.Size.X / 2, step.Size.Y / 2, 0))
            for (let i = 0; i < EGGS_PER_ROW; i++) {
                const x1 = startPos.X - math.abs(size.X * (i + 0))
                const x2 = startPos.X - math.abs(size.X * (i + 1))
                const pos = new Vector3((x1 + x2) / 2, startPos.Y, startPos.Z + step.Size.Z / 4)
                const part = new Instance('Part')
                part.Shape = Enum.PartType.Ball
                part.Size = new Vector3(1, 1, 1)
                part.Position = pos
                part.CanCollide = false
                part.Anchored = true
                part.Color = col('random')
                part.Parent = Shelf
                const egg = new EggOne(pos, step.Position.add(step.CFrame.LookVector.mul(10000)))
                this.eggs.push(egg)
            }
        }
    }

}