import { useEventListener } from "@rbxts/pretty-react-hooks"
import React, { Fragment, ReactNode, Ref, useEffect, useRef, useState } from "@rbxts/react"
import { createMotion, config } from "@rbxts/ripple"
import { Players, TweenService } from "@rbxts/services"
import { col, getMousePos, getPlayer } from "shared/help/assist"
import { BUY_IMG, colors, GPT_ICONS, icons } from "shared/help/DATA"
import { playSoundType } from "shared/help/play_sound"
import motion from "@rbxts/react-motion"
import { cursors, icon } from "shared/help/icons"

export type TChildren = '_jsx_children'

type TLBoxProps = {
    Size?: UDim2, Pos?: UDim2, CornerRadius2?: UDim,
    Trans?: boolean, Vert?: boolean, StrokeThickness?: number, StokeColor?: Color3,
    MaxSize?: Vector2, MinSize?: Vector2, BorderSizePixel?: number, ZIndex?: number, AutoSize?: 'X' | 'Y' | "XY",
    VAlign?: 'Center' | 'Top' | 'Bottom', HAlign?: 'Center' | 'Right' | 'Left', Padding?: UDim, Wraps?: boolean,
    Center?: boolean, Visible?: boolean, Background?: Color3, AnchorPoint?: Vector2,
    SpaceY?: UDim, SpaceX?: UDim, SpaceT?: UDim, SpaceB?: UDim, SpaceL?: UDim, SpaceR?: UDim,
    Spacing?: UDim, NoList?: boolean, TransVal?: number, Ref?: Ref<Frame>,
    Aspect?: number, isScroll?: boolean, RandomBG?: boolean,
    LayoutOrder?: number, SortOrder?: 'Name' | 'LayoutOrder', ScrollThickness?: number,
    children?: React.ReactNode,
    AutoCanvasSize?: "X" | "Y" | "XY",
    TrackWidth?: number,
    HoverEffect?: boolean,
    BgPatterns?: boolean,
}

export const LBox = (props: TLBoxProps) => {
    const { Size, Pos, Trans, Vert, StokeColor, StrokeThickness = 0, AutoSize, Aspect = 0,
        VAlign, HAlign, Padding, Center, Visible, Background, AnchorPoint, MaxSize, TransVal, Wraps,
        SpaceY, SpaceX, SpaceL, SpaceR, SpaceB, SpaceT, NoList = false, MinSize, BorderSizePixel, ZIndex, CornerRadius2,
        isScroll, SortOrder, LayoutOrder, ScrollThickness, RandomBG, Spacing, Ref,
        HoverEffect, BgPatterns,
    } = props

    const alignV = VAlign ? VAlign : (Center ? 'Center' : undefined)
    const alignH = HAlign ? HAlign : (Center ? 'Center' : undefined)
    const pt = Spacing || SpaceY || SpaceT;
    const pb = Spacing || SpaceY || SpaceB;
    const pl = Spacing || SpaceX || SpaceL;
    const pr = Spacing || SpaceX || SpaceR;
    const scaleRef = useRef<UIScale>()

    const scrollProps = {
        TopImage: icons.TopImage, ScrollBarThickness: props.TrackWidth ?? 6,
        BottomImage: icons.BottomImage,
        MidImage: icons.MidImage, ScrollBarImageColor3: col('black'),
        AutomaticCanvasSize: Enum.AutomaticSize.Y, CanvasSize: Size, ScrollingDirection: 'Y' as 'Y',
    }
    const children = <Fragment>
        {props.children as React.JSX.Element}
        <uistroke Enabled={StrokeThickness > 0} Thickness={StrokeThickness} Color={StokeColor} />
        {/* {CornerRadius > 0 && <uicorner CornerRadius={CornerRadius ? new UDim(0, CornerRadius) : CornerRadius2} />} */}
        {CornerRadius2 && <uicorner CornerRadius={CornerRadius2} />}
        {!NoList && <uilistlayout FillDirection={Vert ? 'Vertical' : 'Horizontal'} VerticalAlignment={alignV}
            HorizontalAlignment={alignH} Padding={Padding} Wraps={Wraps} SortOrder={SortOrder} />}
        {(MaxSize || MinSize) && <uisizeconstraint MaxSize={MaxSize} MinSize={MinSize} />}
        <uipadding PaddingTop={pt} PaddingBottom={pb} PaddingLeft={pl} PaddingRight={pr} />
        {!!Aspect && <uiaspectratioconstraint AspectRatio={Aspect} />}
        {HoverEffect && <uiscale ref={scaleRef} />}
    </Fragment>
    const bg = RandomBG ? BrickColor.random().Color : Background
    const bgTrans = RandomBG ? 0 : (TransVal ? TransVal : (Trans ? 1 : 0))
    if (isScroll) {
        return <scrollingframe  {...scrollProps}
            Size={Size} Position={Pos} BackgroundTransparency={bgTrans}
            Visible={Visible} BackgroundColor3={bg} AnchorPoint={AnchorPoint} BorderSizePixel={BorderSizePixel}
            ZIndex={ZIndex} AutomaticSize={AutoSize} LayoutOrder={LayoutOrder} ScrollBarThickness={ScrollThickness}
            AutomaticCanvasSize={"Y"}
        >
            {children}
        </scrollingframe>
    }
    const frameProps = {
        Size: Size, Position: Pos, BackgroundTransparency: bgTrans,
        Visible: Visible, BackgroundColor3: bg, AnchorPoint: AnchorPoint, BorderSizePixel: BorderSizePixel,
        ZIndex: ZIndex, AutomaticSize: AutoSize, LayoutOrder: LayoutOrder,
    }

    if (BgPatterns) {
        return (
            <imagelabel {...frameProps} ref={Ref as Ref<ImageLabel>} Image={icon('bg_patterns')} >
                {children}
            </imagelabel >
        )
    }
    return (
        <frame {...frameProps} ref={Ref}>
            {children}
        </frame >
    )
}

