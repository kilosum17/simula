export const randInt = (min: number, max: number) => {
    return math.floor(math.random(min, max - 1))
}