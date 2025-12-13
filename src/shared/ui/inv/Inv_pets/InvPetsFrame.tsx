import React from "@rbxts/react";
import { col } from "shared/help/assist";
import { ITEMS_CONFING } from "shared/help/DATA";
import { randSample } from "shared/help/math";
import { LBox, LHover, LImage, LLine, LPusher, LText, LTooltip } from "shared/ui/comps/Wrappers";
import { Workspace } from "@rbxts/services";
import { usePets } from "shared/ui/hooks/use_pets";
import { NTooltip } from "shared/ui/nitifications/NTooltip";

export function InvPetsFrame() {
    const [_pets] = usePets()
    const petIcons = ITEMS_CONFING.filter(t => t.type === 'PETS').map(p => p.icon)
    const model = Workspace.Arena.WaitForChild("BoxPets").WaitForChild('ant') as Model

    const pets2 = [
        ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets,
        ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets,
        ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets,
    ]
    // const pets = [_pets[0]]
    const pets = _pets

    return (
        <LBox isScroll Vert Pos={new UDim2(0.5, 0, 0.5, 0)} Size={new UDim2(1, 2, 1, 2)}
            AnchorPoint={new Vector2(0.5, 0.5)} Trans Spacing={new UDim(0.03, 0)} AutoCanvasSize="Y"
            TrackWidth={22} >
            <LPusher gapF={20} />
            <LLine Text={`<font color="#36393C">Your Best Pets </font><font color="#00BFFF">24/24</font>`}
                TextY={30} />
            <LPusher gapF={30} />
            <LBox Size={new UDim2(1, 0, 0, 0)} AutoSize="Y" Wraps HAlign="Center" Trans >
                {pets.map((p, i) => {
                    return (
                        <LHover key={p.petConf.name + i} Size={new UDim2(1 / 7, -3, 0, 500)} Aspect={1} Scale={1.08} >
                            <NTooltip pet={p.petConf} >
                                <LBox Size={new UDim2(1, 0, 1, 0)} NoList Trans  >
                                    <LImage Size={new UDim2(1, 0, 1, 0)} Image={randSample(petIcons)} />
                                    {/* <ModelViewport Size={new UDim2(1, 0, 1, 0)} model={model} /> */}
                                    <LText Pos={new UDim2(1, 0, 1, 0)} Size={new UDim2(1, 0, 0.3, 0)}
                                        AnchorPoint={new Vector2(1, 1)} Text="6.78t" Align="Right"
                                        StrokeThickness={2} Color={col('white')} />
                                </LBox>
                            </NTooltip>
                        </LHover>
                    )
                })}
            </LBox>
            <LPusher gapF={40} />
        </LBox>
    )
}