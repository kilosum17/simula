import { col } from "shared/help/assist";
import type { Fossil } from "./fossil";

const PET_STANDING_DISTANCE = 2;
const SPOT_SPACING_STUD_GOAL = 4;

export class FossilMiningSpots {
    fossil: Fossil

    constructor(fossil: Fossil) {
        this.fossil = fossil
    }

    add_mining_spots() {
        const center = this.fossil.pos
        const mesh = this.fossil.mesh

        for (const c of mesh.GetChildren()) {
            if (c.HasTag("spot") && c.IsA("Part")) {
                c.Destroy();
            }
        }

        const size = mesh.Size;
        const dropRadius = math.max(size.X, size.Z) / 2;
        const placementRadius = dropRadius + PET_STANDING_DISTANCE;

        const circumference = 2 * math.pi * placementRadius;
        const spots = math.floor(circumference / SPOT_SPACING_STUD_GOAL);

        const numSpots = math.max(4, spots);
        const angularStep = 2 * math.pi / numSpots;

        for (let i = 0; i < numSpots; i++) {
            const angle = i * angularStep;
            const offsetX = placementRadius * math.cos(angle);
            const offsetZ = placementRadius * math.sin(angle);

            const spotPosition = center.add(new Vector3(offsetX, 0, offsetZ));
            const part = new Instance("Part");
            part.Name = `MiningSpot${i}`;
            part.Size = new Vector3(2, 2, 2); // Small marker size
            part.CanCollide = false;
            part.Anchored = true
            // part.Transparency = 1;
            part.Color = col('random')

            const cframe = CFrame.lookAt(spotPosition, center);
            part.CFrame = cframe
            part.Parent = mesh;
            part.SetAttribute("occupied", false);
            part.SetAttribute("no", i);
            part.AddTag("spot");
        }

    }
}