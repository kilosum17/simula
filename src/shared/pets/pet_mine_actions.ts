import { TweenService } from "@rbxts/services";
import { PetClient } from "./pet_client";

const HIT_OFFSET_STUD = 3.0; // Lunge distance
const WIGGLE_ANGLE_DEG = 20; // Wiggle rotation in degrees

const MULT = 1.5
// TweenInfo for the Lunge (Quick out, quick back)
const LUNGE_TWEEN_INFO = new TweenInfo(
    0.05 * MULT, // Duration (Fast hit)
    Enum.EasingStyle.Linear,
    Enum.EasingDirection.Out,
    0,
    true, // Reverses: True (automatically returns to start)
    0
);

// TweenInfo for the Wiggle (Slightly longer, elastic feel)
const WIGGLE_TWEEN_INFO = new TweenInfo(
    0.15 * MULT, // Duration (Slightly slower for the bounce)
    Enum.EasingStyle.Linear,
    Enum.EasingDirection.Out,
    0,
    true, // Reverses: True (automatically returns to start)
    0
);

export class PetMineActions {
    petClient: PetClient
    isMining = false

    constructor(petClient: PetClient) {
        this.petClient = petClient
    }

    resetState() {
        this.isMining = false
    }

    mineOnce() {
        if (this.isMining) {
            return
        }
        this.isMining = true
        this._runMine()
    }

    _runMine() {
        const part = this.petClient._body
        const mineSpot = this.petClient.mineSpot!
        part.BodyPosition.P = 0
        part.BodyGyro.P = 0

        const originalCFrame = mineSpot.CFrame
        part.CFrame = originalCFrame

        let targetCFrame: CFrame;
        let tweenInfo: TweenInfo;
        // const animationType = math.random(1, 2);
        const animationType = this.petClient.petId % 2
        if (animationType === 0) {
            targetCFrame = originalCFrame.add(
                originalCFrame.LookVector.mul(HIT_OFFSET_STUD).add(new Vector3(0, -2, 0))
            );
            tweenInfo = LUNGE_TWEEN_INFO;
        } else {
            targetCFrame = originalCFrame.mul(
                CFrame.Angles(0, math.rad(WIGGLE_ANGLE_DEG), 0)
            );
            tweenInfo = WIGGLE_TWEEN_INFO;
        }

        const hitTween = TweenService.Create(
            part,
            tweenInfo,
            { CFrame: targetCFrame }
        );

        // 4. (Optional) Visual Impact
        // You would typically add a brief visual/sound effect here, e.g.:
        // SoundService.PlaySound(hitSoundAssetId); 
        // EffectManager.SpawnHitParticles(drop.pos); 
        hitTween.Completed.Connect((state) => {
            warn("TWEEN complete", state, animationType)
            task.spawn(() => {
                task.wait(0.01)
                part.BodyPosition.Position = originalCFrame.Position
                part.BodyPosition.P = part.BodyPosition.GetAttribute("P") as number
                part.BodyGyro.P = part.BodyGyro.GetAttribute("P") as number
                task.wait(2)
                this.petClient.isMining = false
            })
        })
        warn("TWEEN playing", animationType)
        hitTween.Play();
    }
}