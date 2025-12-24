import { LBox, LPusher, LText } from "../comps/Wrappers";
import React from "@rbxts/react";
import { setPlayerAtts, usePlayerAtts } from "shared/signals/player_attributes";
import { TPlayerDataSettings } from "shared/player/player_utils";
import { KSwitch } from "../comps/KSwitch";
import { KSlider } from "../comps/KSlider";
import KSelect, { TSelectOption } from "../comps/KSelect";

type TSetting = {
    name: string,
    kind: 'slider' | 'switch' | 'select'
    key: keyof TPlayerDataSettings,
    options?: TSelectOption[],
}

const settings = [
    { name: 'Music', kind: 'slider', key: 'music' },
    { name: 'SFX', kind: 'slider', key: 'sfx' },
    { name: 'Show other pets', kind: 'switch', key: 'showOtherPets' },
    { name: 'Trading', kind: 'select', key: 'tradingType', options: [{ text: 'all' }, { text: 'none', red: true }] },
    { name: 'Pet SFX', kind: 'switch', key: 'petSfx' },
    { name: 'Notifications', kind: 'switch', key: 'showAlerts' },
    { name: 'Notification SFX', kind: 'switch', key: 'alertSfx' },
    { name: 'Mount Titans', kind: 'switch', key: 'mountTitans' },
    { name: 'Pets Follow Taps', kind: 'switch', key: 'petsFollowTaps' },
    { name: 'Show Boosts', kind: 'switch', key: 'showBoosts' },
    { name: 'Global Name Display', kind: 'switch', key: 'showGlobalNames' },
    { name: 'Show Next Area', kind: 'switch', key: 'showNextArea' },
    { name: 'Vibrations', kind: 'switch', key: 'vibrations' },
    { name: 'Player Profiles', kind: 'switch', key: 'showProfiles' },
] satisfies TSetting[] as TSetting[]

export function SettingsFrameBody() {
    return (
        <LBox isScroll Vert Pos={new UDim2(0.5, 0, 0.5, 0)} Size={new UDim2(1, 20, 0.95, 0)}
            AnchorPoint={new Vector2(0.5, 0.5)} Trans Spacing={new UDim(0, 20)} AutoCanvasSize="Y"
            TrackWidth={15} SortOrder="LayoutOrder" >
            {settings.map((set, i) => {
                return <>
                    <SettingsListRow key={set.name} setting={set} idx={i} />
                    <LPusher gapS={0.05} />
                </>
            })}
            <LPusher key='push2' gapF={250} LayoutOrder={settings.size()} NoAspect />
        </LBox>
    )
}

export const SettingsListRow = ({ setting, idx }: {
    setting: TSetting, idx: number,
}) => {

    const settings = usePlayerAtts({ settings: {} as TPlayerDataSettings }).settings

    const getVal = () => {
        return settings[setting.key]
    }

    const onSet = (val: boolean | string | number) => {
        warn("update trade with", setting.name, val)
        const newSettings = { ...settings }
        newSettings[setting.key as 'music'] = val as unknown as number
        setPlayerAtts({ settings: newSettings })
    }
    // warn("Setting", setting.name, getVal(), setting.key, settings)

    return (
        <LBox Size={new UDim2(1, 0, 0, 1000)} Aspect={7} Trans Center SpaceX={new UDim(0.025, 0)} >
            <LBox Size={new UDim2(1, 0, 0.85, 0)} Trans LayoutOrder={idx} Center >
                <LText Text={setting.name} Align="Left" Size={new UDim2(0.6, 0, 1, 0)}
                    MaxSize={50} />
                {setting.kind === 'switch' && (
                    <KSwitch size={new UDim2(0.4, 0, 1, 0)} val={getVal() as boolean} setVal={onSet} />
                )}
                {setting.kind === 'slider' && (
                    <KSlider size={new UDim2(0.4, 0, 0.5, 0)} val={getVal() as number} setVal={onSet} />
                )}
                {setting.kind === 'select' && (
                    <KSelect size={new UDim2(0.4, 0, 1, 0)} val={getVal() as string} setVal={onSet}
                        options={setting.options!} />
                )}
            </LBox>
        </LBox>
    )
}