import { DEF_AREA_CACHE } from "./DATA"

export const getStageFromPos = (pos: Vector3) => {
    let minDist = math.huge
    let closeStageNo = 0
    for (const [strStageNo, cords] of pairs(DEF_AREA_CACHE)) {
        const stageNo = tonumber(strStageNo) ?? 1
        // if (stageNo === 0) continue
        const stagePos = new Vector3(cords[0], cords[1], cords[2])
        const dist = stagePos.sub(pos).Magnitude
        if (dist >= minDist) continue
        minDist = dist
        closeStageNo = stageNo - 1
        if (dist < 80) break
    }
    const inMine = minDist < 60 && closeStageNo >= 0
    return { minDist, closeStageNo, inMine }
}