export const LHover = ({
    Size = new UDim2(1, 0, 1, 0), onClick, AnchorPoint,
    Pos, children, Aspect, Scale = 1.05, LayoutOrder,
}: {
    Size?: UDim2, Pos?: UDim2, children?: ReactNode, Aspect?: number,
    Scale?: number, LayoutOrder?: number, onClick?: () => void, sfx?: boolean,
    AnchorPoint?: Vector2,
}) => {
    const scalerRef = useRef<UIScale>()

    const playScale = (entered: boolean, isClick = false) => {
        const scaler = scalerRef.current!
        if (!scaler) return
        const ti = new TweenInfo(
            0.05 * (isClick ? 0.8 : 1),
            Enum.EasingStyle.Linear,
            Enum.EasingDirection.InOut
        )
        const tween = TweenService.Create(scaler, ti, {
            Scale: entered ? Scale : (isClick ? 0.9 : 1)
        })
        tween.Play()
        getPlayer().GetMouse().Icon = entered ? cursors.hand : cursors.arrow
        return tween
    }

    return (
        <LBox Trans Size={Size} Pos={Pos} Aspect={Aspect} LayoutOrder={LayoutOrder} AnchorPoint={AnchorPoint} Center >
            <imagebutton
                Event={{
                    MouseEnter: () => playScale(true),
                    MouseLeave: () => playScale(false),
                    MouseButton1Click: () => {
                        const tween = playScale(false, true)
                        tween?.Completed.Connect(() => {
                            playScale(true, true)
                        })
                        onClick?.()
                    }
                }}
                Size={new UDim2(1, 0, 1, 0)}
                BackgroundTransparency={1}
            >
                <uilistlayout HorizontalAlignment={"Center"} VerticalAlignment={"Center"} />
                <uiscale ref={scalerRef} />
                {children as React.JSX.Element}
            </imagebutton>
        </LBox>
    )
}

export const LScaler = (props: {
    Size?: UDim2,
    Position?: UDim2,
    Name?: string,
    Max?: number,
    onClick?: () => void,
    onRClick?: () => void,
    AnchorPoint?: Vector2,
    Active?: boolean,
    Visible?: boolean,
    LayoutOrder?: number,
    sfx?: boolean,
    MaxScale?: number,
    children: ReactNode,
}) => {
    const { Size, Position, Name, Max = 100000, onClick, onRClick, AnchorPoint,
        Active = true, Visible, LayoutOrder, sfx = true, MaxScale
    } = props
    const [scale, setScale] = useState(1)
    const [vis, setVis] = useState(false)
    const selected = () => {
        const m1 = createMotion(scale, { start: true })
        let max = 1.12
        if (MaxScale) {
            if (typeIs(MaxScale, 'number')) {
                max = MaxScale
            } else {
                max = MaxScale
            }
        }
        m1.linear(max, { speed: 32 })
        m1.onStep((val) => {
            setScale(val)
        })
        setVis(true)
    }
    const unselected = () => {
        const m1 = createMotion(scale, { start: true })
        m1.linear(1, { speed: 32 })
        m1.onStep((val) => {
            setScale(val)
        })
        setVis(false)
    }
    const Clicked = () => {
        if (!onClick) return
        const m1 = createMotion(0, { start: true })
        m1.spring(1.0, config.spring.wobbly)
        m1.onStep((val) => {
            setScale(val)
        })
        task.spawn(() => {
            if (sfx) {
                playSoundType({ ver: 'NAMED', name: 'click1', volume: 1 })
            }
            // task.wait(0.01)
            if (onClick) {
                onClick()
            }
        })
    }
    const clicked2 = () => {
        if (onRClick) {
            const m1 = createMotion(0, { start: true })
            m1.spring(1.0, config.spring.wobbly)
            m1.onStep((val) => {
                setScale(val)
            })
            onRClick()
        }
    }
    const showName = vis && !!Name
    return (
        <imagebutton Size={Size} Position={Position} BackgroundTransparency={1} AnchorPoint={AnchorPoint}
            Active={Active} Visible={Visible} LayoutOrder={LayoutOrder}
            Event={{
                MouseEnter: () => selected(),
                MouseLeave: () => unselected(),
                MouseButton1Click: () => Clicked(),
                MouseButton2Click: () => clicked2(),
            }} >
            {props.children}
            <textlabel Visible={showName} Text={Name} Position={new UDim2(0.5, -80, -0.32, 0)}
                FontSize={'Size18'} Size={new UDim2(0, 150, 0, 30)} AutomaticSize={'X'}
                BackgroundTransparency={1} TextXAlignment={'Center'} Font={'FredokaOne'}>
            </textlabel>
            <uiscale Scale={scale} />
            <uisizeconstraint MaxSize={new Vector2(Max, Max)} />
        </imagebutton>
    )
}

