import { breakStageBoard, playVFX } from "shared/effects/vfx/vfx";
import { hatchedDropperAtom } from "shared/signals/atoms";
import { Remotes } from "shared/signals/remotes";
import { clientEventSig } from "shared/signals/server_signals";

Remotes.Client.Get('PlayVFX').Connect((pos, kind) => {
    playVFX(kind, pos)
})

Remotes.Client.Get('BreakStageBoard').Connect((stageNo) => {
    breakStageBoard(stageNo)
})

Remotes.Client.Get('HatchedNewPets').Connect((petIds) => {
    hatchedDropperAtom.update(prev => {
        print('got new', petIds)
        return { ...prev, petIds, open: true }
    })
})

Remotes.Client.Get('PassEventToPlayer').Connect((event, args) => {
    clientEventSig.Fire(event, args)
})
