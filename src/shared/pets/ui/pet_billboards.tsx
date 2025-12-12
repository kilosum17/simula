import React, { useEffect, useState } from "@rbxts/react"
import { LBox, LText } from "shared/ui/comps/Wrappers"
import { TPetBody } from "../pet"
import { getPetConf } from "shared/help/pet_catalog"
import { getPlayerPetsFolder } from "../pet_utils"
import { createRoot, Root } from "@rbxts/react-roblox"
import { col } from "shared/help/assist"
import Signal from "@rbxts/signal"

interface PetBillboardProps {
    petName: string;
    petRank: string;
    id: string,
    sig: Signal<(val: boolean) => void>,
}

const PetBillboardUI: React.FC<PetBillboardProps> = ({ petName, petRank, id, sig }) => {
    const [vis, setVis] = useState(false)

    useEffect(() => {
        sig.Connect(val => {
            // print("Entered", petName, val)
            setVis(val)
        })
    }, [])

    return (
        <LBox Visible={vis} Size={new UDim2(1, 0, 1, 0)} Trans Vert >
            <LText
                Size={new UDim2(1, 0, 0.6, 0)}
                Text={`${petName} #${id}`}
                Color={col("blue")}
            // Font={Enum.Font.SourceSansBold}
            />
            <LText
                Size={new UDim2(1, 0, 0.4, 0)}
                Pos={new UDim2(0, 0, 0.5, 0)}
                Text={petRank}
                Color={Color3.fromHex("#00FF00")}
            // Font={Enum.Font.SourceSans}
            />
        </LBox>
    );
};

// --- Interface for managing the pet's UI lifecycle ---
interface PetUIRoot {
    root: Root;
    billboard: BillboardGui;
    connection: RBXScriptConnection;
}

const ActivePetUIs = new Map<TPetBody, PetUIRoot>();

export function attachPetBillboard(petRoot: TPetBody) {
    if (ActivePetUIs.has(petRoot)) {
        return;
    }

    const sig = new Signal<(bal: boolean) => void>()
    const clicker = new Instance("ClickDetector")
    clicker.Parent = petRoot.Model
    clicker.MouseHoverEnter.Connect(() => sig.Fire(true))
    clicker.MouseHoverLeave.Connect(() => sig.Fire(false))

    const conf = getPetConf(petRoot.GetAttribute('id') as number)!
    const billboardGui = new Instance("BillboardGui");
    billboardGui.Name = "PetNameTag";

    billboardGui.Size = new UDim2(0, 100, 0, 30);
    billboardGui.MaxDistance = 50;
    billboardGui.AlwaysOnTop = true;
    billboardGui.ExtentsOffset = new Vector3(0, 2, 0)

    billboardGui.Parent = petRoot.Root;

    const localRoot = createRoot(billboardGui);

    localRoot.render(
        <PetBillboardUI
            id={conf.id + ""}
            petName={conf.name}
            petRank={conf.rank}
            sig={sig}
        />
    );

    const connection = petRoot.Destroying.Connect(() => {
        cleanupPetBillboard(petRoot);
    });

    ActivePetUIs.set(petRoot, {
        root: localRoot,
        billboard: billboardGui,
        connection: connection
    });
}

export function cleanupPetBillboard(petRoot: TPetBody) {
    const uiData = ActivePetUIs.get(petRoot);
    if (uiData) {
        uiData.root.unmount();
        uiData.connection.Disconnect();
        uiData.billboard.Destroy();
        ActivePetUIs.delete(petRoot);
    }
}

const petsFold = getPlayerPetsFolder()
petsFold.GetChildren().forEach((pet) => {
    attachPetBillboard(pet as TPetBody)
})

petsFold.ChildAdded.Connect(pet => {
    attachPetBillboard(pet as TPetBody)
})

