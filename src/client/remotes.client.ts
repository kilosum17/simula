import { playVFX } from "shared/effects/vfx/vfx";
import { Remotes } from "shared/signals/remotes";

Remotes.Client.Get('SendPlayVFX').Connect((pos, kind) => {
    playVFX(kind, pos)
})
