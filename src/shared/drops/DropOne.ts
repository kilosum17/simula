import { TweenService, ReplicatedStorage } from "@rbxts/services";
import { getDropsFolder } from "shared/help/assist";
import { icon } from "shared/help/icons";
import { DropsService } from "./DropsService";
import { getStageFromPos } from "shared/help/area_check_utils";

export type TDropKind = 'coin' | 'bag';

const BAG = ReplicatedStorage.public.models.WaitForChild('moneybag2') as BasePart

export class DropOne {
    body: BasePart;
    kind: TDropKind;
    billboard?: BillboardGui
    dropTime = os.time()
    dropServ: DropsService
    stageNo = 0

    constructor(pos: Vector3, kind: TDropKind, dropServ: DropsService) {
        this.kind = kind;
        this.dropServ = dropServ
        this.stageNo = getStageFromPos(pos).closeStageNo
        this.body = this.createVisuals(pos);
        this.body.SetAttribute('kind', kind)
        this.applyJump();
    }

    private createVisuals(pos: Vector3): BasePart {
        const dropFold = getDropsFolder(this.stageNo)
        if (this.kind === 'coin') {
            const part = new Instance("Part");
            part.Size = new Vector3(1, 1, 1);
            part.Transparency = 1;
            part.CanCollide = true;
            part.Position = pos;
            part.CollisionGroup = 'PET'
            part.AddTag('drop')
            part.Parent = dropFold
            this.creatBillboardUI(part, icon('gold_coin'))
            return part;
        } else {
            const bag = BAG.Clone()
            bag.CanCollide = true
            bag.CollisionGroup = 'PET'
            bag.AddTag('drop')
            bag.Position = pos;
            bag.Parent = dropFold
            return bag
        }
    }

    private applyJump() {
        // 1. Random Horizontal Direction
        const angle = math.rad(math.random(0, 360));
        const force = 10; // Horizontal distance
        const jumpHeight = 25; // Vertical pop
        const mult = this.kind === 'bag' ? 1.4 : 1.2

        const velocity = new Vector3(
            math.cos(angle) * force * mult,
            jumpHeight * mult,
            math.sin(angle) * force * mult
        );
        // 2. Apply Impulse
        this.body.Anchored = false;
        this.body.AssemblyLinearVelocity = velocity;

        // 3. Handle the "Bounce"
        const connection = this.body.Touched.Connect(() => {
            this.body.AssemblyLinearVelocity = this.body.AssemblyLinearVelocity.mul(new Vector3(0.5, 1.5, 0.5));
            connection.Disconnect(); // Only bounce once
            // task.wait(2)
            // if (!this.body.Parent) return
            // this.body.Anchored = true
            // this.body.CanCollide = false
        });
    }

    private jumpScripted(startPos: Vector3) {
        const randomOffset = new Vector3(math.random(-5, 5), 0, math.random(-5, 5));
        const targetPos = startPos.add(randomOffset);
        const peakHeight = startPos.Y + 6;

        // Use a simple quadratic Bezier or a sequence of Tweens
        // Part moves to peakHeight, then falls to targetPos
        const tweenUp = TweenService.Create(this.body, new TweenInfo(0.3, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), {
            Position: startPos.add(new Vector3(randomOffset.X / 2, peakHeight, randomOffset.Z / 2))
        });

        const tweenDown = TweenService.Create(this.body, new TweenInfo(0.3, Enum.EasingStyle.Bounce, Enum.EasingDirection.In), {
            Position: targetPos
        });

        tweenUp.Play();
        tweenUp.Completed.Connect(() => tweenDown.Play());
    }

    kill() {
        this.body.Destroy()
    }

    creatBillboardUI(part: BasePart, img: string) {
        const billbord = new Instance('BillboardGui', part) as BillboardGui & { image: ImageLabel }
        billbord.ExtentsOffset = new Vector3(0, 2, 0)
        billbord.Size = new UDim2(8, 0, 8, 0)
        billbord.AlwaysOnTop = false
        billbord.MaxDistance = 200;
        const image = new Instance('ImageLabel', billbord)
        image.Name = 'image'
        image.Image = img;
        image.BackgroundTransparency = 1;
        image.Size = new UDim2(0.22, 0, 0.22, 0);
        image.Position = new UDim2(0.5, 0, 0.5, 0);
        image.AnchorPoint = new Vector2(0.5, 0.5);
        this.billboard = billbord
    }

}