import { TweenService } from "@rbxts/services";

export function createOpenTween({ scaler, small }: { scaler: UIScale, small?: boolean }): Tween {
    const info = new TweenInfo(
        small ? 0.5 : 0.3,
        Enum.EasingStyle.Back,
        Enum.EasingDirection.Out
    );

    return TweenService.Create(scaler, info, { Scale: 1 });
}

export function createCloseTween({ scaler, small }: { scaler: UIScale, small?: boolean }): Tween {
    const info = new TweenInfo(
        small ? 0.22 : 0.15,
        Enum.EasingStyle.Quad,
        Enum.EasingDirection.In
    );
    return TweenService.Create(scaler, info, { Scale: 0 });
}

export function createEggPopTween(part: BasePart, targetSize: Vector3, startSize = Vector3.zero): Tween {
    part.Size = startSize;
    const info = new TweenInfo(
        0.2,
        Enum.EasingStyle.Back,
        Enum.EasingDirection.Out
    );
    return TweenService.Create(part, info, { Size: targetSize });
}

const REVEAL_TIME = 0.15;
const DROP_TIME = 0.15;

/**
 * Pops the pet up into view and scales it up.
 */
export function petRevealAnim(frame: Frame, scaleUi: UIScale, onComplete: () => void) {
    scaleUi.Scale = 0.5;
    frame.Position = new UDim2(0.5, 0, 3, 0);

    const info = new TweenInfo(REVEAL_TIME, Enum.EasingStyle.Back, Enum.EasingDirection.Out);

    const tween = TweenService.Create(frame, info, {
        Position: new UDim2(0.5, 0, 0.5, 0),
        Transparency: 1,
    });

    const scaleTween = TweenService.Create(scaleUi, info, {
        Scale: 1
    });

    tween.Play();
    scaleTween.Play();
    tween.Completed.Connect(onComplete)
}

/**
 * Drops the pet down and shrinks it away.
 */
export function petDropAnim(frame: Frame, scaleUi: UIScale, onComplete: () => void) {
    const info = new TweenInfo(DROP_TIME, Enum.EasingStyle.Quad, Enum.EasingDirection.In);

    const tween = TweenService.Create(frame, info, {
        Position: new UDim2(0.5, 0, 1.2, 0),
    });

    const scaleTween = TweenService.Create(scaleUi, info, {
        Scale: 0.5
    });

    tween.Play();
    scaleTween.Play();

    tween.Completed.Connect(() => {
        onComplete()
    });
}
