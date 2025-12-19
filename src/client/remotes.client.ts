import { breakStageBoard, playVFX } from "shared/effects/vfx/vfx";
import { Remotes } from "shared/signals/remotes";

Remotes.Client.Get('PlayVFX').Connect((pos, kind) => {
    playVFX(kind, pos)
})

Remotes.Client.Get('BreakStageBoard').Connect((stageNo) => {
    breakStageBoard(stageNo)
})

