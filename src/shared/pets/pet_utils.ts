import { Workspace } from "@rbxts/services";
import { getPlayer, placeTestPart } from "shared/help/assist";

export function weldModelParts(petModel: Model, networkOwner: Player, rotation: number): Part {
    const rootPart = new Instance("Part");
    rootPart.Name = "Root";
    rootPart.Size = new Vector3(1, 1, 1);
    rootPart.Transparency = 1;
    rootPart.CanCollide = false;
    rootPart.Anchored = false;
    rootPart.Massless = true;
    rootPart.CFrame = petModel.GetBoundingBox()[0];
    rootPart.CFrame = rootPart.CFrame.mul(CFrame.Angles(0, math.rad(rotation), 0))
    rootPart.Parent = petModel;
    petModel.PrimaryPart = rootPart;

    for (const part of petModel.GetDescendants()) {
        if (part.IsA("BasePart") && part !== rootPart) {
            part.CanCollide = false;
            part.Anchored = false;
            part.Massless = true

            const weld = new Instance("WeldConstraint");
            weld.Part0 = rootPart;
            weld.Part1 = part;
            weld.Parent = rootPart;
            part.SetNetworkOwner(networkOwner)
        }
    }

    return rootPart;
}


export const getPlayerPetsFolder = () => {
    const player = getPlayer()
    return Workspace.WaitForChild("PetStorage")?.WaitForChild(tostring(player.UserId))

}
