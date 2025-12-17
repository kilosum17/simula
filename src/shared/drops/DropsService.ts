import { randInt, randSample } from "shared/help/math";
import { addDropsSig } from "shared/signals/server_signals";
import { DropOne, TDropKind } from "./DropOne";

export class DropsService {
    drops = [] as DropOne[]
    lastDrop = os.time()

    constructor() {

        addDropsSig.Connect((pos) => {
            // warn("Add drops at", pos)
            this.addDrops(pos)
            this.lastDrop = os.time()
        })

        task.spawn(() => {
            while (true) {
                const activeDrops = [] as DropOne[]
                for (const drop of this.drops) {
                    if ((os.time() - drop.dropTime) > 10) {
                        drop.kill()
                    } else {
                        activeDrops.push(drop)
                    }
                }
                this.drops = activeDrops
                task.wait(randInt(5, 10) / 10) // 0.5-1
            }
        })
    }

    addDrops(pos: Vector3) {
        const no = randInt(2, 4)
        for (let i = 0; i < no; i++) {
            const kind = randSample([
                'coin', 'coin', 'coin', 'coin', 'coin', 'bag'
            ] as TDropKind[])
            const drop = new DropOne(pos, kind, this)
            this.drops.push(drop)
        }
    }

}