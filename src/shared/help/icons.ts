import { objValues } from "./assist";
import { GPT_ICONS, icons } from "./DATA";
import { randSample } from "./math";

export const ICONS = {
    "rand": "",
    "pet": "",
    "square_red_close_but": "rbxassetid://72476785430277",
    "bonus_text": "rbxassetid://82390280512523",
    "red_circle": "rbxassetid://88354314926840",
    'bg_patterns': 'rbxassetid://103724644688898',
    'egg_crack': 'rbxassetid://93105624333856',
    'black_arrow': 'rbxassetid://106720597714648',
    'diamond': GPT_ICONS.diamond,

    "green_rec_but": "rbxassetid://76946062015574",
    "darkgreen_rec_but": "rbxassetid://139885474046683",
    "red_rec_but": "rbxassetid://114548731985066",
    "gray_rec_but": "rbxassetid://103053408350795",

    "inv_pets": GPT_ICONS.nav_dinopaw,
    "gray_lock": "rbxassetid://647920916",
    "gray_windows": "rbxassetid://119595512677097",
    "gray_delete": "rbxassetid://111286515130677",
    "gold_coin": "rbxassetid://93184839578373",

    "tools_teleport": 'rbxassetid://92224309374232',
    "tools_hoverboard": 'rbxassetid://90235706225732',
    "tools_inventory": 'rbxassetid://74334529902137',
    "tools_shop": GPT_ICONS.shop,
    "tools_trade": GPT_ICONS.trade,
    "tools_Settings": GPT_ICONS.settings,
    "tools_Rewards": GPT_ICONS.gift_box,

    '11_butterfly': 'rbxassetid://124100089672942',
    '3_rat': 'rbxassetid://96589198697482',
    '2_dog': 'rbxassetid://75330274638465',

}
export const TextIcons = {
    Clock: "🕒",
    Smiley: "😊",
    Settings: "⚙️",
    Lock: "🔒",
    Coin: "💰"
};

export const icon = (name: keyof typeof ICONS) => {
    if (name === "rand") {
        const vals = objValues(GPT_ICONS)
        return randSample(vals)
    }
    if (name === "pet") {
        const vals = [ICONS['11_butterfly'], ICONS["3_rat"], ICONS["2_dog"]]
        return randSample(vals)
    }
    if (name && ICONS[name]) {
        return ICONS[name]
    }
    return icons.Book0
}

export const cursors = {
    "hand": "rbxasset://SystemCursors/PointingHand",
    "arrow": "rbxasset://SystemCursors/Arrow",
}


