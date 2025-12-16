import { ReplicatedStorage } from "@rbxts/services"
import { col } from "shared/help/assist"

export type TDropType = "bone" | 'crate' | 'dino' | 'fossil'

const FOS_MODs = {
    'bone': 2,
    'dino': 6,
    'crate': 2.5,
    'fossil': 6,
} as { [key: string]: number }

const CRATE_CONFIG = [
    [0, 4, 'sand'],
    [5, 9, 'volcano'],
    [10, 14, 'mushroom'],
    [15, 19, 'blue'],
    [20, 24, 'ice'],
    [25, 29, 'pink'],
    [30, 34, 'mushroom'],
    [35, 39, 'volcano'],
    [40, 44, 'pink'],
    [45, 49, 'red'],
    [50, 54, 'mushroom'],
    [55, 59, 'orange'],
    [60, 64, 'blue'],
    [65, 69, 'sand'],
    [70, 74, 'mushroom'],
    [75, 79, 'volcano2'],
    [80, 84, 'volcano'],
    [85, 89, 'orange'],
    [90, 94, 'blue'],
    [95, 120, 'ice'],
] as [number, number, string][]

const crates = {} as { [key: string]: Folder }
const getDropsFolder = (dropType: TDropType, stage: number): Folder => {
    const cubes = ReplicatedStorage.WaitForChild('public').WaitForChild('cubes') as Folder
    if (dropType !== 'crate') {
        const folder = ReplicatedStorage.WaitForChild('public').WaitForChild('plots').WaitForChild(dropType) as Folder
        const types = folder.GetChildren() as BasePart[]
        return folder
    } else {
        const conf = CRATE_CONFIG.find(c => c[0] <= stage && stage <= c[1])!
        const cubeName = conf[2]
        if (!crates[cubeName]) {
            const fold = new Instance('Folder')
            for (let i = 1; i <= 4; i++) {
                const cube = cubes.WaitForChild(cubeName).Clone() as BasePart
                const y = (cube.Size.Y * 1) * i / 4
                cube.Size = new Vector3(cube.Size.X, y, cube.Size.Z)
                cube.Parent = fold
                cube.Name = 'crate' + i
                cube.AddTag('crate')
            }
            crates[cubeName] = fold
        }
        const fold = crates[cubeName]
        return fold
    }
}

export const getFossilBody = ({ dropType, stage }: {
    dropType: TDropType, stage: number
}) => {
    const folder = getDropsFolder(dropType, stage).Clone()
    const mult = FOS_MODs[dropType] || 1
    const drops = folder.GetChildren() as BasePart[]
    if (drops.size() !== 4) {
        warn("Drops not 4", dropType, stage)
    }

    const root = new Instance('Part')
    root.Size = new Vector3(0.5, 0.5, 0.5)
    root.Color = col('random')
    root.CanCollide = false
    root.Anchored = true
    root.SetAttribute("count", drops.size())
    root.PivotOffset = new CFrame(new Vector3(0, -root.Size.Y / 2, 0))
    root.PivotTo(new CFrame())

    let maxSize = new Vector3()
    for (const drop of drops) {
        drop.Size = drop.Size.mul(mult)
        drop.PivotOffset = new CFrame(new Vector3(0, -drop.Size.Y / 2, 0))
        drop.CanCollide = false;
        drop.Anchored = false;
        drop.Massless = true
        drop.Parent = root
        const dropNo = (drops.size() + 1) - (tonumber(drop.Name.split(dropType)[1]) || 1)
        drop.SetAttribute("no", dropNo)
        drop.AddTag(tostring(dropNo))
        drop.AddTag('drop')
        // drop.Transparency = 1
        maxSize = new Vector3(
            math.max(maxSize.X, drop.Size.X),
            math.max(maxSize.Y, drop.Size.Y),
            math.max(maxSize.Z, drop.Size.Z)
        );
    }
    root.Size = maxSize
    root.PivotOffset = new CFrame(new Vector3(0, -root.Size.Y / 2, 0))
    root.PivotTo(new CFrame())
    for (const drop of drops) {
        drop.PivotTo(root.GetPivot())
        const weld = new Instance("WeldConstraint");
        weld.Part0 = root;
        weld.Part1 = drop;
        weld.Parent = root;
    }
    // root.Transparency = 0.6
    root.Transparency = 1
    return root
}
