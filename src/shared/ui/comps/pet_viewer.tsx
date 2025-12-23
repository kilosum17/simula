import { useState } from "@rbxts/react"
import { ReplicatedStorage } from "@rbxts/services"
import { LBox, LHover, LImage, LText } from "./Wrappers"
import { icon } from "shared/help/icons"
import { col } from "shared/help/assist"
import React from "@rbxts/react"
import { getPetConf } from "shared/help/pet_catalog"

const PETS_FOLDER = ReplicatedStorage.instance.BoxPets

export const PetViewer = () => {
    const [idx, setIdx] = useState(1)
    const petConf = getPetConf(idx)!
    const { model_name } = petConf
    // PETS_FOLDER/model_name is the pet model

    const move = (isNext: boolean) => {
        let newIdx = idx
        if (isNext) newIdx + 1
        else newIdx--
        math.clamp(newIdx, 1, 45)
        setIdx(newIdx)
    }

    return (
        <LBox Center Size={new UDim2(1, 0, 1, 0)} Background={col('white')} >
            <LHover Size={new UDim2(0.05, 0, 0.05, 0)} Aspect={1} onClick={() => move(false)}  >
                <LText Text="PREV" Size={new UDim2(1, 0, 1, 0)} Color={col('blue_mid')} StrokeThickness={2} />
            </LHover>
            <LImage Image={icon('egg_crack')} Size={new UDim2(0.6, 0, 0.6, 0)} />
            <LHover Size={new UDim2(0.05, 0, 0.05, 0)} Aspect={1} onClick={() => move(true)}  >
                <LText Text="PREV" Size={new UDim2(1, 0, 1, 0)} Color={col('blue_mid')} StrokeThickness={2} />
            </LHover>
        </LBox>
    )
}