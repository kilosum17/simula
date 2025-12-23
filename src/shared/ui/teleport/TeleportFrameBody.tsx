import React, { useRef } from "@rbxts/react";
import { STAGE_TELEPORT_DATA } from "shared/help/DATA";
import { LBox, LEmpty, LHover, LImage, LLine, LPusher, LText } from "shared/ui/comps/Wrappers";
import { icon } from "shared/help/icons";
import { col } from "shared/help/assist";
import { usePlayerAtts } from "shared/signals/player_attributes";
import { getCellsData, TCellData } from "./teleport_utils";
import { teleport_to } from "./teleport_mover";
import { canNotAtom } from "shared/signals/atoms";
import { useFrameState } from "shared/signals/use_frame_state";
import { RunService } from "@rbxts/services";


export function TeleportFrameBody() {
    const stagesCount = STAGE_TELEPORT_DATA.size()
    const cols = 5
    const ref = useRef<Frame>()
    const { inStageNo } = usePlayerAtts({ inStageNo: 0, progStage: 0 })

    const cellsData = getCellsData(stagesCount)
    warn('Teleport cell data', cellsData, 'stage', inStageNo)

    return (
        <LBox isScroll Vert Pos={new UDim2(0.5, 0, 0.5, 0)} Size={new UDim2(1, 20, 0.95, 0)}
            AnchorPoint={new Vector2(0.5, 0.5)} Trans Spacing={new UDim(0, 20)} AutoCanvasSize="Y"
            TrackWidth={15} >
            <LPusher gapF={10} />
            <LBox Size={new UDim2(1, 0, 0, 0)} AutoSize="Y" Wraps HAlign="Center" VAlign="Center" Trans SortOrder="LayoutOrder"
                Ref={ref} >
                {cellsData.map((cell, i) => {
                    return <TeleportCell key={cell.idx} idx={i} colsNo={cols} cellsData={cellsData} />
                })}
            </LBox>
            <LPusher gapF={40} />
        </LBox>
    )
}

const TeleportCell = ({ idx, colsNo, cellsData }: {
    idx: number, colsNo: number, cellsData: TCellData[]
}) => {
    const { closeFrame } = useFrameState()
    const colsCount = colsNo * 2 - 1
    const data = cellsData[idx]
    const arrowSize = (1 / colsCount) * 0.4
    const cellSize = (1 - arrowSize * (colsNo - 1)) / colsNo
    const { inStageNo, progStage } = usePlayerAtts({ inStageNo: 0, progStage: 0 })
    let stageData = STAGE_TELEPORT_DATA[data.idx]
    const isExtra = !stageData
    stageData = isExtra ? STAGE_TELEPORT_DATA[0] : stageData
    const isActive = (inStageNo + 1) === stageData.no
    const isLocked = stageData.no > (progStage + 1)
    const noInfo = `#${stageData.no}`

    const gradient = (() => {
        if (isActive) return { start: col('blue_light'), end: col('blue_dark') }
        if (isLocked) return { start: col('gray_light'), end: col('gray_dark') }
        return { start: col('green_light'), end: col('green_dark') }
    })()

    const onTeleport = () => {
        if (isExtra) return
        if (isLocked && !RunService.IsStudio()) {
            canNotAtom.update({ kind: 'LOCKED_AREA', open: true })
            return
        }
        closeFrame('TELEPORT')
        task.spawn(() => {
            task.wait(0.5)
            teleport_to(stageData.no)
        })
    }

    // warn('Teleport cell render', idx)

    if (data.isArrow) {
        const size = data.isGap ? 1 / colsCount : arrowSize
        const pointDown = data.isGap && !data.hide
        const maxSize = 30
        const rotation = pointDown ? 90 : data.dirForward ? 0 : 180
        const vis = !data.hide
        const arrowSizeRatio = arrowSize / size
        return (
            <LBox Trans Size={new UDim2(size, -3, 0, 500)} Visible={!isExtra}
                Aspect={data.isGap ? 1.3 : 1} NoList LayoutOrder={idx}   >
                <LImage Image={icon('black_arrow')} Size={new UDim2(arrowSizeRatio, 0, 0.9, 0)} Aspect
                    Pos={new UDim2(0.5, 0, 0.5, 0)} AnchorPoint={new Vector2(0.5, 0.5)}
                    Vis={vis} Rotation={rotation}
                    MaxSize={new Vector2(maxSize, maxSize)}
                />
            </LBox >
        )
    }
    return (
        <LHover Size={new UDim2(cellSize, -3, 0, 500)} Aspect={1} Scale={1.08} LayoutOrder={idx}
            onClick={onTeleport} >
            <LBox Size={new UDim2(0.95, 0, 0.95, 0)} Vert StrokeThickness={4} Visible={!isExtra}
                CornerRadius2={new UDim(0.06, 0)} Background={col("white")} HAlign="Center" >
                <LPusher gapS={0.03} />
                <LText Text={noInfo} Size={new UDim2(0.85, 0, 0.25, 0)} StrokeThickness={1}
                    Color={col('white')} />
                <LLine />
                <LText Text={stageData?.name} Size={new UDim2(0.85, 0, 0.45, 0)} StrokeThickness={1}
                    Color={col('white')} />
                <uigradient Rotation={90} Color={new ColorSequence(gradient.start, gradient.end)} />
            </LBox>
        </LHover>
    )
}

