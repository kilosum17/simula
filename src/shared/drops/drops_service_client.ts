import { DropCollector } from "./drops_collector";

export class DropServiceClient {

    dropCollector: DropCollector

    constructor() {
        this.dropCollector = new DropCollector()
    }

}