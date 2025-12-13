import { HttpService, Players, ReplicatedStorage, RunService, TweenService, Workspace } from "@rbxts/services"


export const chooseRandom = <T>(_list: T[], defItem?: T) => {
    if (_list.size() <= 1) {
        if (defItem) {
            return defItem
        } else {
            error('Choose random with empty list' + _list)
        }
    }
    const list = [..._list, ..._list]
    while (true) {
        let idx = math.floor(math.random(0, list.size() - 1))
        let val = list[idx]
        if (val !== undefined) return val
    }
}

const FOS_MODs = {
    'bone': 2,
    'dino': 6,
    'crate': 4,
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
const getFosItems = (fos: string, stage: number): [BasePart[], Folder] => {
    const folder = ReplicatedStorage.WaitForChild('public').WaitForChild('plots').WaitForChild(fos) as Folder
    const cubes = ReplicatedStorage.WaitForChild('public').WaitForChild('cubes') as Folder
    const types = folder.GetChildren() as BasePart[]
    if (types.size() !== 4) {
        warn('Got less ', fos, types)
    }
    if (fos === 'crate') {
        // stage = math.max(0, stage)
        const conf = CRATE_CONFIG.find(c => c[0] <= stage && stage <= c[1])!
        // print('conf', stage, conf)
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
            print('fold', cubeName, fold)
        }
        const fold = crates[cubeName]
        return [fold.GetChildren() as BasePart[], fold]
    }
    return [types, folder]
}
export const getFosOfType2 = (fos: string, ratio: number, clone: (no: number) => boolean, stage: number) => {
    const [types, folder] = getFosItems(fos, stage)
    const inc = 1.0 / types.size()
    let cur_ratio = inc
    let no = 1
    while (cur_ratio <= 1) {
        if (ratio <= cur_ratio) {
            let part = folder.WaitForChild(fos + no) as BasePart
            if (clone(no)) {
                part = part.Clone()
                part.CollisionGroup = "FOSSIL"
                const mult = FOS_MODs[fos] || 1
                part.Size = part.Size.mul(mult)
            }
            return [no, part] as [number, BasePart]
        }
        cur_ratio += inc
        no++
    }
}


export class Updater {
    last_update = os.time()

    constructor(intervals: number, callBack: () => void, paused = () => false) {
        callBack()
        game.GetService('RunService').Heartbeat.Connect(() => {
            if (intervals === 0) {
                callBack()
                return
            }
            if (paused()) {
                return
            }
            const elapsed = os.time() - this.last_update
            if (elapsed >= intervals) {
                callBack()
                this.last_update = os.time()
            }
        })
    }
}


export const getPlayer = () => {
    if (RunService.IsServer()) {
        warn("get player from server")
    }
    return Players.LocalPlayer
}

export const getCharacter = (player = Players.LocalPlayer) => {
    return player.Character! || player.CharacterAdded.Wait()[0]
}

export const getHumanoid = (player = Players.LocalPlayer) => {
    const character = player.Character! || player.CharacterAdded.Wait()[0]
    return character.FindFirstChild("Humanoid")! as Humanoid
}

export const getPlayerGui = (player?: Player) => {
    return (player || getPlayer()).FindFirstChild("PlayerGui") as PlayerGui;
}

export const getHRP = (player = Players.LocalPlayer) => {
    // const player = game.GetService('Players').LocalPlayer
    const character = player.Character || player.CharacterAdded.Wait()[0]
    const hrp = character.WaitForChild('HumanoidRootPart') as MeshPart
    return hrp
}
export const getBodyPart2 = (name: string, player = Players.LocalPlayer) => {
    // const player = game.GetService('Players').LocalPlayer
    const character = player.Character || player.CharacterAdded.Wait()[0]
    const hrp = character.WaitForChild(name) as MeshPart
    return hrp
}
export function getUpperTorso(player = Players.LocalPlayer) {
    return getBodyPart2('UpperTorso', player)
}
export function getLowerTorso(player = Players.LocalPlayer) {
    return getBodyPart2('LowerTorso', player)
}
export function getBodyPart(player: Player, partName: string): BasePart | undefined {
    const character = player.Character || player.CharacterAdded.Wait()[0];
    if (character && character.IsA("Model")) {
        const leftFoot = character.FindFirstChild(partName);
        if (leftFoot && leftFoot.IsA("BasePart")) {
            return leftFoot;
        }
    }
    return undefined; // Return undefined if not found
}

