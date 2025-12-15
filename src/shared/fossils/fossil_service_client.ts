import { StageBoards } from "./ui/StageBoards";
import { FossilBoards } from "./ui/FossilBoards";

export class FossilServiceClient {
    stageBoards: StageBoards
    fossilBoards: FossilBoards

    constructor() {
        this.stageBoards = new StageBoards()
        this.fossilBoards = new FossilBoards()

    }

}