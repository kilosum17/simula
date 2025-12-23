import { reverseList } from "shared/help/helpers"

export type TCellData = {
    idx: number, isArrow: boolean, dirForward: boolean,
    isGap?: boolean, hide?: boolean,
}

export const getCellsData = (count: number) => {
    const cols = 5
    const rows = math.ceil(count / cols)
    const colsCount = cols * 2 - 1
    // const extraCols = 

    const data = [] as TCellData[]
    let idx = 0
    let dirForward = true
    for (let i = 0; i < rows; i++) {
        const cells = []
        for (let j = 0; j < cols; j++) {
            cells.push({ idx, isArrow: false, dirForward })
            idx++
            if (j < cols - 1) {
                cells.push({ idx, isArrow: true, dirForward })
            }
        }
        if (dirForward) {
            cells.forEach(r => {
                data.push(r)
            })
        } else {
            const rcells = reverseList(cells)
            rcells.forEach(r => {
                data.push(r)
            })
        }
        if (i < rows - 1) {
            for (let j = 0; j < colsCount; j++) {
                const hide = !(!dirForward ? j === 0 : j === (colsCount - 1))
                data.push({ idx, isArrow: true, dirForward, isGap: true, hide, })
            }
        }
        dirForward = !dirForward
    }
    return data
}