// export const getUpdater = (rate: number, changed: () => number) => {
//     const [update, setUpdate] = createBinding(0)
//     task.spawn(() => {
//         let last = -112
//         while (true) {
//             const cur = changed()
//             if (cur !== last) {
//                 setUpdate(update.getValue() + 1)
//             }
//             last = cur
//             task.wait(rate * 2)
//         }
//     })
//     return update
// }


export const getBezierAt = (p0: Vector3, p1: Vector3, p2: Vector3, t: number): Vector3 => {
    const x = math.pow(1 - t, 2) * p0.X +
        2 * (1 - t) * t * p1.X +
        math.pow(t, 2) * p2.X;
    const y = math.pow(1 - t, 2) * p0.Y +
        2 * (1 - t) * t * p1.Y +
        math.pow(t, 2) * p2.Y;
    const z = math.pow(1 - t, 2) * p0.Z +
        2 * (1 - t) * t * p1.Z +
        math.pow(t, 2) * p2.Z;

    return new Vector3(x, y, z);
}

export const ensureInstance = ({ path, root = game.Workspace, create = true }: {
    path: string, root?: Instance, create?: boolean,
}) => {
    const parts = path.split(".")
    let parent = root
    for (const part of parts) {
        if (!parent.FindFirstChild(part) && create) {
            const fold = new Instance("Folder", parent)
            fold.Name = part
        }
        parent = parent.FindFirstChild(part)!
    }
    return parent
}

export const placeTestPart = ({ pos, x = 0, y = 0, z = 0, trans = 0.5, expire = 0.2, remove = true, size = 0.3 }: {
    pos?: Vector3, x?: number, y?: number, z?: number, trans?: number, expire?: number, remove?: boolean, size?: number,
}) => {
    if (!pos) {
        pos = new Vector3(x, y, z)
    }
    const p = new Instance('Part')
    p.Parent = ensureInstance({ path: "Targets.Ignore" }) as Folder
    p.Position = pos
    p.Anchored = true
    p.Name = 'Test'
    p.Size = p.Size.mul(size)
    p.Color = BrickColor.Red().Color
    p.Transparency = trans
    p.CanCollide = false
    task.spawn(() => {
        if (!remove) return
        task.wait(expire)
        p.Destroy()
    })
}


export function getAnimationTrack(anim_id: string, loop = false, player = Players.LocalPlayer) {
    const humanoid = getHumanoid(player)
    const animation = new Instance("Animation")
    animation.AnimationId = anim_id
    const animationTrack = humanoid.LoadAnimation(animation)
    animationTrack.Priority = Enum.AnimationPriority.Action // Set the priority to Action
    animationTrack.Looped = loop
    return animationTrack
}

// export const getEggCost =w

export const getCurTime = () => {
    try {
        return Workspace.GetServerTimeNow()
    } catch (e) {
        return os.time()
    }
}

export class ProximityCheck {
    isClose = false
    buffer = 10

    constructor(part: BasePart, buffer: number, onEnter: () => void, onLeave: () => void) {
        this.buffer = buffer

        task.spawn(() => {
            while (true) {
                const dist = getHRP().Position.sub(part.Position).Magnitude
                if (dist < buffer) {
                    if (!this.isClose) {
                        this.isClose = true
                        onEnter()
                    }
                } else {
                    if (this.isClose) {
                        this.isClose = false
                        onLeave()
                    }
                }
                task.wait(0.1)
            }
        })
    }
}

export const getMousePos = () => {
    const m = getPlayer().GetMouse()
    return new Vector2(m.X, m.Y)
}

export const popoutFrame = (scaler: UIScale | undefined, open: boolean, setOpen?: (val: boolean) => void) => {
    if (!scaler) return
    const info = new TweenInfo(0.1, Enum.EasingStyle.Bounce, Enum.EasingDirection.Out)
    scaler.Scale = open ? 0 : 1
    const scalerTween = TweenService.Create(scaler, info, { Scale: open ? 1 : 0 })
    scalerTween.Play()
    if (setOpen) {
        task.spawn(() => {
            task.wait(open ? 0 : 0.05)
            setOpen(open)
        })
    }
}


