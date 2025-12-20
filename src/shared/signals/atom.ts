import React, { useState, useEffect } from "@rbxts/react";

export class Atom<T> {
    _value: T;
    _listeners: Set<(newValue: T) => void> = new Set();

    constructor(defaultValue: T) {
        this._value = defaultValue;
    }

    public get(): T {
        return this._value;
    }

    public update(newValue: T | ((prev: T) => T)): void {
        if (typeIs(newValue, "function")) {
            this._value = (newValue as (prev: T) => T)(this._value);
        } else {
            this._value = newValue;
        }

        // Notify all hooks to trigger a re-render
        for (const listener of this._listeners) {
            listener(this._value);
        }
    }

    // public getHook(): () => T {
    //     return () => useAtom(this)
    // }

}

export const useAtom = <T>(atom: Atom<T>) => {
    const [state, setState] = useState(atom._value)

    useEffect(() => {
        const callback = (val: T) => {
            setState(val);
        }

        atom._listeners.add(callback);
        return () => {
            atom._listeners.delete(callback);
        };
    }, []);

    return state;
}
