import { GPT_ICONS, icons } from "shared/help/DATA"
import { PolicyService, UserInputService } from "@rbxts/services"
import { useEffect, useRef } from "@rbxts/react"
import { mineActionSignal } from "shared/signals/client_signals"
import { useEventListener } from "@rbxts/pretty-react-hooks"
import React from "@rbxts/react"
import { getPlayer, shakeUI } from "shared/help/assist"
import { LBox, LEmpty, LHover, LImage, LPusher } from "../comps/Wrappers"
import { CostUI } from "../comps/CostUI"
import { NTooltip } from "../nitifications/NTooltip"
import { getPlayerAtts, usePlayerAtts } from "shared/signals/player_attributes"
import { useFrameState } from "shared/signals/use_frame_state"
import { useSceenSize } from "shared/signals/use_screensize"


const items = [
    { name: "Teleport", icon: icons.tools_teleport2, key: Enum.KeyCode.T },
    { name: "Hoverboard", icon: icons.tools_hoverboard2, key: Enum.KeyCode.H },
    // { name: "Auto Hatch", icon: icons.ToolsLock, key: Enum.KeyCode.R },
    // { name: "Auto Farm", icon: icons.ToolsLock, key: Enum.KeyCode.F },
    { name: "Shop", icon: GPT_ICONS.shop, key: Enum.KeyCode.Y },
    { name: "Inventory", icon: icons.tools_inventory2, key: Enum.KeyCode.V },
    { name: "Trade", icon: GPT_ICONS.trade, key: Enum.KeyCode.B },
    { name: "Settings", icon: GPT_ICONS.settings, key: Enum.KeyCode.F },
    { name: "Rewards", icon: GPT_ICONS.gift_box, key: Enum.KeyCode.R },
]

let last_call = os.time()

export function LeftButtons() {
    const ref1 = useRef<UIScale>()
    const ref2 = useRef<UIScale>()
    const { toggleFrame } = useFrameState()
    const { coins: cash, gems } = usePlayerAtts({ coins: 0, gems: 0 })
    const { size } = useSceenSize()

    const isDesk = size.Y > 430
    const y = isDesk ? 0.35 : 0.15
    let shakeTween1 = undefined as Tween | undefined
    let shakeTween2 = undefined as Tween | undefined

    useEffect(() => {
        getPlayer().AttributeChanged.Connect((name) => {
            if (name === 'coins') {
                shakeTween1 = shakeUI(ref1.current, {})
                shakeTween2 = shakeUI(ref2.current, {})
                shakeTween1?.Play()
                shakeTween2?.Play()
            }
        })
    }, [])

    useEventListener(UserInputService.InputBegan, ((input, gpe) => {
        if (gpe) return
        for (const item of items) {
            if (item.key === input.KeyCode) {
                clicked(item.name)
                break
            }
        }
    }))

    const clicked = (name: string) => {
        const actions = {
            "Teleport": () => {
                toggleFrame('TELEPORT')
            },
            "Hoverboard": () => {
                // MainPager.setPage('CLOSED', false)
                //MainClient.syncher.sendNetEvent('toggle_hover')
            },
            "Auto Hatch": () => { },
            "Auto Farm": () => { },
            "Inventory": () => {
                toggleFrame("INV")
            },
            "Shop": () => {
                // MainPager.togglePage('SHOP')
            },
            'Settings': () => {
                // MainPager.togglePage('SETTINGS')
            },
            'Rewards': () => {
                // MainPager.togglePage('PLAY_REWARDS')
            },
            'Trade': () => {
                let tradeAllowed = false
                try {
                    const policy = PolicyService.GetPolicyInfoForPlayerAsync(getPlayer())
                    tradeAllowed = policy.IsPaidItemTradingAllowed
                } catch (e) {
                    warn('get trade policy failed')
                }
                if (tradeAllowed) {
                    // MainPager.togglePage('TRADING')
                } else {
                    // MainPopupManager.showInfo('❌ Oops!', '🚫 Trading paid items is restricted! 💰')
                }
            }
        } as { [key: string]: () => void }

        const longer = name === 'Hoverboard'
        if (os.time() - last_call < (longer ? 0.1 : -1)) {
            print('debounce')
            return
        }
        last_call = os.time()
        if (actions[name]) {
            actions[name]()
        }
    }
    if (getPlayerAtts().isCrackingEgg) {
        return <LEmpty />
    }
    return (
        <LBox Pos={new UDim2(0, 10, y, 0)} Size={new UDim2(0.22, 0, 0.7, 0)} Trans AnchorPoint={new Vector2(0, 0)}
            Vert Padding={new UDim(0.01, 0)} VAlign='Top' MinSize={new Vector2(130, 100)} MaxSize={new Vector2(250, 100000)}   >
            <LBox Trans Size={new UDim2(1, 0, 0, 0)} AutoSize="Y"
                Wraps HAlign="Left" VAlign="Center" MaxSize={new Vector2(1000, 500)} >
                {items.map(m => {
                    const text = `${m.name}[${m.key.Name}]`
                    return (
                        <LBox Size={new UDim2(0.3, -5, 0, 100)} Aspect={1} Trans Spacing={new UDim(0.05, 0)}
                            MinSize={new Vector2(45, 45)} MaxSize={new Vector2(75, 75)} >
                            <NTooltip data={{ kind: 'TEXT', text, maxSize: new Vector2(200, 10000) }}>
                                <LHover sfx={false} onClick={() => clicked(m.name)} >
                                    <LImage Image={m.icon} Size={new UDim2(1, 0, 1, 0)} Aspect />
                                </LHover>
                            </NTooltip>
                        </LBox>
                    )
                })}
            </LBox>
            <LPusher gapS={0.03} />
            <LBox Size={new UDim2(1, 0, 0.2, 0)} Vert MaxSize={new Vector2(1000, 130)} Trans >
                <LBox Size={new UDim2(1, 0, 0.5, 0)} Trans Center >
                    <LBox Size={new UDim2(1, 0, 1, 0)} Trans Padding={new UDim(0, 10)}   >
                        <CostUI isGems size={new UDim2(1, 0, 1, 0)} Align="Left" cost={gems} />
                        <uiscale ref={ref1} Scale={1} />
                    </LBox>
                </LBox >
                <LPusher gapS={0.05} />
                <LBox Size={new UDim2(1, 0, 0.5, 0)} Trans >
                    <LBox Size={new UDim2(1, 0, 1, 0)} Trans >
                        <CostUI size={new UDim2(1, 0, 1, 0)} Align="Left" cost={cash} />
                        <uiscale ref={ref2} Scale={1} />
                    </LBox>
                </LBox >
            </LBox>
        </LBox>
    )
}
