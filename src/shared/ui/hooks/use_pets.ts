import { petsSync } from "shared/signals/client_signals"

export const usePets = petsSync.getHook()