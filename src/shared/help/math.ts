export const randInt = (min: number, max: number) => {
    return math.floor(math.random(min, max - 1))
}

export const listToCountMap = <T extends string | number,>(list: T[]): Record<T, number> => {
    const counts = {} as Record<T, number>
    for (const item of list) {
        counts[item] = (counts[item] || 0) + 1
    }
    return counts
}

export const countMapToList = <T extends string | number,>(counts: Record<T, number>): T[] => {
    const items = [] as T[]
    for (const [_item, _count] of pairs(counts)) {
        const [item, count] = [_item as T, _count as number]
        for (let i = 0; i < count; i++) {
            items.push(item)
        }
    }
    return items
}

export const randSample = <T>(val: T[]) => {
    const idx = math.random(0, val.size() - 1);
    return val[idx]
}