/*
export const CButton = ({ variant, Text, Size, onClick = () => undefined, blocky, small, Active,
    Stroke, Pad = 0, Visible,
}: {
    Text: string, Size?: UDim2, blocky?: boolean, small?: boolean,
    onClick?: () => void, variant: "cancel" | "confirm" | 'info', Active?: | boolean,
    Stroke?: number, Pad?: number, Visible?: boolean,
}) => {
    let BaseColor = colors.backdrop.base
    let StrokeColor = colors.backdrop.stroke
    let textColor = colors.backdrop.base
    if (variant === "cancel") {
        BaseColor = colors.deny.base
        StrokeColor = colors.deny.stroke
    }
    if (variant === 'confirm') {
        BaseColor = colors.confirm.base
        StrokeColor = colors.confirm.stroke
    }
    if (variant === "info") {
        textColor = colors.backdrop.stroke
    }
    return <LScaler onClick={() => onClick()} Size={Size || new UDim2(0.25, 0, 1, 0)} Active={Active} Visible={Visible} >
        <LCenter Size={new UDim2(1, 0, 1, 0)} >
            <textlabel Size={new UDim2(0.92, 0, 1, 0)} Font={'FredokaOne'}
                Text={Text} BackgroundColor3={BaseColor}
                TextScaled TextColor3={textColor}
            >
                <uicorner CornerRadius={new UDim(blocky ? 0.1 : 0.5, 0)} />
                <uistroke Color={StrokeColor} Thickness={small ? 2 : 4} ApplyStrokeMode={"Border"} />
                <uistroke Thickness={Stroke} />
                <uipadding PaddingLeft={new UDim(Pad, 0)} PaddingRight={new UDim(Pad, 0)} />
            </textlabel>
        </LCenter>
    </LScaler>
}
/*/

/*
export const CloseButton = ({ Size, Position, OnClick, zIndex }: { Size?: UDim2, Position?: UDim2, zIndex?: number, OnClick?: () => void }) => {
    return (
        <LScaler onClick={OnClick} Size={Size} Position={Position} >
            <imagelabel ZIndex={zIndex} Size={new UDim2(1, 0, 1, 0)}
                Image={icons.close} BackgroundTransparency={1} >
            </imagelabel>
        </LScaler>
    )
}
*/
/*
export const LSwitch = ({ Size, defState, onClick }: { Size?: UDim2, defState?: boolean, onClick?: (val: boolean) => void }) => {
    const [state, setState] = createBinding(defState)
    const clicked = () => {
        const newState = !state.getValue()
        setState(newState)
        if (onClick) {
            onClick(newState)
        }
    }
    return (
        <LBox Size={Size} >
            <LScaler onClick={clicked} Size={new UDim2(1, 0, 1, 0)} AnchorPoint={new Vector2(0.5, 0.5)}>
                <frame BackgroundColor3={state.map(s => s ? colors.sim.green : colors.sim.red)}
                    Size={new UDim2(0.5, 0, 1, 0)}
                    Position={state.map(s => new UDim2(s ? 0.5 : 0, 0, 0, 0))}
                >
                    <textlabel TextScaled Size={new UDim2(0.8, 0, 1, 0)} Position={new UDim2(0.1, 0, 0, 0)}
                        TextColor3={colors.backdrop.base} Text={state.map(p => p ? 'ON' : 'OFF')}
                        BackgroundTransparency={1}  >
                        <uistroke />
                    </textlabel>
                    <uistroke Thickness={2} />
                    <uicorner CornerRadius={new UDim(0, 5)} />
                </frame>
            </LScaler>
        </LBox>
    )
}
*/

/*
export const LScale = ({ Size, Pos, DraggerSize = 30, DefValue = 0.0, onChange }: {
    Size?: UDim2, Pos?: UDim2, DraggerSize?: number,
    onChange?: (val: number) => void, DefValue?: number,
}) => {
    const [scale, setScale] = createBinding(1)
    const [isDrag, setDrag] = createBinding(false)
    const frameRef = createRef<Frame>()
    const butRef = createRef<ImageButton>()
    const dragAction = (start: boolean) => {
        setDrag(start)
        const origin = start ? 1 : 0.8
        const finish = start ? 0.8 : 1
        const m1 = createMotion(origin)
        m1.spring(finish, config.spring.stiff)
        m1.onStep(v => setScale(v))
        m1.start()
        mouseMove()
    }
    const mouseMove = () => {
        if (!isDrag.getValue()) {
            return
        }
        const frame = frameRef.getValue()!
        const but = butRef.getValue()!
        const { X: fx, Y: fy } = frame.AbsolutePosition
        const { X: bx, Y: by } = but.AbsolutePosition
        const { X: fs } = frame.AbsoluteSize
        const delta = math.max(0, bx - fx)
        const ratio = delta / fs
        const pos = but.Position
        but.Position = new UDim2(pos.X.Scale, math.min(fs - 4, math.max(0, pos.X.Offset)), -0.1, 0)
        if (onChange) onChange(ratio)
    }
    return (
        <frame Size={Size} Ref={frameRef} Position={Pos} BackgroundTransparency={0.5} BackgroundColor3={colors.claw} >
            <imagebutton Position={new UDim2(DefValue, DraggerSize / 2, -0.1, 0)} Size={new UDim2(0, DraggerSize, 1.2, 0)}
                BackgroundColor3={colors.sim.green} Draggable Ref={butRef} AnchorPoint={new Vector2(0.5, 0)}
                Event={{
                    DragBegin: () => dragAction(true),
                    DragStopped: () => dragAction(false),
                    MouseMoved: () => mouseMove(),
                }} >
                <uistroke Thickness={2} />
                <uiscale Scale={scale} />
                <uicorner CornerRadius={new UDim(0, 5)} />
            </imagebutton>
        </frame>
    )
}
/*/

