import { ANIM_DATA } from "./DATA"
import { createMotion } from "@rbxts/ripple"
import { ensureInstance, getIgnoreFold } from "./assist"

export const getZoneBarrier = (stage: number) => {
    const barrier = ensureInstance({ path: "Game.Zones", create: false }).FindFirstChild(`${stage}`)
    if (barrier) {
        return barrier
    }
    return undefined
}

export const getModelIdByName = (name: string) => {
    const models = {
        SabertoothTiger: 1,
        SkeletonTiger: 2,
        Triceratops: 3,
    } as { [key: string]: number }
    return models[name] || -1
}

type TFVXNames = "bigBurst" | "littleBurst" | 'explosion'

export const fetchVFX = (name: TFVXNames): ParticleEmitter[] => {
    const folder = game.GetService("ReplicatedStorage").FindFirstChild("public")!.FindFirstChild("particles")!.WaitForChild(name) as Folder
    return folder.GetDescendants().map(p => p.Clone()) as ParticleEmitter[]
}

export const createExplosion = (pos: Vector3, hit?: (part: BasePart, dist: number) => void) => {
    task.spawn(() => {
        const exp = new Instance('Explosion')
        exp.DestroyJointRadiusPercent = 0
        exp.BlastRadius = 10
        exp.Parent = getIgnoreFold()
        exp.BlastPressure = 0
        exp.Position = pos
        if (hit) {
            exp.Hit.Connect(hit)
        }
        task.wait(5)
        exp.Destroy()
    })
}

export const playVFX = (name: TFVXNames, pos: Vector3, destroy = 5) => {
    // return
    task.spawn(() => {
        const emitters = fetchVFX(name)
        const part = new Instance('Part')
        part.Transparency = 1;
        part.CanCollide = false
        part.Position = pos;
        part.AddTag("vfx")
        part.Parent = getIgnoreFold()
        if (name === 'explosion') {
            part.Size = part.Size.mul(3)
        }
        for (const emit of emitters) {
            emit.Parent = part
            if (emit.IsA("ParticleEmitter")) {
                let count = emit.GetAttribute('EmitCount') as number || 1
                emit.Emit(count)
            }
        }
        task.spawn(() => {
            task.wait(destroy)
            part.Destroy()
        })
    })
}

export const getAnimationId = (variant: 'IDLE' | 'JUMP' | 'MINE', model_id: number) => {
    let animId = ''
    const petId = model_id
    const anim_data = {
        "IDLE": {
            1: ANIM_DATA.IDLE1,
            2: ANIM_DATA.IDLE2,
            3: ANIM_DATA.IDLE3,
        },
        "JUMP": {
            1: ANIM_DATA.JUMP1,
            2: ANIM_DATA.JUMP2,
            3: ANIM_DATA.JUMP3,
        },
        "MINE": {
            1: ANIM_DATA.MINING1,
            2: ANIM_DATA.MINING2,
            3: ANIM_DATA.MINING3,
        }
    } as { [key: string]: { [key: number]: string } }

    if (anim_data[variant] && anim_data[variant][petId]) {
        animId = anim_data[variant][petId]
    } else {
        // warn('No anim', variant, petId)
    }
    return animId
}


export const getRandomName = () => {
    const names = [
        "Fluffy", "Shadow", "Rex", "Bella", "Mittens", "Max", "Luna", "Buddy", "Ziggy", "Nala", "Thor", "Ginger", "Rocky", "Simba", "Daisy", "Oreo", "Milo", "Willow", "Leo", "Coco"
    ]
    return names[math.random(0, names.size() - 1)]
}

const denos = ['K', 'M', 'B', 'T', 'Q', 'S', 'C', 'N', 'D', 'Y', 'Z']
// const icons = ['💵', '💳', '🏦', '💰', '💎', '🏆', '🌍', '🚀', '🌌', '🛸', '🔱']
const icons = ['K', 'M', 'B', 'T', '💰', '🏦', '🏆', '🌍', '🚀', '🛸', '🔱']

const ranges = [] as [string, number, number, string][]
let top = 1000
denos.forEach((d, i) => {
    const start = top
    const finish = top * 1000
    top = finish
    ranges.push([d, start, finish, icons[i]])
})

export function formatNumber(num: number) {
    num = math.round(num)

    function toFixed(number: number, decimalPlaces: number) {
        const factor = 10 ^ decimalPlaces
        const roundedNumber = math.floor(number * factor + 0.0) / factor
        return string.format("%." + decimalPlaces + "f", roundedNumber)
    }

    function getDecs(base: number, len = 3) {
        const val = math.round(base) + ''
        if (val.size() >= len) {
            return 0
        }
        return len - val.size()
    }
    if (num < 1000) {
        return tostring(num)
    }
    for (const r of ranges) {
        if (num >= r[1] && num < r[2]) {
            const base = num / r[1]
            return toFixed(base, getDecs(base)) + r[0]
            // return toFixed(base, getDecs(base)) + r[3]
        }
    }
    return '--'
}

export const getNumberArray = (max: number) => {
    const data = [] as number[]
    for (let i = 0; i < max; i++) {
        data.push(i)
    }
    return data
}

const getHRP = () => {
    const player = game.GetService('Players').LocalPlayer
    const character = player.Character || player.CharacterAdded.Wait()[0]
    const hrp = character.WaitForChild('HumanoidRootPart') as MeshPart
    return hrp
}

export const dropVFXs = (ver: 'cel', size: 'large' | 'small') => {
    const RS = game.GetService('ReplicatedStorage')
    let part = new Instance('Part')
    if (ver === 'cel') {
        // part = RS.public.particles.WaitForChild('Celebration')!.WaitForChild('part')! as Part
        throw error("TODO, No celebration, uncomment above")
    }
    part.Transparency = 1
    part.CanCollide = false
    part.CanTouch = false;

    task.spawn(() => {
        const count = size === 'large' ? math.random(120, 150) : math.random(70, 90)
        print('dropping', ver, size, count)
        for (let i = 0; i < count; i++) {
            const range = 40
            let { X, Y, Z } = getHRP().Position
            X += math.random(-50, 50)
            Z += math.random(-70, 70)
            Y += range
            const part2 = part.Clone()
            part2.Parent = getIgnoreFold()
            part2.Position = new Vector3(X, Y, Z)
            part2.CanCollide = false
            part2.CanTouch = false
            part2.CanQuery = false

            const m1 = createMotion(Y)
            m1.linear(getHRP().Position.Y - range, { speed: 30 })
            m1.onStep((y) => {
                part2.Position = new Vector3(X, y, Z)
            })
            m1.onComplete(() => {
                part2.Destroy()
            })
            m1.start()
            task.wait(math.random(10, 30) / 100)
        }
    })
}

export const reverseList = <T extends object>(list: T[], maxLen?: number): T[] => {
    const vals: T[] = [];
    for (let i = list.size() - 1; i >= 0; i--) {  // Use .length instead of .size()
        vals.push(list[i]);
        if (maxLen && vals.size() >= maxLen) {
            break
        }
    }
    return vals;
};
