import { createMotion } from "@rbxts/ripple"
import { ReplicatedStorage, TweenService, Workspace } from "@rbxts/services"
import { getBezierAt, getHRP, getHumanoid, getPlayer } from "shared/help/assist"
import { getStagePos } from "shared/help/DATA"
import { Atom } from "shared/signals/atom"
import { canNotAtom } from "shared/signals/atoms"
import { getPlayerAtts } from "shared/signals/player_attributes"
import { freezePetsSig } from "shared/signals/server_signals"

export const teleportAtom = new Atom({ loaded: 0 })

const CANON = ReplicatedStorage.instance.models.WaitForChild('canon') as Model

let isTeleporting = false
export const teleport_to = (stageNo: number) => {
    if (isTeleporting) return
    const { inStageNo, } = getPlayerAtts()
    const curZone = inStageNo
    const start = getHRP().Position
    let finish = getStagePos(stageNo)
    print('teleport to: ', stageNo, finish)
    const buffer = stageNo === 0 ? 20 : 66
    finish = finish.sub(finish.sub(start).Unit.mul(buffer))
    finish = finish.add(new Vector3(0, getHumanoid().HipHeight + 1.5, 0))
    if (start.sub(finish).Magnitude < 30) {
        canNotAtom.update({ kind: "ALREADY_IN_AREA" })
        return
    }

    const dif = math.abs(math.max(1, curZone - stageNo))
    const control = new Vector3(finish.X, finish.Y + 90 * dif, finish.Z)
    isTeleporting = true
    const canon = CANON.Clone()

    const positionCanon = () => {
        const hrpPos = getHRP().Position
        const randomAngle = math.rad(math.random(0, 360));
        const distance = 3;
        const offsetX = math.cos(randomAngle) * distance;
        const offsetZ = math.sin(randomAngle) * distance;

        const spawnPos = hrpPos.add(new Vector3(offsetX, 0, offsetZ));
        const lookTarget = finish.add(new Vector3(0, 50, 0));
        const finalCFrame = new CFrame(spawnPos, lookTarget);
        canon.PivotTo(finalCFrame);
        canon.Parent = Workspace;
    };

    const fireCanon = () => {
        const barrel = canon.FindFirstChild("Barrel") as BasePart;
        if (!barrel) return;

        // 1. Initial State
        const originalCF = barrel.CFrame;
        const recoilCF = originalCF.mul(new CFrame(0, 0, 1.5)); // Move back 1.5 studs

        // 2. Recoil Animation (Fast back, then spring forward)
        const recoilInfo = new TweenInfo(0.05, Enum.EasingStyle.Quad, Enum.EasingDirection.Out);
        const recoverInfo = new TweenInfo(0.4, Enum.EasingStyle.Elastic, Enum.EasingDirection.Out);

        const recoilTween = TweenService.Create(barrel, recoilInfo, { CFrame: recoilCF });
        const recoverTween = TweenService.Create(barrel, recoverInfo, { CFrame: originalCF });

        // 3. Muzzle Flash Effect (Scaling a ring)
        const flash = barrel.FindFirstChild("Flash") as MeshPart;
        if (flash) {
            flash.Transparency = 0;
            flash.Size = new Vector3(0, 0, 0);
            TweenService.Create(flash, new TweenInfo(0.2), {
                Size: new Vector3(5, 5, 1),
                Transparency: 1
            }).Play();
        }

        recoilTween.Play();
        recoilTween.Completed.Wait()
        recoverTween.Play()
        recoverTween.Completed.Wait()
    }

    let isRun = false
    const runTeleport = () => {
        if (isRun) return
        isRun = true
        task.wait(1.5)
        fireCanon()
        task.wait(0.2)
        teleportAtom.update({ loaded: 1 })
        const m1 = createMotion(0)
        const startCam = game.Workspace.Camera.CFrame
        m1.linear(1, { speed: 1 })
        m1.onStep((t) => {
            const pos = getBezierAt(start, control, finish, t)
            const pos2 = pos.add(finish.sub(start))
            getHRP().CFrame = CFrame.lookAt(pos, pos2)
            game.Workspace.Camera.CFrame = startCam.Lerp(getHRP().CFrame, t)
        })
        m1.onComplete(() => {
            task.spawn(() => {
                isTeleporting = false
                canon.Destroy()
                task.wait(1)
                freezePetsSig.Fire(false)
            })
        })
        freezePetsSig.Fire(true)
        m1.start()
    }

    const preloadPath = () => {
        let curPos = start
        const loadRange = 300
        const max = 1_000
        for (let i = 0; i < max; i++) {
            const pos = getBezierAt(start, control, finish, i / max)
            if (curPos.sub(pos).Magnitude > loadRange) {
                if (!tryStreamAround(pos)) {
                    break
                }
                teleportAtom.update({ loaded: i / max })
                curPos = pos
            }
            if (isRun) break
        }
        tryStreamAround(finish)
        print('loading cancelled', isRun)
        runTeleport()
    }


    positionCanon()
    task.spawn(() => {
        preloadPath()
    })

    task.spawn(() => {
        task.wait(3)
        runTeleport()
    })

}

const tryStreamAround = (pos: Vector3) => {
    let done = false
    const start = time()
    task.spawn(() => {
        getPlayer().RequestStreamAroundAsync(pos)
        done = true
    })
    while (true) {
        if (done) break
        task.wait(0.05)
        if ((time() - start) > 0.5) {
            warn('stream failed')
            break
        }
    }
    return done
}