/*
export const LClickSlider = ({ Size, Pos, dragSize = new UDim2(0, 10, 0, 10), defValue = 0.5, marks, onChange, value }: {
    Size?: UDim2, Pos?: UDim2, dragSize?: UDim2, marks?: [number, number],
    onChange?: (val: number) => void, defValue?: number, value?:  ,
}) => {
    const frameRef = createRef<ImageButton>()
    const butRef = createRef<ImageButton>()
    const pos = createBinding(defValue)

    const onClick = () => {
        const frame = frameRef.getValue()!
        const x = getPlayer().GetMouse().X
        const xdif = x - frame.AbsolutePosition.X
        let ratio = xdif / frame.AbsoluteSize.X
        ratio = math.clamp(ratio, -0.01, 1.01)
        pos[1](ratio)
        if (onChange) onChange(ratio)
    }
    const val = value || pos[0]
    return (
        <imagebutton Size={Size} Ref={frameRef} Position={Pos} BackgroundTransparency={0.5} BackgroundColor3={colors.claw}
            Event={{
                MouseButton1Click: (e) => onClick()
            }}
        >
            <imagebutton Position={val.map(v => new UDim2(v, 0, 0.5, 0))} Size={dragSize}
                BackgroundColor3={colors.sim.green} Ref={butRef} AnchorPoint={new Vector2(0.5, 0.5)}
                Event={{
                    MouseButton1Click: () => onClick(),
                    DragBegin: () => {
                        MountQuickToast('Click instead of dragging!')
                    }
                }}
            >
                {marks && <LText Size={new UDim2(1, 0, 1, 0)} Text={val.map(p => math.ceil(marks[1] * p) + '')} />}
                <uistroke Thickness={2} />
                <uicorner CornerRadius={new UDim(0.2, 0)} />
            </imagebutton>
            {marks && (<>
                <LText Text={'' + marks[0]} Pos={new UDim2(0, 0, 0, 0)} Size={new UDim2(0, 0, 1.2, 0)} AutoSize="X" AnchorPoint={new Vector2(1, 0.5)} />
                <LText Text={'' + marks[1]} Pos={new UDim2(1, 0, 0, 0)} Size={new UDim2(0, 0, 1.2, 0)} AutoSize="X" AnchorPoint={new Vector2(0, 0.5)} />
            </>)}
        </imagebutton>
    )
}
/*/

/*
export const LSelect = ({ Size, defOption = '', options = [], onChange }: {
    Size?: UDim2, defOption?: string, options?: string[],
    onChange?: (opt: number, name: string) => void,
}) => {
    const [pos, setPos] = createBinding(options.findIndex(p => p.lower() === defOption.lower()) || 0)
    const clicked = () => {
        const newPos = (pos.getValue() + 1) % (options.size() - 0)
        setPos(newPos)
        if (onChange) {
            onChange(newPos, options[newPos])
        }
    }
    const color = pos.map(p => options[p] === 'warning' ? colors.sim.red : colors.sim.green)
    return (
        <LBox Size={Size} Trans >
            <LScaler onClick={clicked} Size={new UDim2(1, 0, 1, 0)}  >
                <textlabel Text={pos.map(p => options[p])}
                    Size={new UDim2(1, 0, 1, 0)} TextScaled TextColor3={colors.backdrop.base}
                    BackgroundColor3={color}>
                    <uistroke />
                    <uistroke ApplyStrokeMode={'Contextual'} Thickness={2} Color={BrickColor.Black().Color} />
                    <uicorner CornerRadius={new UDim(0, 5)} />
                </textlabel>
            </LScaler>
        </LBox>
    )
}
/*/

export const LCenter = (props: {
    Size?: UDim2, Pos?: UDim2, Background?: Color3,
    children: ReactNode,
}) => {
    const { Size = new UDim2(1, 0, 1, 0), Pos, Background } = props
    return (
        <frame Size={Size} Position={Pos} BackgroundColor3={Background} BackgroundTransparency={Background ? 0 : 1} >
            {props.children}
            <uilistlayout VerticalAlignment={'Center'} HorizontalAlignment={'Center'} />
        </frame>
    )
}

export const LTooltip = (props: {
    Size?: UDim2, Pos?: UDim2, Text: string, TextSize: UDim2,
    children: ReactNode,
}) => {
    const { Size, Pos, Text, TextSize } = props
    const [hover, setHover] = useState(false)
    const [pos, setPos] = useState(new UDim2())
    return (
        <frame Size={Size} Position={Pos} BackgroundTransparency={1}
            Event={{
                MouseEnter: () => {
                    setHover(true)
                },
                MouseLeave: () => {
                    setHover(false)
                },
                MouseMoved: (frame, x, y) => {
                    const pos = frame.AbsolutePosition
                    const mouse = getPlayer().GetMouse()
                    setPos(new UDim2(0, mouse.X - pos.X + 15, 0, mouse.Y - pos.Y + 20))
                },
            }} >
            {props.children}
            <textlabel Font={'FredokaOne'} Text={Text} ZIndex={100000} Size={TextSize} AutomaticSize="X"
                BackgroundColor3={BrickColor.White().Color} Position={pos}
                Visible={hover} >
                <uitextsizeconstraint MinTextSize={24} />
                <uistroke ApplyStrokeMode={Enum.ApplyStrokeMode.Border} Thickness={3} />
                <uipadding PaddingLeft={new UDim(0, 5)} PaddingRight={new UDim(0, 5)} />
                <uicorner CornerRadius={new UDim(0, 4)} />
            </textlabel>
        </frame>
    )
}

export const LPusher = ({
    gapS = 0, gapF = 0, Visible = true, LayoutOrder,
}: {
    gapS?: number, gapF?: number, Visible?: boolean, LayoutOrder?: number,
}) => {
    return <frame Size={new UDim2(gapS, gapF, gapS, gapF)} BackgroundTransparency={1}
        Visible={Visible} LayoutOrder={LayoutOrder} >
        <uiaspectratioconstraint AspectRatio={1} />
    </frame>
}

