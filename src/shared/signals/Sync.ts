import { useEffect, useState } from "@rbxts/react"
import Signal from "@rbxts/signal"


export class Sync<T> {
    data: T
    sig = new Signal()

    constructor(def: T) {
        this.data = def
    }

    update(newData: Partial<T>) {
        this.data = { ...this.data, ...newData }
        this.sig.Fire()
    }

    getHook() {
        return () => {
            const [store, setStore] = useState(this.data)

            useEffect(() => {
                this.sig.Connect(() => {
                    setStore(this.data)
                })
            }, [])

            return [store, this] as const
        }
    }
}