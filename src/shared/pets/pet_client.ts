import { RunService, Workspace } from "@rbxts/services"
import { TPetBody } from "./pet"
import { PetsMover } from "./pets_mover"
import { PetsServiceClient } from "./pets_service_client"
import { PetBouncer } from "./pet_bouncer"
import { getFossilsFolder, getHRP } from "shared/help/assist"
import { randSample } from "shared/help/math"
import { PetMineActions } from "./pet_mine_actions"
import { Remotes } from "shared/signals/remotes"

const rayParams = new RaycastParams()
const RAY_DIST = 15

export class PetClient {
    petsMover: PetsMover
    petCServ: PetsServiceClient
    petBouncher: PetBouncer
    petMineActions: PetMineActions
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
        this.petMineActions = new PetMineActions(this)

        let i = 0
        RunService.Heartbeat.Connect(() => {
            i++
            if (i % 6 === 0) {
                this.update()
            }
        })
    }

    startMining() {
        this.petMineActions.resetState()
        this.goingToMine = false
        this.status = "GOMINE"
    }

    stopMining() {
        this.status = "FOLLOW"
        if (this.mineSpot) {
            Remotes.Client.Get("SetAttribute").SendToServer(this.mineSpot, "occupied", false)
        }
    }

    update() {
        const pet = this._body
        const fosFold = getFossilsFolder(this.petsMover.stageNo)
        this._mineSpots = fosFold.GetDescendants()
            .filter(c => c.HasTag('spot')) as Part[]
        const petIdx = (pet.GetAttribute("idx") || 0) as number
        const hrp = getHRP()
        if (this.status === "FOLLOW") {
            const frontPos = hrp.Position.add(hrp.CFrame.LookVector.mul(100))
            let pos = this.petCServ.petPos.pos[petIdx]
            pos = this._raycastPos(pet, pos)
            pos = this.petBouncher.update(pos, petIdx * 10000)
            pet.BodyPosition.Position = pos
            pet.BodyGyro.CFrame = new CFrame(pos, frontPos)
        }

        if (this.status === "MINING") {
            this.petMineActions.mineOnce()
        }

        if (this.status === "GOMINE") {
            if (this.mineSpot && this.goingToMine) {
                const petPosXZ = new Vector3(pet.Position.X, 0, pet.Position.Z)
                const spotPosXZ = new Vector3(this.mineSpot.Position.X, 0, this.mineSpot.Position.Z)
                if (petPosXZ.sub(spotPosXZ).Magnitude < 0.2) {
                    this.status = "MINING"
                }
                return
            }
            this.goingToMine = true
            this.mineSpot = this._chooseMineSpot()
            Remotes.Client.Get("SetAttribute").SendToServer(this.mineSpot, "occupied", true)

            const frontPos = this.mineSpot.Position.add(this.mineSpot.CFrame.LookVector.mul(100))
            let pos = this.mineSpot.Position
            pos = this.petBouncher.update(pos, petIdx * 10000)
            pet.BodyPosition.Position = pos
            pet.BodyGyro.CFrame = new CFrame(pos, frontPos)
        }

    }

    freePart = new Instance('Part')
    _chooseMineSpot() {
        const spots = this._mineSpots.filter(c => !c.GetAttribute('occupied'))
        if (spots.size() === 0) {
            warn("No free spots")
            return randSample(this._mineSpots)
        }
        return randSample(spots)
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
        const origin = new CFrame(targetPos.add(new Vector3(0, RAY_DIST, 0)))
        const dir = new Vector3(0, -2 * RAY_DIST, 0)
        const raycastRes = Workspace.Blockcast(origin, new Vector3(2.8, 2.8, 2.8), dir, rayParams)
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

