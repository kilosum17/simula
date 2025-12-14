import { RunService, Workspace } from "@rbxts/services";
import { PetsServiceClient } from "./pets_service_client";
import { getFossilsFolder, getHRP, getPlayer } from "shared/help/assist";
import { TPetBody } from "./pet";
import { PetBouncer } from "./pet_bouncer";
import { getPlayerPetsFolder } from "./pet_utils";
import { randSample } from "shared/help/math";

const rayParams = new RaycastParams()
const RAY_DIST = 20
const TWEEN_SERVICE = game.GetService("TweenService");
const HIT_OFFSET_STUD = 1.0; // Lunge distance
const WIGGLE_ANGLE_DEG = 10; // Wiggle rotation in degrees

// TweenInfo for the Lunge (Quick out, quick back)
const LUNGE_TWEEN_INFO = new TweenInfo(
    0.05, // Duration (Fast hit)
    Enum.EasingStyle.Cubic,
    Enum.EasingDirection.Out,
    0,
    true, // Reverses: True (automatically returns to start)
    0
);

// TweenInfo for the Wiggle (Slightly longer, elastic feel)
const WIGGLE_TWEEN_INFO = new TweenInfo(
    0.15, // Duration (Slightly slower for the bounce)
    Enum.EasingStyle.Elastic,
    Enum.EasingDirection.Out,
    0,
    true, // Reverses: True (automatically returns to start)
    0
);

export class PetClient {
    petsMover: PetsMover
    petCServ: PetsServiceClient
    petBouncher: PetBouncer
    _body: TPetBody
    _mineSpots = [] as Part[]
    mineSpot?: Part
    status = "FOLLOW" as "FOLLOW" | "GOMINE" | "MINING"
    goingToMine = false
    isMining = false

    constructor(petsMover: PetsMover, body: TPetBody) {
        this.petsMover = petsMover
        this.petCServ = petsMover.petCServ
        this._body = body
        this.petBouncher = new PetBouncer()

        RunService.RenderStepped.Connect(() => {
            this.update()
        })
    }

    startMining() {
        this.isMining = false
        this.goingToMine = false
        this.status = "GOMINE"
    }

    stopMining() {
        this.status = "FOLLOW"
    }

    update() {
        const pet = this._body
        const fosFold = getFossilsFolder(this.petsMover.stageNo)
        this._mineSpots = fosFold.GetDescendants()
            .filter(c => c.HasTag('spot')) as Part[]
        const bodyPos = pet.WaitForChild("BodyPosition") as BodyPosition
        const bodyGyro = pet.WaitForChild("BodyGyro") as BodyGyro
        const petIdx = (pet.GetAttribute("idx") || 0) as number
        const hrp = getHRP()
        if (this.status === "FOLLOW") {
            const frontPos = hrp.Position.add(hrp.CFrame.LookVector.mul(100))
            let pos = this.petCServ.petPos.pos[petIdx]
            pos = this._raycastPos(pet, pos)
            pos = this.petBouncher.update(pos, petIdx * 10000)
            bodyPos.Position = pos
            bodyGyro.CFrame = new CFrame(pos, frontPos)
        }

        if (this.status === "MINING") {
            if (this.isMining) {
                return
            }
            this.isMining = true
            this._mineOnce()
        }

        if (this.status === "GOMINE") {
            if (this.mineSpot && this.goingToMine) {
                const petPosXZ = new Vector3(pet.Position.X, 0, pet.Position.Z)
                const spotPosXZ = new Vector3(this.mineSpot.Position.X, 0, this.mineSpot.Position.Z)
                if (petPosXZ.sub(spotPosXZ).Magnitude < 0.2) {
                    warn("pet reached mine pos", this.mineSpot)
                    this.status = "MINING"
                }
                return
            }
            this.goingToMine = true
            this.mineSpot = this._chooseMineSpot()
            const frontPos = this.mineSpot.Position.add(this.mineSpot.CFrame.LookVector.mul(100))
            let pos = this.mineSpot.Position
            // pos = this._raycastPos(pet, pos)
            pos = this.petBouncher.update(pos, petIdx * 10000)
            bodyPos.Position = pos
            bodyGyro.CFrame = new CFrame(pos, frontPos)
        }

    }

