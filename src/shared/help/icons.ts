import { objValues } from "./assist";
import { GPT_ICONS, icons } from "./DATA";
import { randSample } from "./math";

export const ICON_DATA = {
    "rand": "",
    "square_red_close_but": "rbxassetid://72476785430277",
    "bonus_text": "rbxassetid://82390280512523",
    "red_circle": "rbxassetid://88354314926840",

    "green_rec_but": "rbxassetid://76946062015574",
    "red_rec_but": "rbxassetid://114548731985066",
    "gray_rec_but": "rbxassetid://103053408350795",

    "inv_pets": GPT_ICONS.nav_dinopaw,
    "gray_lock": "rbxassetid://647920916",
    "gray_windows": "rbxassetid://119595512677097",
    "gray_delete": "rbxassetid://111286515130677",
    "gold_coin": "rbxassetid://93184839578373",

}

export const icon = (name?: keyof typeof ICON_DATA) => {
    if (name === "rand") {
        const vals = objValues(GPT_ICONS)
        return randSample(vals)
    }
    if (name && ICON_DATA[name]) {
        return ICON_DATA[name]
    }
    return icons.Book0
}

export const cursors = {
    "hand": "rbxasset://SystemCursors/PointingHand",
    "arrow": "rbxasset://SystemCursors/Arrow",
}

