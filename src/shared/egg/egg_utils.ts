import { ReplicatedStorage, Workspace } from "@rbxts/services"
import { getNewEggPrice } from "shared/help/assist"
import { getPlayerAtts } from "shared/signals/player_attributes"

export const isEggAvailable = (eggNo: number) => {
    return eggNo < 5
}



export const getEggState = (eggNo: number, player?: Player) => {
    const available = isEggAvailable(eggNo)
    const unlockedEggs = [...getPlayerAtts(player).eggs, 0, 1]
    const unlocked = unlockedEggs.includes(eggNo)
    const cost = getNewEggPrice(eggNo)
    const EGGS_NO = 17
    const eggIdx = eggNo % EGGS_NO
    const modelName = `Tier ${eggIdx + 1}`

    const petsList = [
        { id: 1, perc: 25 },
        { id: 2, perc: 25 },
        { id: 3, perc: 25 },
        { id: 4, perc: 25 },
    ]

    return { available, unlocked, cost, modelName, petsList }
}


export const getEggModel = (modelName: string) => {
    const eggsFold = ReplicatedStorage.instance.models.WaitForChild('Eggs')
    return eggsFold.WaitForChild(modelName) as BasePart
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
