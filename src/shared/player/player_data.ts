import { DataStoreService } from "@rbxts/services";
import { PlayerService } from "./player_service";
import { deepClone, tableSize } from "shared/help/assist";
import { updateEquipedPets } from "shared/signals/server_signals";
import { PLAYER_DATA_DEF, TPlayerData } from "./player_utils";
import { setPlayerAtts } from "shared/signals/player_attributes";

const MAX_RETRIES = 3

const dataStore = DataStoreService.GetDataStore("PlayerData");

export class PlayerData {
    ps: PlayerService
    isLoading = false
    store = deepClone(PLAYER_DATA_DEF)

    constructor(ps: PlayerService) {
        this.ps = ps
        this.ps.player.SetAttribute("balance", 0)
        this.loadData()

        task.spawn(() => {
            task.wait(0.1)
            if (tableSize(this.store.petIds) === 0) {
                updateEquipedPets.Fire(this.ps.player, { '1': 1, '2': 1 })
            } else {
                updateEquipedPets.Fire(this.ps.player, this.store.petIds)
            }
        })
    }

    loadData(retries = 0) {
        try {
            this.isLoading = true
            const [dsData, _] = dataStore.GetAsync(this.getStoreKey())
            if (dsData) {
                this.store = { ...this.store, ...dsData }
                warn(`loaded data for ${this.ps.player.Name}`, dsData)
            }
        } catch (e) {
            warn('failed to load data', e)
            if (retries < MAX_RETRIES) {
                this.loadData(retries + 1)
            }
        }
        setPlayerAtts(this.store, this.ps.player)
        this.isLoading = false
    }

    saveData(retries = 0) {
        if (this.isLoading) return
        try {
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
        setPlayerAtts(this.store, this.ps.player)
    }

}
