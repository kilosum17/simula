import { enteredAreaSig, fossilDamageSig } from "shared/signals/server_signals";
import { Stage } from "./Stage";
import { getPetConf } from "shared/help/pet_catalog";

const STAGE_COUNT = 90

export class FossilService {
    stages = [] as Stage[]

    constructor() {
        for (let i = 0; i < STAGE_COUNT; i++) {
            this.stages.push(new Stage(i))
        }

        this.playerEntered(0)

        enteredAreaSig.Connect((_, stageNo) => {
            this.playerEntered(stageNo)
        })

        fossilDamageSig.Connect((player, fossilBody, petBody) => {
            if (!fossilBody.IsA("BasePart") || !petBody.IsA("BasePart")) {
                warn("Not valid fosil or pet", fossilBody, petBody)
                return
            }
            if (fossilBody.Position.sub(petBody.Position).Magnitude > 50) {
                warn("Pet and fossil distance too big", fossilBody, petBody)
                return
            }
            const stageNo = fossilBody.GetAttribute('stageNo') as number
            const stage = this.stages[stageNo]
            const fossil = stage.fossils.find(f => f.body === fossilBody)
            if (!fossil) {
                warn("Not a valid fossil", fossilBody, stageNo)
                return
            }
            const petConf = getPetConf(petBody.GetAttribute('id') as number)
            if (!petConf) {
                warn("No pet ", petBody)
                return
            }
            fossil.takeDamage(petConf.damage)
        })

    }

    playerEntered(stageNo: number) {
        if (stageNo < 0 || stageNo >= this.stages.size()) return
        this.stages[stageNo].entered()
    }

}