// export const waitPopoutFrame = (ref: Ref<UIScale>, open: boolean, setOpen?: (val: boolean) => void) => {
//     task.spawn(() => {
//         let no = 0
//         while (true) {
//             if (ref.getValue()) {
//                 break
//             }
//             task.wait(0.05)
//             no++
//             if (no > 10) {
//                 print('no ref')
//                 return
//             }
//         }
//         const scaler = ref.getValue()!
//         const info = new TweenInfo(0.1, Enum.EasingStyle.Bounce, Enum.EasingDirection.Out)
//         scaler.Scale = open ? 0 : 1
//         const scalerTween = TweenService.Create(scaler, info, { Scale: open ? 1 : 0 })
//         scalerTween.Play()
//         if (setOpen) {
//             task.wait(open ? 0 : 0.05)
//             setOpen(open)
//         }
//     })
// }

export const shakeUI = (scaler: UIScale | undefined, { dur, start, finish }: { dur?: number, start?: number, finish?: number, }) => {
    if (!scaler) return
    const dd = dur ?? 0.3
    const info = new TweenInfo(dd, Enum.EasingStyle.Bounce, Enum.EasingDirection.Out)
    scaler.Scale = start ?? 0.8
    const scalerTween = TweenService.Create(scaler, info, { Scale: finish ?? 1 })
    return scalerTween
}

export const trottled = (rate: number, callback: () => void) => {
    if (rate < 0 || rate > 1) {
        warn('trottle rate outoubounds', rate, callback)
    }
    const rand = math.random(0, 100) / 100
    if (rand <= rate) {
        callback()
    }
}

export const col = (ver: 'white' | 'red' | "blue" | "black" | "green" | "yellow" | "gray" | "random") => {
    let col = BrickColor.White().Color
    switch (ver) {
        case "white":
            col = BrickColor.White().Color
            break
        case "red":
            col = BrickColor.Red().Color
            break
        case "blue":
            col = BrickColor.Blue().Color
            break
        case "black":
            col = BrickColor.Black().Color
            break
        case "green":
            col = BrickColor.Green().Color
            break
        case "yellow":
            col = BrickColor.Yellow().Color
            break
        case "gray":
            col = BrickColor.Gray().Color
            break
        case "random":
            col = BrickColor.random().Color
            break
    }
    return col
}

export const getWaitManager = (dur: number, start = os.time() - dur) => {
    let start_time = start
    return (now: number) => {
        if (now - start_time < dur) {
            return false
        } else {
            start_time = now
            return true
        }
    }
}

export function deepClone<T extends object>(obj: T): T {
    const encoded = HttpService.JSONEncode(obj);
    return HttpService.JSONDecode(encoded) as T;
}

export const getHealthMult = (no: number) => {
    return 1 + 0.8 * (no - 1)
}

export const getCoinMult = (no: number) => {
    return math.pow(2, no - 1);
}

export const getNewStageCost = (no: number, rebirth: number) => {
    rebirth = math.max(rebirth, 0)
    const BASE = 60_000
    const RATE_MULT = 1 + 0.1 * rebirth
    const COST_RATE = 2 * RATE_MULT
    const res = BASE * math.pow(COST_RATE, no - 1);
    return math.round(res)
}

export const getNewEggPrice = (idx: number) => {
    const pos = 3 * (idx + 1)
    let cost = getNewStageCost(pos, 0)
    if ([1, 2, 3].includes(idx)) {
        cost = math.floor(cost * 0.5)
    }
    return math.round(cost)
}

let no = 0
export const getUUID = (prefix = '') => {
    return `${prefix}${no++}`
}

