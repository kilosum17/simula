import { useCallback } from "@rbxts/react"
import { useAtom } from "./atom"
import { frameStateAtom, TFrameKind } from "./atoms"

export const useFrameState = () => {
    const state = useAtom(frameStateAtom)

    const openFrame = useCallback((frame: TFrameKind, isLock?: boolean) => {
        if (state.isLock) return
        if (state.frame === frame) return
        frameStateAtom.update({ ...state, frame, isLock })
    }, [state])

    const closeFrame = useCallback((frame: TFrameKind) => {
        if (state.frame !== frame) return
        frameStateAtom.update({ ...state, frame: '', isLock: false })
    }, [state])

    const getIsOpen = useCallback((frame: TFrameKind) => {
        return state.frame === frame
    }, [state])

    const toggleFrame = useCallback((frame: TFrameKind) => {
        if (state.frame === frame) {
            closeFrame(frame)
        } else {
            openFrame(frame)
        }
    }, [state])

    return {
        state, frame: state.frame, openFrame, getIsOpen,
        closeFrame, toggleFrame,
    }
}

