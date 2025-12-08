import { DEF_AREA_CACHE } from "shared/help/DATA"
import { Fossil } from "./fossil"
import { STAGE_CONF } from "shared/help/CONF"
import { chooseRandom } from "shared/help/assist"

export class Stage {
    stageNo: number
    center: Vector3
    fossils = [] as Fossil[]


    constructor(stageNo: number) {
        this.stageNo = stageNo
        let _pos = DEF_AREA_CACHE["" + (stageNo + 1)]
        this.center = new Vector3(_pos[0], _pos[1], _pos[2])
    }

    entered() {
        this.showFossils()
    }

    private taken_pos = [] as Vector3[]
    private used_zones = [] as number[]
    showFossils() {
        if (this.fossils.size() > 0) {
            warn('Stage already loaded')
            return
        }
        this.taken_pos = []
        this.used_zones = []
        const conf = STAGE_CONF[this.stageNo]
        let fails = 0
        const zones = this.getSquares(this.center, 50)
        const fosNo = conf.no
        // const fosNo = 10
        for (let i = 0; i < fosNo; i++) {
            let possible_zones = [] as Vector3[]
            for (let z = 0; z < zones.size(); z++) {
                if (this.used_zones.includes(z)) continue
                let passed = true
                for (const taken of this.taken_pos) {
                    if (zones[z].sub(taken).Magnitude < 12) {
                        passed = false
                        this.used_zones.push(z)
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
                this.taken_pos.push(pos)
                this.taken_pos.push(pos)
                const fos = new Fossil(this, pos)
                this.fossils.push(fos)
            }
        }
        print(`stage ${this.stageNo} placed accuracy: `, (100 - math.ceil(fails / conf.no * 100)) + '%', 'fails:', fails)
    }

    getSquares(center: Vector3, r: number) {
        const w = 2.5
        let sx = center.X - r
        let ex = center.X + r
        let sz = center.Z - r
        let ez = center.Z + r
        let count = 0
        let added = 0
        const vals = [] as Vector3[]
        for (let x = sx; x <= ex; x += w) {
            for (let z = sz; z <= ez; z += w) {
                const pos = new Vector3(x, center.Y, z)
                const dist = pos.sub(center).Magnitude
                if (dist <= (r)) {
                    vals.push(pos)
                    added++
                }
                count++
            }
        }
        // print('zone cover: ', math.round(added / count * 100) + '%')
        for (let i = 0; i < vals.size() / 2; i++) {
            const idx = math.random(0, vals.size() - 1)
            const temp = vals[idx]
            vals[idx] = vals[i]
            vals[i] = temp
        }
        return vals
    }

}