    _chooseMineSpot() {
        const spots = this._mineSpots.filter(c => !c.GetAttribute('occupied'))
        if (spots.size() === 0) {
            warn("No free spots")
            return randSample(this._mineSpots)
        }
        return randSample(spots)
    }

    _mineOnce() {
        const primaryPart = this._body
        primaryPart.BodyGyro.P = 0
        primaryPart.BodyPosition.P = 0

        const originalCFrame = primaryPart.CFrame;
        let targetCFrame: CFrame;
        let tweenInfo: TweenInfo;

        const animationType = math.random(1, 2);
        if (animationType === 1) {
            targetCFrame = originalCFrame.add(
                originalCFrame.LookVector.mul(HIT_OFFSET_STUD)
            );
            tweenInfo = LUNGE_TWEEN_INFO;
        } else {
            targetCFrame = originalCFrame.mul(
                CFrame.Angles(0, math.rad(WIGGLE_ANGLE_DEG), 0)
            );
            tweenInfo = WIGGLE_TWEEN_INFO;
        }

        const hitTween = TWEEN_SERVICE.Create(
            primaryPart,
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
                primaryPart.BodyGyro.P = primaryPart.BodyGyro.GetAttribute("P") as number
                primaryPart.BodyPosition.P = primaryPart.BodyPosition.GetAttribute("P") as number
                task.wait(1)
                this.isMining = false
            })
        })
        warn("TWEEN playing", animationType)
        hitTween.Play();
    }

    _lastPos = new Vector3(0, math.huge, 0)
    _lastRes = new Vector3(0, math.huge, 0)
    _raycastPos(pet: TPetBody, targetPos: Vector3) {
        if (targetPos.sub(this._lastPos).Magnitude < 0.1) {
            return this._lastRes
        }
        this._lastPos = targetPos
        rayParams.FilterType = Enum.RaycastFilterType.Exclude
        const petsFolder = Workspace.FindFirstChild("PetStorage") || new Instance("Folder")
        rayParams.FilterDescendantsInstances = [pet, Workspace.Targets, petsFolder]
        const origin = targetPos.add(new Vector3(0, RAY_DIST, 0))
        const dir = new Vector3(0, -2 * RAY_DIST, 0)
        const raycastRes = Workspace.Raycast(origin, dir, rayParams)
        let resultPos = targetPos
        if (raycastRes) {
            resultPos = raycastRes.Position
        } else {
            warn("No floor", pet.Name)
        }
        this._lastRes = resultPos
        const currentVelocity = pet.AssemblyLinearVelocity
        if (currentVelocity.Y < -40) {
            pet.AssemblyLinearVelocity = new Vector3(currentVelocity.X, -40, currentVelocity.Z)
        }
        return resultPos
    }

}


export class PetsMover {
    petCServ: PetsServiceClient
    petBouncher: PetBouncer
    pets = [] as PetClient[]
    moverStatus = "FOLLOW" as "FOLLOW" | "GOMINE" | "MINING"
    stageNo = 0

    constructor(petCServ: PetsServiceClient) {
        this.petCServ = petCServ
        this.petBouncher = new PetBouncer()

        const fold = getPlayerPetsFolder()
        fold.GetChildren().forEach(c => {
            this.addPetClient(c as TPetBody)
        })
        fold.ChildAdded.Connect(c => this.addPetClient(c as TPetBody))
        fold.ChildRemoved.Connect(c => this.removePetClient(c as TPetBody))
    }

    addPetClient(petBody: TPetBody) {
        const pet = new PetClient(this, petBody)
        this.pets.push(pet)
    }

    removePetClient(petBody: TPetBody) {
        this.pets = this.pets.filter(p => p._body !== petBody)
    }

    enteredMine(stageNo: number) {
        this.stageNo = stageNo
        this.moverStatus = "GOMINE"
        this.pets.forEach(p => {
            p.startMining()
        })
    }

    leavingMine() {
        this.moverStatus = "FOLLOW"
        this.pets.forEach(p => {
            p.stopMining()
        })
    }

}