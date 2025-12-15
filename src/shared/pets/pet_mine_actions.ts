import { randInt } from "shared/help/math";
import { PetClient } from "./pet_client";
import { TweenService } from "@rbxts/services";
import { fossilDamageSig } from "shared/signals/server_signals";
import { Remotes } from "shared/signals/remotes";

const HIT_OFFSET_STUD = 2.0;
const WIGGLE_ANGLE_DEG = 15;
const JUMP_HEIGHT_STUD = 4.0;
const MULT = 1;

const LUNGE_TWEEN_INFO = new TweenInfo(
    0.05 * MULT,
    Enum.EasingStyle.Cubic,
    Enum.EasingDirection.Out,
    0,
    true,
    0
);


const WIGGLE_TWEEN_INFO_STEP1 = new TweenInfo(
    0.075 * MULT,
    Enum.EasingStyle.Quad,
    Enum.EasingDirection.Out,
    0,
    false,
    0
);


const JUMP_TWEEN_INFO = new TweenInfo(
    0.15 * MULT,
    Enum.EasingStyle.Quad,
    Enum.EasingDirection.InOut,
    0,
    true,
    0
);

export class PetMineActions {
    petClient: PetClient;
    isMining = false;
    mineCount = 0

    constructor(petClient: PetClient) {
        this.petClient = petClient;
    }

    resetState() {
        this.isMining = false;
    }

    mineOnce() {
        if (this.isMining) {
            return;
        }
        this.isMining = true;
        this._runMine();
    }

    _runMine() {
        this.mineCount++
        const part = this.petClient._body;
        const mineSpot = this.petClient.mineSpot!;
        const petIdx = this.petClient._body.GetAttribute("idx") as number

        const originalBodyPosP = part.BodyPosition.GetAttribute("P") as number;
        const originalBodyGyroP = part.BodyGyro.GetAttribute("P") as number;
        part.BodyPosition.P = 0;
        part.BodyGyro.P = 0;


        const originalCFrame = mineSpot.CFrame;
        part.CFrame = originalCFrame;

        const animationType = petIdx % 3;

        const restorePhysics = () => {
            delay(0.01, () => {
                part.BodyPosition.Position = originalCFrame.Position;
                part.BodyPosition.P = originalBodyPosP;
                part.BodyGyro.P = originalBodyGyroP;
                const dt = randInt(50, 100) / 100
                delay(dt, () => {
                    this.isMining = false;
                })
                if (this.mineCount % 2 === 0) {
                    Remotes.Client.Get("SendFossilDamage")
                        .SendToServer(this.petClient.mineSpot!.Parent! as BasePart, this.petClient._body)
                }
            });
        };

        if (animationType === 0) {
            const targetCFrame = originalCFrame.add(
                originalCFrame.LookVector.mul(HIT_OFFSET_STUD).add(new Vector3(0, -2, 0))
            );
            const lungeTween = TweenService.Create(part, LUNGE_TWEEN_INFO, { CFrame: targetCFrame });

            lungeTween.Completed.Connect(restorePhysics);
            lungeTween.Play();
        } else if (animationType === 1) {
            const targetWiggleLeft = originalCFrame.mul(CFrame.Angles(0, math.rad(-WIGGLE_ANGLE_DEG), 0));
            const tweenLeft = TweenService.Create(part, WIGGLE_TWEEN_INFO_STEP1, { CFrame: targetWiggleLeft });

            const targetWiggleRight = originalCFrame.mul(CFrame.Angles(0, math.rad(WIGGLE_ANGLE_DEG), 0));
            const tweenRight = TweenService.Create(part, WIGGLE_TWEEN_INFO_STEP1, { CFrame: targetWiggleRight });
            const tweenReturn = TweenService.Create(part, WIGGLE_TWEEN_INFO_STEP1, { CFrame: originalCFrame });

            tweenLeft.Completed.Connect(() => {
                tweenRight.Play();
            });
            tweenRight.Completed.Connect(() => {
                tweenReturn.Play();
            });
            tweenReturn.Completed.Connect(restorePhysics);
            tweenLeft.Play();
        } else {
            const targetCFrame = originalCFrame.add(new Vector3(0, JUMP_HEIGHT_STUD, 0));
            const jumpTween = TweenService.Create(part, JUMP_TWEEN_INFO, { CFrame: targetCFrame });
            jumpTween.Completed.Connect(restorePhysics);
            jumpTween.Play();
        }
    }
}