export const LText = ({
    Text, Var = 'black', Size, Pos, StrokeThickness = 0, StrokeColor, Align, AnchorPoint, RichText, ZIndex, Visible = true,
    TextSize = 0, AutoSize, Color, LayoutOrder, MaxSize = 0, MinSize = 0, Ref, Background, BorderSizePixel,
}: {
    Pos?: UDim2, Size?: UDim2,
    StrokeThickness?: number, StrokeColor?: Color3, Align?: 'Left' | 'Right' | 'Center',
    Text: string,
    Var?: 'black' | 'white' | 'blue' | 'green' | 'yellow' | 'gray' | 'red',
    AutoSize?: 'X' | 'Y' | 'XY',
    AnchorPoint?: Vector2,
    RichText?: boolean,
    ZIndex?: number,
    Visible?: | boolean,
    TextSize?: number,
    Color?: Color3,
    Background?: Color3,
    Font?: Font,
    LayoutOrder?: number, MaxSize?: number, MinSize?: number, Ref?: Ref<TextLabel>,
    BorderSizePixel?: number,
}) => {
    const color = (() => {
        if (Color) {
            return Color
        }
        if (Var === 'black') {
            return BrickColor.Black().Color
        }
        if (Var === 'gray') {
            return BrickColor.Gray().Color
        }
        if (Var === 'white') {
            return BrickColor.White().Color
        }
        if (Var === 'blue') {
            return colors.backdrop.stroke
        }
        if (Var === 'green') {
            return colors.tgreen.base
        }
        if (Var === 'yellow') {
            return BrickColor.Yellow().Color
        }
        if (Var === 'red') {
            return BrickColor.Red().Color
        }
    })()

    return <textlabel ref={Ref} Visible={Visible} Text={Text} TextColor3={color} Size={Size} Position={Pos} AnchorPoint={AnchorPoint} ZIndex={ZIndex}
        Font={'FredokaOne'}
        // Font={Enum.Font.F} 
        BorderSizePixel={BorderSizePixel}
        TextScaled={TextSize === 0} BackgroundTransparency={Background ? 0 : 1} TextXAlignment={Align} RichText={RichText} TextSize={TextSize}
        AutomaticSize={AutoSize} LayoutOrder={LayoutOrder} BackgroundColor3={Background} >
        {StrokeThickness > 0 && <uistroke Thickness={StrokeThickness} Color={StrokeColor} />}
        {(MaxSize > 0 || MinSize > 0) && <uitextsizeconstraint MaxTextSize={MaxSize} MinTextSize={MinSize} />}
    </textlabel>
}


export const LTextbox = ({
    Text, Size, Pos, StrokeThickness = 0, StrokeColor, Align, AnchorPoint, RichText, ZIndex, Visible = true,
    TextSize = 0, AutoSize, Color, LayoutOrder, MaxSize = 0, MinSize = 0, Ref, Placeholder, StrokeMode, CornerRadius,
}: {
    Pos?: UDim2, Size?: UDim2,
    StrokeThickness?: number, StrokeColor?: Color3, Align?: 'Left' | 'Right' | 'Center',
    Text: string,
    AutoSize?: 'X' | 'Y' | 'XY',
    AnchorPoint?: Vector2,
    RichText?: boolean,
    ZIndex?: number,
    Visible?: | boolean,
    TextSize?: number,
    Color?: Color3,
    Font?: Font,
    LayoutOrder?: number, MaxSize?: number, MinSize?: number,
    Ref?: Ref<TextBox>,
    Placeholder?: string,
    StrokeMode?: "Border" | "Contextual",
    CornerRadius?: UDim,
}) => {

    return (
        <textbox ref={Ref} Visible={Visible} Text={Text} TextColor3={Color} Size={Size} Position={Pos} AnchorPoint={AnchorPoint} ZIndex={ZIndex}
            Font={'FredokaOne'} TextScaled={TextSize === 0} BackgroundTransparency={1} TextXAlignment={Align} RichText={RichText} TextSize={TextSize}
            AutomaticSize={AutoSize} LayoutOrder={LayoutOrder} PlaceholderText={Placeholder}
        >
            {StrokeThickness > 0 && <uistroke Thickness={StrokeThickness} Color={StrokeColor} ApplyStrokeMode={StrokeMode} />}
            {(MaxSize > 0 || MinSize > 0) && <uitextsizeconstraint MaxTextSize={MaxSize} MinTextSize={MinSize} />}
            {CornerRadius && <uicorner CornerRadius={CornerRadius} />}
        </textbox>
    )
}

export const LButton = ({ Var, Size, Pos, KeepAspect = false, ZIndex, onClick, Visible }: {
    Pos?: UDim2, Size?: UDim2, KeepAspect?: boolean, ZIndex?: number,
    Var: 'YES' | 'NO' | 'SMALL_YES' | 'SMALL_NO',
    onClick?: () => void, Visible?: | boolean,
}) => {

    const image = (() => {
        if (Var === 'YES') {
            return icons.ButYes
        }
        if (Var === 'NO') {
            return icons.ButNo
        }
        if (Var === 'SMALL_YES') {
            return icons.ButSmallYes
        }
        if (Var === 'SMALL_NO') {
            return icons.ButSmallNo
        }
        return
    })()

    return (
        <LScaler Size={Size} Position={Pos} AnchorPoint={new Vector2(0.5, 0.5)} onClick={onClick} Visible={Visible} sfx={false} >
            <imagelabel Image={image} Size={new UDim2(1, 0, 1, 0)} Position={Pos} ZIndex={ZIndex}
                BackgroundTransparency={1} >
                {KeepAspect && <uiaspectratioconstraint />}
            </imagelabel>
        </LScaler>
    )
}

