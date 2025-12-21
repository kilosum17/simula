import React, { useEffect, useRef, useState } from "@rbxts/react"
import { col } from "shared/help/assist"
import { getPetConf } from "shared/help/pet_catalog"
import { petDropAnim, petRevealAnim } from "shared/signals/animations"
import { useAtom } from "shared/signals/atom"
import { hatchedDropperAtom } from "shared/signals/atoms"
import { LBox, LImage, LText } from "shared/ui/comps/Wrappers"

const DropItem = ({ idx }: { idx: number }) => {
    const { cords, petIds } = useAtom(hatchedDropperAtom)
    const petConf = getPetConf(petIds[idx])!
    const cord = cords[idx]
    const cols = math.ceil(math.sqrt(cords.size()))
    const frameRef = useRef<Frame>()
    const scalerRef = useRef<UIScale>()
    const [vis, setVis] = useState(true)

    useEffect(() => {
        task.spawn(() => {
            petRevealAnim(frameRef.current!, scalerRef.current!, () => { })
            task.wait(4)
            petDropAnim(frameRef.current!, scalerRef.current!, () => {
                setVis(false)
                task.wait(0.2)
                hatchedDropperAtom.update({ cords, petIds, open: false })
            })
        })
    }, [])

    return (
        <LBox Pos={new UDim2(cord[0], 0, cord[1], 0)} AnchorPoint={new Vector2(0.5, 0.5)}
            Size={new UDim2(1 / cols, 0, 1 / cols, 0)} Trans NoList Visible={vis} >
            <LBox Ref={frameRef} Size={new UDim2(0.5, 0, 0.5, 0)} Trans NoList
                Pos={new UDim2(0.5, 0, 3, 0)} AnchorPoint={new Vector2(0.5, 0.5)} >
                <LImage Image={petConf.icon} Size={new UDim2(1, 0, 1, 0)} />
                <LText Text={petConf.name} Size={new UDim2(1, 0, 0.2, 0)}
                    Pos={new UDim2(0, 0, 1, 0)} AnchorPoint={new Vector2(0, 1)}
                    Color={col('white')} StrokeThickness={3} />
            </LBox>
            <uiscale ref={scalerRef} />
        </LBox>
    )
}

export const EggPetsRevealUI = () => {
    const { cords, open } = useAtom(hatchedDropperAtom)
    if (!open) {
        return <></>
    }
    return (
        <LBox NoList Size={new UDim2(1, 0, 1, 0)} Trans >
            {cords.map((_, i) => <DropItem idx={i} />)}
        </LBox>
    )
}