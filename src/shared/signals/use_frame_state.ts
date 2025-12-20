import { useAtom } from "./atom"
import { frameStateAtom, TFrameKind } from "./atoms"

export const useFrameState = () => {
    const state = useAtom(frameStateAtom)

    const openFrame = (frame: TFrameKind) => {
        if (state.frame === frame) return
        frameStateAtom.update({ ...state, frame })
    }

    const closeFrame = (frame: TFrameKind) => {
        if (state.frame !== frame) return
        frameStateAtom.update({ ...state, frame: '' })
    }

    const getIsOpen = (frame: TFrameKind) => {
        return state.frame === frame
    }

    const toggleFrame = (frame: TFrameKind) => {
        if (state.frame === frame) {
            closeFrame(frame)
        } else {
            openFrame(frame)
        }
    }

    return {
        state, frame: state.frame, openFrame, getIsOpen,
        closeFrame, toggleFrame,
    }
}

