import React from "@rbxts/react"
import { useEffect } from "@rbxts/react"
import { RunService } from "@rbxts/services"
import { col, getStageBoardPart } from "shared/help/assist"
import { shouldRebirth } from "shared/help/CONF"
import { getStageCostV2, icons } from "shared/help/DATA"
import { canNotAtom } from "shared/signals/atoms"
import { usePlayerAtts } from "shared/signals/player_attributes"
import { Remotes } from "shared/signals/remotes"
import { KButton } from "shared/ui/comps/KButton"
import { CostUI } from "shared/ui/comps/CostUI"
import { LBox, LImage, LPusher, LText, NButton } from "shared/ui/comps/Wrappers"

export const StageBoardOne = ({ stageNo }: {
    stageNo: number
}) => {
    const board = getStageBoardPart(stageNo)
    const { rebirth, progStage, coins } = usePlayerAtts({ rebirth: 0, progStage: 0, coins: 0 })
    const cost = getStageCostV2(stageNo, rebirth)
    const showBoard = stageNo >= (progStage + 2)

    const onBuyStage = () => {
        warn("Clicked buy", stageNo)
        if (coins < cost) {
            canNotAtom.update({ open: true, kind: "STAGE" })
            return
        }
        Remotes.Client.Get('BuyStage').SendToServer(stageNo - 1)
    }

    const onRebirthClicked = () => {
        warn("Clicked rebirth", stageNo)

    }

    useEffect(() => {
        board.CanCollide = showBoard
        if (RunService.IsStudio()) board.CanCollide = false
        board.Transparency = showBoard ? 0.1 : 1
    }, [progStage])

    const [showRebirth, newRebirthNo] = shouldRebirth(stageNo, rebirth)
    const rebirthNo = `Rebirth ${newRebirthNo}`
    // print("Render board", stageNo, showRebirth)

    if (showRebirth) {
        {/* REBIRTH UI */ }
        return (
            <LBox Size={new UDim2(1, 0, 1, 0)} Trans SpaceX={new UDim(0.2, 0)} NoList Visible={showBoard}
                AnchorPoint={new Vector2(0.5, 0.5)} MaxSize={new Vector2(600, 400)} Pos={new UDim2(0.5, 0, 0.5, 0)} >
                <LImage Image={icons.Tel_Rebirth} Size={new UDim2(1, 0, 0.8, 0)} Aspect />
                <LBox Trans Pos={new UDim2(0.5, 0, 0.5, 0)} AnchorPoint={new Vector2(0.5, 0)} Size={new UDim2(0.6, 0, 0.4, 0)} Vert HAlign="Center" >
                    <LText Text={rebirthNo} Size={new UDim2(0.8, 0, 0.4, 0)} Var="white" StrokeThickness={3} />
                    <LPusher gapS={0.01} />
                    <LText Text={`Tons of Rewards!`} Size={new UDim2(1, 0, 0.3, 0)} Var="yellow" StrokeThickness={3} />
                    <LPusher gapS={0.01} />
                    <NButton Text={'Rebirth!'} Var="green" Size={new UDim2(0.6, 0, 0.2, 0)}
                        onClick={onRebirthClicked} corner={4} Small MinSize={new Vector2(70, 25)} />
                </LBox>
            </LBox>
        )
    } else {
        {/* BUY UI */ }
        return (
            <LBox Size={new UDim2(1, 0, 1, 0)} Vert Center Trans SpaceX={new UDim(0.2, 0)} Visible={showBoard}
                AnchorPoint={new Vector2(0.5, 0.5)} MaxSize={new Vector2(600, 400)} Pos={new UDim2(0.5, 0, 0.5, 0)} >
                <LPusher gapS={0.05} />
                <LText Text={`Area ${stageNo}`} Size={new UDim2(1, 0, 0.25, 0)} Var="white" StrokeThickness={3} />
                <LPusher gapS={0.05} />
                <CostUI size={new UDim2(1, 0, 0.3, 0)} cost={cost} short />
                <LPusher gapS={0.05} />
                {/* <LButton Text="Buy Now" MouseClicked={MouseClicked} /> */}
                {/* <OldLButton Text="Buy Now" onClick={MouseClicked} Size={new UDim2(0.8, 0, 0.3, 0)} /> */}
                <KButton disabled={coins < cost} color="green" Size={new UDim2(0.5, 0, 0.3, 0)} onClick={onBuyStage} >
                    <LText StrokeThickness={3} Text="Buy" Color={col('white')} Size={new UDim2(0.8, 0, 0.8, 0)} />
                </KButton>
            </LBox >
        )
    }
}
