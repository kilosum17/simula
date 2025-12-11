
export class PetBouncer {
    private readonly BOUNCE_Y = 1.25;
    private readonly BOUNCE_FREQUENCY = 4.5;

    update(pos: Vector3, offset: number) {
        const time = os.clock() + offset;
        const offSet = (math.sin(time * this.BOUNCE_FREQUENCY) + 1) * 0.5 * this.BOUNCE_Y;
        return new Vector3(pos.X, pos.Y + offSet, pos.Z)
    }
}
