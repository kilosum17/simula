import { DataStoreService } from "@rbxts/services";
import { PlayerService } from "./player_service"
import { encodedAttribute } from "shared/help/assist";

const MAX_RETRIES = 3

type TPlayerData = {
    name: string,
    coins: number,
    gems: number,
    progStage: number,
    rebirth: number,
    eggs: number[],
}

const PLAYER_DATA_DEF = {
    name: '',
    coins: 0,
    gems: 0,
    progStage: 0,
    rebirth: 0,
    eggs: [],
} satisfies TPlayerData as TPlayerData

const dataStore = DataStoreService.GetDataStore("PlayerData");

export class PlayerData {
    ps: PlayerService
    isLoading = false
    store = PLAYER_DATA_DEF

    constructor(ps: PlayerService) {
        this.ps = ps
        this.ps.player.SetAttribute("balance", 0)
        this.loadData()

    }

    loadData(retries = 0) {
        try {
            this.isLoading = true
            warn(`Loading player data for ${this.ps.player.Name}`, this.store);
            const [dsData, _] = dataStore.GetAsync(this.getStoreKey())
            if (dsData) {
                this.store = { ...this.store, ...dsData }
                warn(`loaded data for ${this.ps.player.Name}`)
            }
        } catch (e) {
            warn('failed to load data', e)
            if (retries < MAX_RETRIES) {
                this.loadData(retries + 1)
            }
        }
        this.updatePlayerAtts()
        this.isLoading = false
    }

    saveData(retries = 0) {
        if (this.isLoading) return
        try {
            warn(`Saving player data for ${this.ps.player.Name}`, this.store);
            dataStore.SetAsync(this.getStoreKey(), this.store)
            warn(`Saved data for ${this.ps.player.Name}`, this.store);
        } catch (e) {
            warn(`Failed to save data for ${this.ps.player.Name}`, e);
            if (retries < MAX_RETRIES) {
                this.saveData(retries + 1)
            }
        }
    }

    private getStoreKey() {
        return `v1_ ${this.ps.player.UserId}`
    }

    update(data: Partial<TPlayerData>) {
        for (const [key, val] of pairs(data)) {
            this.updateOne(key, val)
        }
    }

    updateOne<T extends keyof TPlayerData>(key: T, val: TPlayerData[T]) {
        if (this.isLoading) return
        this.store[key] = val
        this.updatePlayerAtts()
    }

    updatePlayerAtts() {
        for (const [key, val] of pairs(this.store)) {
            this.ps.player.SetAttribute(key, encodedAttribute(val))
        }
    }
}