export function setPartDensity(part: BasePart, newDensity: number) {
    newDensity = math.max(newDensity, 0.1)
    const current = part.CustomPhysicalProperties || new PhysicalProperties(0, 0, 0);
    const updated = new PhysicalProperties(
        newDensity, current.Friction, current.Elasticity,
        current.FrictionWeight, current.ElasticityWeight
    );
    part.CustomPhysicalProperties = updated;
}
export function setPlayerData(name: string, value: AttributeValue, player = Players.LocalPlayer) {
    const time = os.time()
    player.SetAttribute(name, value)
    player.SetAttribute(name + "Time", time)
}
export function getPlayerData<T>(name: string, player = Players.LocalPlayer) {
    const value = player.GetAttribute(name) as boolean | string | number
    let time = os.time()
    if (value !== undefined) {
        time = player.GetAttribute(name + 'Time') as number || time
    } else {
        // warn('Player data null', name, player?.Name)
    }
    return [value, time] as [T, number]
}

export function getPetPosition(basePos: Vector3, yRotDeg: number, height: number, moveIdx: number) {
    const pos = [] as Vector3[]

    function getAngles(start: number, stop: number, inc: number) {
        const angles = []
        for (let i = start; i <= stop; i += inc) {
            angles.push(i)
        }
        return angles.sort((a, b) => {
            return math.abs(a - 0) < math.abs(b - 0)
        })
    }
    const angles = [
        [],
        [20, -20, 60, -60],
        getAngles(-80, 80, 20),
        getAngles(-90, 90, 13),
        getAngles(-90, 90, 9),
        getAngles(-90, 90, 7),
    ]

    const { X: hx, Y: hy, Z: hz } = basePos
    // print('rotate', math.round(yRotDeg))
    const R = 6
    for (let row = 1; row <= 5; row++) {
        for (let i = 0; i < angles[row].size(); i++) {
            // const angle = angles[i] + 90 + yRotDeg
            const radius = R * row
            const angle = angles[row][i] - yRotDeg + 90
            const x = hx + radius * math.cos(math.rad(angle))
            const z = hz + radius * math.sin(math.rad(angle))
            const y = hy - height
            // placeTestPart({ x, y, z, expire: 1000 })
            pos.push(new Vector3(x, y, z))
        }
    }
    return pos[moveIdx]
}

export function calcTime(desc: string, cbk: () => void): void {
    const start = os.clock();
    cbk();
    const dur = os.clock() - start;
    const rounded = math.round(dur * 1e4) / 1e4;
    warn(`${desc} ran for: ${rounded} seconds`);
}

export function onAttributesChanged(instance: Instance, atts: string[], changed: (name: string) => void) {
    for (const att of atts) {
        instance.GetAttributeChangedSignal(att).Connect(() => {
            changed(att)
        })
    }
}

export function getIgnoreFold() {
    return ensureInstance({ path: "Targets.Ignore" }) as Folder
}

export function addPointerToFront(basePart: BasePart, len = 3, color = col('red')) {
    const direction = basePart.CFrame.LookVector;
    const thickness = 0.1;

    // Compute center position 1.5 studs in front (half of length)
    const pointerPosition = basePart.Position.add(direction.mul(len / 2));

    // Create the pointer part
    const pointer = new Instance("Part");
    pointer.Size = new Vector3(thickness, thickness, len);
    pointer.Anchored = false;
    pointer.CanCollide = false;
    pointer.Color = color
    pointer.Material = Enum.Material.Neon;
    pointer.Name = "PointerPart";
    pointer.CFrame = CFrame.lookAt(pointerPosition, pointerPosition.add(direction));
    pointer.Parent = basePart.Parent;

    // Weld pointer to basePart
    const weld = new Instance("WeldConstraint");
    weld.Part0 = pointer;
    weld.Part1 = basePart;
    weld.Parent = pointer;
}

export function isHoverActive() {
    let active = getPlayerData<Boolean>('hoverActive')[0]
    return active
}

export function objKeys<T>(obj: Record<string, T>) {
    const keys = [] as string[]
    for (const [key] of pairs(obj)) {
        keys.push(key)
    }
    return keys
}

export function objValues<T extends defined,>(obj: Record<string, T>) {
    const vals = [] as T[]
    for (const [_, val] of pairs(obj)) {
        vals.push(val)
    }
    return vals
}

export function scaleUDim2(udim2: UDim2, scale: number): UDim2 {
    const newX = new UDim(udim2.X.Scale * scale, udim2.X.Offset * scale);
    const newY = new UDim(udim2.Y.Scale * scale, udim2.Y.Offset * scale);
    return new UDim2(newX, newY);
}