export const LHiders = ({ Size, Corners, Color, colors }: {
    Size: UDim2, Corners: ('BL' | 'BR' | 'TR' | 'TL')[], Color: Color3,
    colors?: { 'TL'?: Color3, 'TR'?: Color3, 'BL'?: Color3, 'BR'?: Color3 },
}) => {
    const getColor = (dir: 'BL' | 'BR' | 'TR' | 'TL') => {
        if (colors && colors[dir]) {
            return colors[dir]
        }
        return Color
    }
    return (
        <>
            {Corners.includes('TL') && <frame Size={Size} Position={new UDim2(0, 0, 0, 0)} AnchorPoint={new Vector2(0, 0)} BackgroundColor3={getColor('TL')} BorderSizePixel={0} />}
            {Corners.includes('TR') && <frame Size={Size} Position={new UDim2(1, 0, 0, 0,)} AnchorPoint={new Vector2(1, 0)} BackgroundColor3={getColor('TR')} BorderSizePixel={0} />}
            {Corners.includes('BL') && <frame Size={Size} Position={new UDim2(0, 0, 1, 0,)} AnchorPoint={new Vector2(0, 1)} BackgroundColor3={getColor('BL')} BorderSizePixel={0} />}
            {Corners.includes('BR') && <frame Size={Size} Position={new UDim2(1, 0, 1, 0)} AnchorPoint={new Vector2(1, 1)} BackgroundColor3={getColor('BR')} BorderSizePixel={0} />}
        </>
    )
}

export const LLine = ({ Size = new UDim2(1, 0, 0, 4), Text, TextY }: {
    Size?: UDim2, Text?: string, TextY?: number,
}) => {
    return (
        <imagelabel Size={Size} Image={icons.DivideImg}
            BackgroundTransparency={1}  >
            {Text && <LBox Size={new UDim2(1, 0, 1, 0)} Trans Center >
                <LText Size={new UDim2(0, 0, 0, TextY || 35)} AutoSize="X" RichText
                    Text={Text} Background={col('white')} BorderSizePixel={0}
                />
            </LBox>}
        </imagelabel>
    )
}


export const Tooltip = (props: { Text: string, Size?: UDim2, Position?: UDim2, children: React.ReactNode }) => {
    const [vis, setVis] = useState(false)
    const { Text, Size, Position } = props
    return (
        <frame Size={Size} Position={Position} BackgroundTransparency={1}
            Event={{
                MouseEnter: () => setVis(true),
                MouseLeave: () => setVis(false)
            }} >
            <>
                <frame Size={new UDim2(1, 0, 1, 0)} Position={new UDim2(0, 0, 0, 0)} BackgroundTransparency={1} >
                    {props.children}
                    <uigridlayout CellSize={new UDim2(1, 0, 1, 0)} />
                </frame>
                <LBox Visible={vis} Pos={new UDim2(0.5, 0, 0.5, 0)} AutoSize={'XY'} ZIndex={10}
                    Background={colors.backdrop.base} ScrollThickness={2} StokeColor={colors.backdrop.stroke}
                    CornerRadius2={new UDim(0, 5)} SpaceX={new UDim(0, 5)} SpaceY={new UDim(0, 5)} NoList >
                    <LText Text={Text} AnchorPoint={new Vector2(0.5, 0.5)} Pos={UDim2.fromScale(0.5, 0.5)}
                        Size={new UDim2(0, 0, 0, 40)} Var='black' ZIndex={10} TextSize={24} AutoSize="X" />
                </LBox>
            </>
        </frame>
    )
}



interface IProps {
    items: { key: string, val: unknown }[],
    getComp: (item: unknown, index: number, key?: string) => ReactNode,
    Size?: UDim2, Pos?: UDim2,
    addPadding?: boolean, NoScrollBar?: boolean, ypad?: number, NoScroll?: boolean,
    AutoSize?: 'X' | 'Y' | 'XY', LayoutOrder?: number, Ref?: Ref<ScrollingFrame>,
    children: ReactNode,
}

export function LLister<T>(props: IProps) {
    const childs = props.items.map((p, i) => props.getComp(p.val, i, p.key))

    const children = props.children
    const ypad = props.ypad || 0
    if (props.NoScroll) {
        return (
            <frame BackgroundTransparency={1} BorderSizePixel={0} AutomaticSize={props.AutoSize}
                Size={props.Size} Position={props.Pos} LayoutOrder={props.LayoutOrder} >
                {childs}
                {children}
                {props.addPadding && <uipadding PaddingTop={new UDim(0, 20)} PaddingBottom={new UDim(0, 20)} />}
                {ypad > 0 && <uipadding PaddingTop={new UDim(0, ypad)} PaddingBottom={new UDim(0, ypad)} />}
            </frame>
        )

    } else {
        return (
            <scrollingframe BackgroundTransparency={1} TopImage={icons.TopImage} BorderSizePixel={0} ScrollBarThickness={props.NoScrollBar ? 0 : undefined}
                BottomImage={icons.BottomImage} MidImage={icons.MidImage} ScrollBarImageColor3={colors.backdrop.stroke} AutomaticSize={props.AutoSize}
                Size={props.Size} Position={props.Pos} LayoutOrder={props.LayoutOrder}
                AutomaticCanvasSize={Enum.AutomaticSize.Y} CanvasSize={props.Size} ScrollingDirection={'Y'} ref={props.Ref} >
                {childs}
                {children}
                {props.addPadding && <uipadding PaddingTop={new UDim(0, 20)} PaddingBottom={new UDim(0, 20)} />}
                {ypad > 0 && <uipadding PaddingTop={new UDim(0, ypad)} PaddingBottom={new UDim(0, ypad)} />}
            </scrollingframe>
        )
    }
}

export const LImage = ({
    Pos, Size, Aspect, Image, Ref, ScaleType, MinSize, MaxSize, Child, ZIndex, CornerRadius, Rotation, Vis,
    AnchorPoint, Scale,
}: {
    Pos?: UDim2, Size?: UDim2, Aspect?: boolean, MinSize?: Vector2, MaxSize?: Vector2,
    Image: string, ScaleType?: Enum.ScaleType, Ref?: Ref<ImageLabel>,
    Child?: ReactNode, ZIndex?: number, CornerRadius?: UDim, Rotation?: number, Vis?: boolean,
    AnchorPoint?: Vector2, Scale?: number,
}) => {
    return (
        <imagelabel Image={Image} Size={Size} Position={Pos} BackgroundTransparency={1} ref={Ref}
            ScaleType={ScaleType} ZIndex={ZIndex} Rotation={Rotation} Visible={Vis}
            AnchorPoint={AnchorPoint} >
            {Aspect && <uiaspectratioconstraint />}
            <uisizeconstraint MinSize={MinSize} MaxSize={MaxSize} />
            <uicorner CornerRadius={CornerRadius} />
            {Scale && <uiscale Scale={Scale} />}
            {Child}
        </imagelabel>
    )
}

