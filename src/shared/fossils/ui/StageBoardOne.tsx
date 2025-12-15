import React from "@rbxts/react"
import { useEffect } from "@rbxts/react"
import { RunService } from "@rbxts/services"
import { getStageBoardPart } from "shared/help/assist"
import { shouldRebirth } from "shared/help/CONF"
import { getStageCostV2, icons } from "shared/help/DATA"
import { formatNumber } from "shared/help/helpers"
import { CostUI } from "shared/ui/comps/CostUI"
import { LBox, LImage, LPusher, LText, NButton, OldLButton } from "shared/ui/comps/Wrappers"
import { usePlayerData } from "shared/ui/hooks/use_player_data"

export const StageBoardOne = ({ stageNo }: {
    stageNo: number
}) => {
    const board = getStageBoardPart(stageNo)
    const { rebirth, progStage } = usePlayerData()
    const cost = getStageCostV2(stageNo, rebirth)
    const amount = formatNumber(cost)
    const open = stageNo > progStage

    const MouseClicked = () => {
        // miner.buyStage(nextStage)
    }

    useEffect(() => {
        board.CanCollide = open
        if (RunService.IsStudio()) board.CanCollide = false
        board.CanQuery = false
        board.CanTouch = false
        board.Transparency = open ? 0.1 : 1
    }, [progStage])


    const [showRebirth, newRebirthNo] = shouldRebirth(stageNo, rebirth)
    const rebirthNo = `Rebirth ${newRebirthNo}`
    print("Show board", stageNo, showRebirth)
    if (showRebirth) {
        {/* REBIRTH UI */ }
        return (
            <LBox Size={new UDim2(1, 0, 1, 0)} Trans SpaceX={new UDim(0.2, 0)} NoList
                AnchorPoint={new Vector2(0.5, 0.5)} MaxSize={new Vector2(600, 400)} Pos={new UDim2(0.5, 0, 0.5, 0)} >
                <LImage Image={icons.Tel_Rebirth} Size={new UDim2(1, 0, 0.8, 0)} Aspect />
                <LBox Trans Pos={new UDim2(0.5, 0, 0.5, 0)} AnchorPoint={new Vector2(0.5, 0)} Size={new UDim2(0.6, 0, 0.4, 0)} Vert HAlign="Center" >
                    <LText Text={rebirthNo} Size={new UDim2(0.8, 0, 0.4, 0)} Var="white" StrokeThickness={3} />
                    <LPusher gapS={0.01} />
                    <LText Text={`Tons of Rewards!`} Size={new UDim2(1, 0, 0.3, 0)} Var="yellow" StrokeThickness={3} />
                    <LPusher gapS={0.01} />
                    <NButton Text={'Rebirth!'} Var="green" Size={new UDim2(0.6, 0, 0.2, 0)}
                        onClick={MouseClicked} corner={4} Small MinSize={new Vector2(70, 25)} />
                </LBox>
            </LBox>
        )
    } else {
        {/* BUY UI */ }
        return (
            <LBox Size={new UDim2(1, 0, 1, 0)} Vert Center Trans SpaceX={new UDim(0.2, 0)}
                AnchorPoint={new Vector2(0.5, 0.5)} MaxSize={new Vector2(600, 400)} Pos={new UDim2(0.5, 0, 0.5, 0)} >
                <LPusher gapS={0.05} />
                <LText Text={`Area ${stageNo}`
                } Size={new UDim2(1, 0, 0.25, 0)} Var="white" StrokeThickness={2} />
                <LPusher gapS={0.05} />
                <CostUI size={new UDim2(1, 0, 0.3, 0)} cost={cost} short />
                <LPusher gapS={0.05} />
                {/* <LButton Text="Buy Now" MouseClicked={MouseClicked} /> */}
                <OldLButton Text="Buy Now" onClick={MouseClicked} Size={new UDim2(0.8, 0, 0.3, 0)} />
            </LBox>
        )
    }
}
