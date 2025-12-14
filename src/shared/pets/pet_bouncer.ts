
export class PetBouncer {
    private readonly BOUNCE_Y = 1.4;
    private readonly BOUNCE_FREQUENCY = 4.5;

    update(pos: Vector3, offset: number) {
        // give each pet unique bounce frequencies
        const df = (offset % 21) / 10 + this.BOUNCE_FREQUENCY
        const time = os.clock() + offset;
        const offSet = (math.sin(time * df) + 1) * 0.5 * this.BOUNCE_Y;
        return new Vector3(pos.X, pos.Y + offSet, pos.Z)
    }
}
