import React, { useState, useEffect } from "@rbxts/react";

export class Atom<T> {
    private value: T;
    private listeners: Set<(newValue: T) => void> = new Set();

    constructor(defaultValue: T) {
        this.value = defaultValue;
    }

    public get(): T {
        return this.value;
    }

    public update(newValue: T | ((prev: T) => T)): void {
        if (typeIs(newValue, "function")) {
            this.value = (newValue as (prev: T) => T)(this.value);
        } else {
            this.value = newValue;
        }

        // Notify all hooks to trigger a re-render
        for (const listener of this.listeners) {
            listener(this.value);
        }
    }

    public getHook(): () => T {
        return () => {
            const [state, setState] = useState(this.value);

            useEffect(() => {
                const callback = (val: T) => setState(val);
                this.listeners.add(callback);

                return () => {
                    this.listeners.delete(callback);
                };
            }, []);

            return state;
        };
    }
}