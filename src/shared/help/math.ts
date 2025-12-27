import { RunService, TextService } from "@rbxts/services"

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

export const countMapToTuples = <T extends string | number,>(counts: Record<T, number>) => {
    const items = [] as [T, number][]
    for (const [_item, _count] of pairs(counts)) {
        const [item, count] = [_item as T, _count as number]
        items.push([item, count])
    }
    return items
}

export const listToMap = <T extends object,>(list: T[], key: keyof T) => {
    const map = {} as Record<string, T>
    for (const item of list) {
        map[(item as Record<string, string>)[key as string]] = item
    }
    return map
}

export const randSample = <T>(vals: T[]) => {
    const idx = randInt(0, vals.size() - 1);
    return vals[idx]
}

export function stringContains(haystack: string, needle: string): boolean {
    if (needle === "") {
        return true;
    }
    const [found] = haystack.lower().find(needle.lower(), 1, true);
    const res = found !== undefined;
    return res
}

export function getTextDimensions(text: string, fontSize: number, maxWidth: number = 10000): Vector2 {
    const frameSize = new Vector2(maxWidth, 10000);
    return TextService.GetTextSize(text, fontSize, Enum.Font.FredokaOne, frameSize);
}

export function setHeartbeatInterval(dur: number, callback: () => void): RBXScriptConnection {
    let accumulator = 0;

    return RunService.Heartbeat.Connect((dt) => {
        accumulator += dt;
        if (accumulator >= dur) {
            accumulator -= dur;
            callback();
        }
    });
}