export const LPrice = ({ Pos, Size, cash }: { cash: string, Pos?: UDim2, Size?: UDim2, }) => {
    return (<LBox Size={Size} Pos={Pos} Trans Padding={new UDim(0, 10)} VAlign="Center"  >
        <imagelabel Image={GPT_ICONS.diamond} BackgroundTransparency={1} Size={new UDim2(0.1, 20, 1, 0)} >
            <uiaspectratioconstraint />
            <uisizeconstraint MinSize={new Vector2(20, 20)} />
        </imagelabel>
        <LText Text={cash} Var='white' StrokeThickness={2} AutoSize="X"
            Size={new UDim2(0.1, 0, 1, 0)} Align={'Left'} />
    </LBox >)
}

type NBTypes = 'green' | 'dark_green' | 'red' | 'gray'

export const NButton = ({ Pos, Size, Var, Large, Small, Text = '', ZIndex, onClick, corner, MinSize, MaxSize, Vis }: {
    Pos?: UDim2, Size?: UDim2, Var: NBTypes, Large?: boolean, Small?: boolean, Text?: string,
    ZIndex?: number, onClick?: () => void, corner?: number, MinSize?: Vector2, MaxSize?: Vector2, Vis?: boolean,

}) => {

    let color = Color3.fromHex('#7FF60E')
    if (Var === 'green') color = Color3.fromHex('#7FF60E')
    if (Var === 'dark_green') color = BrickColor.Green().Color
    if (Var === 'red') color = Color3.fromHex('#FF145C')
    if (Var === 'gray') color = Color3.fromHex('#99AED1')
    const corn = corner || (Large ? 12 : Small ? 4 : 8)
    return (
        <LScaler Position={Pos} Size={Size} onClick={onClick} AnchorPoint={new Vector2(0.5, 0.5)} sfx={false} Visible={Vis} >
            <LBox Size={new UDim2(1, 0, 1, 0)} Background={color} ZIndex={ZIndex}
                StrokeThickness={Large ? 4 : 2} CornerRadius2={new UDim(0, corn)} Center >
                <imagelabel Size={new UDim2(0.8, 0, 0.8, 0)} BackgroundTransparency={1}  >
                    <LText Size={new UDim2(1, 0, 1, 0)} Text={Text} Var="white" StrokeThickness={Large ? 3 : 2} ZIndex={ZIndex} />
                </imagelabel >
            </LBox >
            <uisizeconstraint MinSize={MinSize} MaxSize={MaxSize} />
        </LScaler>
    )
}


export const LRangeSelect = ({ min = 0, max = 100, defVal, onChange, dragSize = 20, Size, Pos, color = BrickColor.Green().Color }: {
    min?: number, max?: number, defVal: number,
    dragSize?: number, onChange?: (e: number) => void
    Size?: UDim2, Pos?: UDim2, color?: Color3,
}) => {
    const [val, setVal] = useState(defVal)
    const ref = useRef<ImageButton>()

    const clicked = () => {
        const { X, Y } = Players.LocalPlayer.GetMouse()
        const cont = ref.current
        if (cont) {
            const pos = cont.AbsolutePosition
            const size = cont.AbsoluteSize
            const val = (X - pos.X) / size.X
            setVal(val)
            if (onChange) onChange(val)
            print('clicked', val, X, Y, cont.AbsoluteSize)
        }
    }
    return (
        <imagebutton Size={Size} Position={Pos} Event={{ MouseButton1Click: clicked }} ref={ref}
            BackgroundTransparency={1}  >
            <frame Size={new UDim2(0, dragSize, 0, dragSize)} BackgroundColor3={color}
                Position={new UDim2(val, 0, 0.5, 0)} AnchorPoint={new Vector2(0.5, 0.5)} />
            <uistroke Thickness={2} />
        </imagebutton>
    )
}


export const OldLButton = ({ Text, Pos, onClick, Size = new UDim2(0.5, 0, 0.15, 0), img = BUY_IMG, Visible }: {
    Text: string, Pos?: UDim2, Size?: UDim2, img?: string, onClick?: () => void, Visible?: boolean
}) => {
    return (
        <LScaler Size={Size} Position={Pos} Visible={Visible} >
            <imagebutton Size={new UDim2(1, 0, 1, 0)} Image={img} Event={{ MouseButton1Click: onClick }}
                BackgroundTransparency={1} >
                <LCenter Size={new UDim2(1, 0, 1, 0)} >
                    <LText Text={Text} Size={new UDim2(0.8, 0, 0, 50)} Var='white' StrokeThickness={2} />
                </LCenter>
                <uicorner CornerRadius={new UDim(0.5, 0)} />
            </imagebutton>
        </LScaler>
    )
}


const BgColor = Color3.fromHex('#5CEDFF')
const GreenColor = Color3.fromHex('#71F308')
const GrayColor = Color3.fromHex('#BFC2DB')

