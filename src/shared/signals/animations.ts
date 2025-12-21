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