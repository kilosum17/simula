import { ReplicatedStorage, Workspace } from "@rbxts/services"
import { getNewEggPrice } from "shared/help/assist"
import { getPlayerAtts } from "shared/signals/player_attributes"

export const GridMaps = {
    1: [[0.5, 0.5]],
    2: [[0.25, 0.5], [0.75, 0.5]],
    3: [[0.25, 0.25], [0.75, 0.25], [0.5, 0.75]],
    4: [[0.25, 0.25], [0.75, 0.25], [0.25, 0.75], [0.75, 0.75]],
}

export const isEggAvailable = (eggNo: number) => {
    return eggNo < 5
}

export type TEggPetWeight = {
    id: number,
    perc: number,
}

export const getEggState = (eggNo: number, player?: Player) => {
    const available = isEggAvailable(eggNo)
    const unlockedEggs = [...getPlayerAtts(player).eggs, 0, 1]
    const unlocked = unlockedEggs.includes(eggNo)
    const eggCost = getNewEggPrice(eggNo)
    const EGGS_NO = 17
    const eggIdx = eggNo % EGGS_NO
    const modelName = `Tier ${eggIdx + 1}`

    const petsWeights = [
        { id: 1, perc: 25 },
        { id: 2, perc: 25 },
        { id: 3, perc: 25 },
        { id: 4, perc: 25 },
    ] as TEggPetWeight[]


    return { available, unlocked, eggCost, modelName, petsWeights }
}


export const getEggModel = (modelName: string) => {
    const eggsFold = ReplicatedStorage.instance.models.WaitForChild('Eggs')
    return eggsFold.WaitForChild(modelName) as BasePart
}

export function choosePetFromWeights(petsList: TEggPetWeight[]): number {
    let totalWeight = 0;
    for (const pet of petsList) {
        totalWeight += pet.perc;
    }
    const randomRoll = math.random() * totalWeight;
    let cumulativeWeight = 0;
    for (const pet of petsList) {
        cumulativeWeight += pet.perc;
        if (randomRoll <= cumulativeWeight) {
            return pet.id;
        }
    }
    return petsList[0].id;
}

export function getCameraWorldBounds(
    offset: number,
    depth = 0.1, // thickness of the "screen plane"
): { center: Vector3; size: Vector3 } {
    const camera = Workspace.CurrentCamera!;
    assert(camera !== undefined, "Camera not ready");

    const fovRad = math.rad(camera.FieldOfView);
    const aspect = camera.ViewportSize.X / camera.ViewportSize.Y;

    const height = 2 * offset * math.tan(fovRad / 2);
    const width = height * aspect;

    const center = camera.CFrame.Position.add(
        camera.CFrame.LookVector.mul(offset),
    );

    return {
        center,
        size: new Vector3(width, height, depth),
    };
}


export function getRelativeCenter(
    topLeft: Vector3,
    bottomRight: Vector3,
    scale: Vector2
): Vector3 {
    const camera = Workspace.CurrentCamera!;
    const camCF = camera.CFrame;

    // 1. Calculate the total width and height in world units
    // We use the dot product to find the distance along the camera's local axes
    const fullWidth = bottomRight.sub(topLeft).Dot(camCF.RightVector);
    const fullHeight = bottomRight.sub(topLeft).Dot(camCF.UpVector);

    // 2. Calculate the offset from Top-Left
    // Scale X moves along the RightVector
    const xOffset = camCF.RightVector.mul(fullWidth * scale.X);

    // Scale Y moves along the UpVector (multiplied by scale.Y)
    // Since scale.Y = 1 is "bottom", we move in the direction of fullHeight
    const yOffset = camCF.UpVector.mul(fullHeight * scale.Y);

    // 3. Combine
    return topLeft.add(xOffset).add(yOffset);
}

