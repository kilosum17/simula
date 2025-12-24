import { icon } from "shared/help/icons"

export type TImgKind = 'gray' | 'green' | 'red' | 'dark_green'

export const getImgKind = (color: TImgKind, disabled = false) => {
    if (disabled) return icon('gray_rec_but')
    if (color === "green") return icon('green_rec_but')
    if (color === "dark_green") return icon('darkgreen_rec_but')
    if (color === 'gray') return icon('gray_rec_but')
    return icon('red_rec_but')
}
