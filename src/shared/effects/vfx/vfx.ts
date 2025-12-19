import { Workspace } from "@rbxts/services"
import CameraShaker from "@rbxts/camera-shaker";
import { playSound } from "../sfx/sfx";

export type TVfxTypes = "bigBurst" | "littleBurst" | 'explosion'

const fetchVFX = (name: TVfxTypes): ParticleEmitter[] => {
    const folder = game.GetService("ReplicatedStorage").public.particles.WaitForChild(name) as Folder
    return folder.GetDescendants().map(p => p.Clone()) as ParticleEmitter[]
}

export const playVFX = (name: TVfxTypes, pos: Vector3, destroy = 5) => {
    task.spawn(() => {
        const emitters = fetchVFX(name)
        const part = new Instance('Part')
        part.Transparency = 1;
        part.CanCollide = false
        part.Position = pos;
        part.AddTag("vfx")
        part.Parent = game.Workspace.Targets.Ignore
        if (name === 'explosion') {
            part.Size = part.Size.mul(3)
        }
        for (const emit of emitters) {
            emit.Parent = part
            if (emit.IsA("ParticleEmitter")) {
                let count = (emit.GetAttribute('EmitCount') || 1) as number
                emit.Emit(count)
            }
        }
        task.spawn(() => {
            task.wait(destroy)
            part.Destroy()
        })
    })
}

export const breakStageBoard = (stageNo: number) => {
    const camera = Workspace.Camera
    const camShake = new CameraShaker(
        Enum.RenderPriority.Camera.Value,
        shakeCFrame => camera.CFrame = camera.CFrame.mul(shakeCFrame)
    );
    camShake.Start();
    camShake.Shake(CameraShaker.Presets.Earthquake);
    playSound({ ver: 'NAMED', name: "unlock", kind: 'sfx' })
    task.spawn(() => {
        task.wait(3)
        camShake.Stop()
    })
}