import React from "@rbxts/react";
import { col } from "shared/help/assist";
import { ITEMS_CONFING } from "shared/help/DATA";
import { LBox, LHover, LImage, LLine, LPusher, LText } from "shared/ui/comps/Wrappers";
import { NTooltip } from "shared/ui/nitifications/NTooltip";
import { petsAtom } from "shared/signals/client_signals";
import { useAtom } from "shared/signals/atom";
import { icon } from "shared/help/icons";


export function InvFrameBody() {
    const _pets = useAtom(petsAtom)

    const petIcons = ITEMS_CONFING.filter(t => t.type === 'PETS').map(p => p.icon)

    const pets2 = [
        ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets,
        ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets,
        ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets, ..._pets,
    ]
    const pets = pets2
    // const pets = _pets

    return (
        <LBox isScroll Vert Pos={new UDim2(0.5, 0, 0.5, 0)} Size={new UDim2(1, 20, 0.95, 0)}
            AnchorPoint={new Vector2(0.5, 0.5)} Trans Spacing={new UDim(0, 20)} AutoCanvasSize="Y"
            TrackWidth={15} >
            <LPusher gapF={10} />
            <LLine Text={`<font color="#36393C">Your Best Pets </font><font color="#00BFFF">24/24</font>`}
                TextY={30} />
            <LPusher gapF={30} />
            <LBox Size={new UDim2(1, 0, 0, 0)} AutoSize="Y" Wraps HAlign="Center" Trans SortOrder="LayoutOrder">
                {pets.map((p, i) => {
                    return (
                        <LHover key={p.petConf.name + i} Size={new UDim2(1 / 7, -3, 0, 500)} Aspect={1}
                            Scale={1.08} LayoutOrder={i} >
                            <NTooltip data={{ kind: 'PET', petId: p.petConf.id }} >
                                <LBox Size={new UDim2(1, 0, 1, 0)} NoList Trans  >
                                    <LImage Size={new UDim2(1, 0, 1, 0)} Image={icon('pet')} />
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