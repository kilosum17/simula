export function weldModelToRoot(petModel: Model): Part {
    // 1. Create the new PrimaryPart (Root)
    const rootPart = new Instance("Part");
    rootPart.Name = "Root";
    rootPart.Size = new Vector3(1, 1, 1);
    rootPart.Transparency = 1; // Make it invisible
    rootPart.CanCollide = false; // Important: ensure pet doesn't block player
    rootPart.Anchored = false; 
    rootPart.Massless = true; // Optional: Makes welding have less impact on mass

    // 2. Set the initial position
    // Center the root part based on the model's current position
    rootPart.CFrame = petModel.GetBoundingBox()[0]; 
    rootPart.Parent = petModel;

    // 3. Set the PrimaryPart property (Crucial for later CFrame manipulation)
    petModel.PrimaryPart = rootPart;

    // 4. Weld all other parts to the new Root
    for (const part of petModel.GetDescendants()) {
        if (part.IsA("BasePart") && part !== rootPart) {
            
            // Turn off CanCollide and Anchored for all welded parts
            part.CanCollide = false;
            part.Anchored = false;

            // Create a WeldConstraint
            const weld = new Instance("WeldConstraint");
            weld.Part0 = rootPart;
            weld.Part1 = part;
            
            // Ensure the weld is parented somewhere logical
            weld.Parent = part; 
        }
    }

    // Return the root part so you can easily reference it for movement later
    return rootPart;
}

