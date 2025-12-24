import { useEffect, useRef, useState } from "@rbxts/react"
import { ReplicatedStorage } from "@rbxts/services"
import { LBox, LHover, LImage, LText } from "./Wrappers"
import { icon } from "shared/help/icons"
import { col } from "shared/help/assist"
import React from "@rbxts/react"
import { allPetIds, getPetConf, PetCatalog } from "shared/help/pet_catalog"
import { ModelViewer } from "./ModelViewer"

const PETS_FOLDER = ReplicatedStorage.instance.BoxPets

export const PetViewer = () => {
    const [idx, setIdx] = useState(1)
    const petConf = getPetConf(allPetIds[idx])!
    const { model_name } = petConf
    // PETS_FOLDER/model_name is the pet model
    const model = PETS_FOLDER.FindFirstChild(model_name)! as Model

    const move = (isNext: boolean) => {
        let newIdx = idx
        if (isNext) newIdx += 1
        else newIdx -= 1
        newIdx = math.clamp(newIdx, 1, allPetIds.size() - 1)
        setIdx(newIdx)
    }

    return (
        <LBox Center Size={new UDim2(1, 0, 1, 0)} Trans Background={col('white')} Padding={new UDim(0.05, 0)} >
            <LHover Size={new UDim2(0.1, 0, 0.1, 0)} Aspect={1} onClick={() => move(false)}  >
                <LText Text="PREV" Size={new UDim2(1, 0, 1, 0)} Color={col('blue_mid')} StrokeThickness={2} />
            </LHover>
            <LBox RandomBG Size={new UDim2(0.7, 0, 0.7, 0)} >
                <ModelViewer model={model} name={`${petConf.id}-${petConf.name}`} />
            </LBox>
            {/* <LImage Image={icon('egg_crack')} Size={new UDim2(0.6, 0, 0.6, 0)} /> */}
            <LHover Size={new UDim2(0.1, 0, 0.1, 0)} Aspect={1} onClick={() => move(true)}  >
                <LText Text="NEXT" Size={new UDim2(1, 0, 1, 0)} Color={col('blue_mid')} StrokeThickness={2} />
            </LHover>
        </LBox >
    )
}