export const RButton = ({ ver, Text, Size, Pos, Visible, onClick }: {
    onClick: () => void,
    ver: 'active' | "disabled", Text: string, Pos?: UDim2, Size?: UDim2,
    Visible?: boolean,
}) => {
    let color = BrickColor.Black().Color
    if (ver === 'active') {
        color = GreenColor
    }
    if (ver === 'disabled') {
        color = GrayColor
    }
    return (
        <LScaler Size={Size} Position={Pos} Visible={Visible} onClick={onClick} >
            <LBox Center Size={new UDim2(1, 0, 1, 0)} CornerRadius2={new UDim(0.1, 0)}
                Background={color} StrokeThickness={2} >
                <LText Text={Text} Size={new UDim2(0.9, 0, 0.9, 0)} Var="white" StrokeThickness={1} />
            </LBox>
        </LScaler>
    )
}

interface IRSProps {
    Size?: UDim2, Pos?: UDim2, defVal?: number,
    addPadding?: boolean, min: number, max: number,
    AnchorPoint?: Vector2,
    onChange?: (val: number) => void,
}
interface IRSState { val: number, count: number }

export function LRingSelect<T>(props: IRSProps) {
    const [isDown, setIsDown] = useState(false)
    const [startPos, setStartPos] = useState(Vector2.zero)
    const v = props.defVal ? (props.defVal / props.max) : 0
    const [state, setState] = useState({ val: v, count: 0 } as IRSState)
    const ref = useRef<ImageButton>()

    useEffect(() => {
        print('creating', props.defVal)
    }), []

    useEventListener(getPlayer().GetMouse().Move, () => {
        mouseMoved()
    })

    function mouseMoved() {
        const elem = ref.current
        if (!elem) return
        if (!isDown) return
        if (props.max === 1) return
        const pos = getMousePos()
        const center = elem.AbsolutePosition.add(elem.AbsoluteSize.div(2))
        const v1 = center.sub(center.add(new Vector2(0, -10))).Unit
        const v2 = center.sub(pos).Unit
        const dotProduct = v1.Dot(v2)
        const cosTheta = math.clamp(dotProduct, -1, 1)
        const angleRadians = math.acos(cosTheta)
        const angleDegrees = math.deg(angleRadians)
        const isLeft = (pos.X - center.X) < 0
        const realAngle = isLeft ? ((180 - angleDegrees) + 180) : angleDegrees
        const val = realAngle / 360
        setState({ ...state, val })
        if (props.onChange) {
            props.onChange(getNo(val))
        }
    }

    function getImages() {
        const total = 30
        const no = math.round(state.val * total)
        let angle = 0
        const childs = []
        for (let i = 0; i < no; i++) {
            const rot = angle
            const img = (
                <imagelabel Image={icons.RadialSector} Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={1}
                    BorderSizePixel={1} Rotation={rot} AnchorPoint={new Vector2(0.5, 0.5)}
                    Position={new UDim2(0.5, 0, 0.5, 0)} >
                </imagelabel>
            ) as ReactNode
            childs.push(img)
            angle += (360 / total)
        }
        // print('no', no, childs)
        return childs as ReactNode[]
    }

    function getNo(ratio: number) {
        return math.round((props.max - props.min) * ratio + props.min)
    }

    const { Size, Pos, min, max, AnchorPoint } = props
    const setDown = (val: boolean) => {
        setIsDown(val)
        setStartPos(getMousePos())
    }
    const clicked = () => {
        if (props.max === 1) {
            let count = 0
            if (state.count === 0) {
                count = 1
            } else {
                count = 0
            }
            if (props.onChange) {
                props.onChange(count)
            }
            setState({ ...state, count, val: count })
            print('click update')
        }
    }
    const no = getNo(state.val) || state.count
    const text = no > 0 ? no + '' : ''
    const showBG = no > 0 || state.count > 0
    const showCircl = showBG || props.max > 1
    const showStroke = isDown && props.max > 1
    return (
        <imagebutton Size={Size} Position={Pos} BackgroundTransparency={showBG ? 0.5 : 1} ref={ref} AnchorPoint={AnchorPoint}
            BackgroundColor3={BrickColor.Black().Color}
            Event={{
                MouseButton1Down: () => setDown(true),
                MouseButton1Up: () => setDown(false),
                MouseButton1Click: () => clicked()
            }}
        >
            <imagelabel Image={icons.RadialEmpty} Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={1}
                BorderSizePixel={1} Visible={showCircl} />
            <imagelabel />
            {/* <uiscale Scale={this.state.active ? 1.5 : 1} /> */}
            <LBox Size={new UDim2(1, 0, 1, 0)} Center Trans >
                <LText Text={text} Size={new UDim2(0.8, 0, 0.5, 0)} Var="white" StrokeThickness={2} />
            </LBox>
            <uicorner CornerRadius={new UDim(0.5, 0)} />
            <uistroke Color={BrickColor.Blue().Color} Thickness={showStroke ? 6 : 0} />
            {...getImages()}
        </imagebutton>
    )
}

export const LProgressBar = ({ val, Size, Pos }: {
    val: number, Size?: UDim2, Pos: UDim2,
}) => {
    const ColMagenta = Color3.fromHex('#6FEDFC')
    return (
        <frame BackgroundColor={BrickColor.Black()} BackgroundTransparency={0.5}
            Size={Size} Position={Pos} >
            <frame BackgroundColor3={ColMagenta} Size={new UDim2(val, 0, 1, 0)} >
                <uicorner CornerRadius={new UDim(0, 5)} />
            </frame>
            <LBox Size={new UDim2(1, 0, 1, 0)} Trans Padding={new UDim(0.2, -1)} Center >
                <frame BorderSizePixel={0} />
                {[0, 1, 2, 3].map(v => {
                    return (
                        <frame Size={new UDim2(0, 1, 0.7, 0)} BackgroundColor3={BrickColor.Black().Color} BorderSizePixel={0} />
                    )
                })}
                <frame BorderSizePixel={0} />
            </LBox>
            <uicorner CornerRadius={new UDim(0, 5)} />
            <uistroke Thickness={2} />
        </frame>
    )
}