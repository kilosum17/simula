import { DEF_AREA_CACHE, getStagePos } from "shared/help/DATA"
import { Fossil } from "./fossil"
import { STAGE_CONF } from "shared/help/CONF"
import { chooseRandom, col, ensureInstance } from "shared/help/assist"

export class Stage {
    stageNo: number
    center: Vector3
    fossils = [] as Fossil[]
    hidePart = new Instance('Part')
    curGuid = 0

    constructor(stageNo: number) {
        this.stageNo = stageNo
        this.center = getStagePos(stageNo + 1)
        ensureInstance({ path: `Targets.Fossils.${stageNo}` })
        ensureInstance({ path: `Targets.Drops.${stageNo}` })
    }

    entered() {
        const part = new Instance('Part')
        part.Size = new Vector3(0.5, 0.5, 0.5)
        part.Color = col('random')
        part.CanCollide = false
        part.Anchored = true
        part.Position = this.center
        part.Parent = game.Workspace.Targets
        part.Transparency = 1
        this.createFossils()
    }

    _taken_pos = [] as Vector3[]
    _used_zones = [] as number[]
    createFossils() {
        if (this.fossils.size() > 0) {
            warn('Stage already loaded')
            return
        }
        this._taken_pos = []
        this._used_zones = []
        const conf = STAGE_CONF[this.stageNo]
        let fails = 0
        const zones = this.getSquares(this.center, 50)
        const fosNo = conf.no
        // const fosNo = 10
        for (let i = 0; i < fosNo; i++) {
            const possible_zones = [] as Vector3[]
            for (let z = 0; z < zones.size(); z++) {
                if (this._used_zones.includes(z)) continue
                let passed = true
                for (const taken of this._taken_pos) {
                    if (zones[z].sub(taken).Magnitude < 12) {
                        passed = false
                        this._used_zones.push(z)
                        break
                    }
                }
                if (passed) {
                    possible_zones.push(zones[z])
                }
                if (possible_zones.size() > 5) break
            }
            if (possible_zones.size() < 2) {
                fails = conf.no - i
                break
            } else {
                const pos = chooseRandom(possible_zones)
                this._taken_pos.push(pos)
                this.addFossilAt(pos)
            }
            // if (i > 10) break
        }
        const accuracy = 100 - math.ceil(fails / conf.no * 100)
        print(`stage ${this.stageNo} placed accuracy: `, accuracy, '%', 'fails:', fails)
    }

    getSquares(center: Vector3, r: number) {
        const w = 2.5
        const sx = center.X - r
        const ex = center.X + r
        const sz = center.Z - r
        const ez = center.Z + r
        const vals = [] as Vector3[]
        for (let x = sx; x <= ex; x += w) {
            for (let z = sz; z <= ez; z += w) {
                const pos = new Vector3(x, center.Y, z)
                const dist = pos.sub(center).Magnitude
                if (dist <= (r)) {
                    vals.push(pos)
                }
            }
        }
        for (let i = 0; i < vals.size() / 2; i++) {
            const idx = math.random(0, vals.size() - 1)
            const temp = vals[idx]
            vals[idx] = vals[i]
            vals[i] = temp
        }
        return vals
    }

    // removeFossil(fossil: Fossil) {
    //     this.fossils = this.fossils.filter(f => f !== fossil)
    //     this.addFossilAt(fossil.pos, 4)
    // }

    addFossilAt(pos: Vector3) {
        const fos = new Fossil(this, pos, this.curGuid)
        this.curGuid++
        this.fossils.push(fos)
    }

}