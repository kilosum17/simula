import { getHRP, getNewStageCost } from "./assist"
import { LANIM_DATA, LCOLORS, LGPT_ICONS, LICONS, LIItemConfig, LITEMS } from "./LDATA"

export const PETS_IMG = "rbxassetid://9014619361"
export const COIN_IMG_OLD = "rbxassetid://15993201893"
export const COIN_IMG = "rbxassetid://18485757472"
export const BUY_IMG = "rbxassetid://2746533120"
export const PET_PAWS = "rbxassetid://15522743885"
export const DOG_IMG = "rbxassetid://11793752601"
export const CURSOR_IMG = "rbxassetid://15594214036"
export const GUN_SOUND = "rbxassetid://1905367471"

export const colors = LCOLORS
export const icons = LICONS
export const ANIM_DATA = LANIM_DATA

export const COLLECTIBLES = {
    emerald: icons.emeralds,
    sapphire: icons.sapphire,
    coin: icons.coin,
    bone: icons.bone,
    fossil: icons.fossil,
}
export const COLLECTABLE_COST = {
    emeralds: 200,
    sapphire: 250,
    bag: 0,
    bone: 450,
    fossil: 590,
} as { [key: string]: number }

export interface ITradePlayers {
    name: string,
    id: number,
    rank: number,
    image: string,
}
export const ITEMS_CONFING = LITEMS
export const DEFAULT_ITEMS = [3001]

export type IItemConfig = LIItemConfig

export interface IPlayerItems {
    [key: number]: {
        count: number, item: IItemConfig,
        selected: number
    }
}

export const getItemInfo = (ids: number[], only_tradable = false) => {
    const items = {} as IPlayerItems
    for (const id of ids) {
        let foundItem = undefined
        for (const item of ITEMS_CONFING) {
            if (id === item.no) {
                if (only_tradable) {
                    if (!item.not_tradable) {
                        foundItem = item
                        break
                    }
                } else {
                    foundItem = item
                    break
                }
            }
        }
        if (foundItem) {
            if (!items[id]) {
                items[id] = { count: 1, item: foundItem, selected: 0 }
            } else {
                items[id].count++
            }
        } else {
            if (!only_tradable) {
                warn('No item', id)
            }
        }
    }
    return items
}

export const getItemsIds = (items: IPlayerItems, only_selected = false) => {
    const ids = [] as number[]
    for (const [key, val] of pairs(items)) {
        let no = val.count
        if (only_selected) {
            no = val.selected
        }
        for (let i = 0; i < no; i++) {
            ids.push(val.item.no)
        }
    }
    return ids
}

export const getStageCostV2 = (no: number, rebirth: number) => {
    return getNewStageCost(no - 1, rebirth)
}

export interface IActiveBoost {
    id: number, count: number, loc: number,
    left: number, start: number, dur: number,
}

export const PRODUCTS = {
    slot1: 1869724597,
    slot2: 1869825642,
    slot3: 1869826101,
}

export interface ISlotData { [key: string]: { item: number, bought?: boolean, can_buy?: boolean } }
export const DEFAULA_SLOT_DATA = {
    s1: { item: -1, bought: true },
    s2: { item: -1, bought: false },
    s3: { item: -1, bought: false },
    s4: { item: -1, bought: true },
    s5: { item: -1, bought: false },
    s6: { item: -1, bought: false },
    p1: { bought: false, can_buy: true, item: -1, },
    p2: { bought: false, item: -1, },
    p3: { bought: false, item: -1, },
} as ISlotData

export interface IStageItem { no: number, name: string }
export const STAGE_NAMES = [
    { "no": 0, "name": "Spawn" },
    { "no": 1, "name": "Fossil Plains" },
    { "no": 2, "name": "Rocky Ridge" },
    { "no": 3, "name": "Mystic Forest" },
    { "no": 4, "name": "Cascade Falls" },
    { "no": 5, "name": "Glacial Peaks" },
    { "no": 6, "name": "Ancient Ruins" },
    { "no": 7, "name": "Crystal Caverns" },
    { "no": 8, "name": "Volcanic Wasteland" },
    { "no": 9, "name": "Sunlit Meadows" },
    { "no": 10, "name": "Echoing Canyons" },
    { "no": 11, "name": "Moonlit Grove" },
    { "no": 12, "name": "Emerald Forest" },
    { "no": 13, "name": "Sapphire Shores" },
    { "no": 14, "name": "Desert Oasis" },
    { "no": 15, "name": "Thunder Plateau" },
    { "no": 16, "name": "Silver Mountains" },
    { "no": 17, "name": "Golden Valley" },
    { "no": 18, "name": "Haunted Marsh" },
    { "no": 19, "name": "Windy Highlands" },
    { "no": 20, "name": "Blossom Fields" },
    { "no": 21, "name": "Enchanted Glade" },
    { "no": 22, "name": "Crimson Cliffs" },
    { "no": 23, "name": "Frozen Tundra" },
    { "no": 24, "name": "Shimmering Reef" },
    { "no": 25, "name": "Mystic Caverns" },
    { "no": 26, "name": "Obsidian Canyon" },
    { "no": 27, "name": "Twilight Woods" },
    { "no": 28, "name": "Silverpeak Summit" },
    { "no": 29, "name": "Lavaflow Basin" },
    { "no": 30, "name": "Sapphire Springs" },
    { "no": 31, "name": "Emerald Abyss" },
    { "no": 32, "name": "Ivory Cliffs" },
    { "no": 33, "name": "Shadowed Gorge" },
    { "no": 34, "name": "Thunderous Expanse" },
    { "no": 35, "name": "Verdant Plateau" },
    { "no": 36, "name": "Blazing Ridge" },
    { "no": 37, "name": "Moonlit Isle" },
    { "no": 38, "name": "Crystal Fissure" },
    { "no": 39, "name": "Ashen Lowlands" },
    { "no": 40, "name": "Stormwatch Peaks" },
    { "no": 41, "name": "Golden Grove" },
    { "no": 42, "name": "Dusklight Shores" },
    { "no": 43, "name": "Petrified Forest" },
    { "no": 44, "name": "Opal Meadows" },
    { "no": 45, "name": "Sunken Ruins" },
    { "no": 46, "name": "Glacial Falls" },
    { "no": 47, "name": "Molten Fields" },
    { "no": 48, "name": "Frostfire Crater" },
    { "no": 49, "name": "Windswept Plains" },
    { "no": 50, "name": "Whispering Pines" },
    { "no": 51, "name": "Bronze Hollow" },
    { "no": 52, "name": "Chilled Ridge" },
    { "no": 53, "name": "Raven's Peak" },
    { "no": 54, "name": "Azure Caverns" },
    { "no": 55, "name": "Golden Sands" },
    { "no": 56, "name": "Echoing Depths" },
    { "no": 57, "name": "Radiant Dunes" },
    { "no": 58, "name": "Frostbite Chasm" },
    { "no": 59, "name": "Cursed Vale" },
    { "no": 60, "name": "Starlit Ridge" },
    { "no": 61, "name": "Gleaming Expanse" },
    { "no": 62, "name": "Volcanic Ridge" },
    { "no": 63, "name": "Moonstone Hollow" },
    { "no": 64, "name": "Jade Lake" },
    { "no": 65, "name": "Coral Spires" },
    { "no": 66, "name": "Thundering Steppes" },
    { "no": 67, "name": "Dawnspire Plateau" },
    { "no": 68, "name": "Sunflare Mesa" },
    { "no": 69, "name": "Obsidian Spire" },
    { "no": 70, "name": "Frostglow Cavern" },
    { "no": 71, "name": "Blossom Grove" },
    { "no": 72, "name": "Molten Hollows" },
    { "no": 73, "name": "Spectral Marsh" },
    { "no": 74, "name": "Sunset Ridge" },
    { "no": 75, "name": "Howling Fjord" },
    { "no": 76, "name": "Ruby Crags" },
    { "no": 77, "name": "Shattered Peaks" },
    { "no": 78, "name": "Frostveil Cavern" },
    { "no": 79, "name": "Elderwood Glade" },
    { "no": 80, "name": "Glowing Basin" },
    { "no": 81, "name": "Obsidian Hollow" },
    { "no": 82, "name": "Crimson Vale" },
    { "no": 83, "name": "Fallen Pines" },
    { "no": 84, "name": "Tempest Ridge" },
    { "no": 85, "name": "Violet Marsh" },
    { "no": 86, "name": "Celestial Cliffs" },
    { "no": 87, "name": "Ironwood Canyon" },
    { "no": 88, "name": "Silverstream Falls" },
    { "no": 89, "name": "Sunken Caverns" },
    { "no": 90, "name": "Amber Peaks" },
    { "no": 91, "name": "Gloomy Woods" },
    { "no": 92, "name": "Searing Gorge" },
    { "no": 93, "name": "Midnight Glade" },
    { "no": 94, "name": "Iridescent Tundra" },
    { "no": 95, "name": "Burning Hollow" },
    { "no": 96, "name": "Misty Highlands" },
    { "no": 97, "name": "Duskwatch Plains" },
    { "no": 98, "name": "Golden Bluffs" },
    { "no": 99, "name": "Frozen Hollow" },
    { "no": 100, "name": "Eternal Summit" },
] as IStageItem[]

export const getItemCost = (no: number) => {
    const conf = ITEMS_CONFING.find(t => t.no === no)!
    if (!conf) {
        return 0
    }
    let base = 100
    let mult = 1
    if (conf.type === 'POTIONS') base = 20
    if (conf.type === 'BOOSTS') base = 50
    if (conf.type === 'BOOKS') base = 100
    if (conf.rank.lower() === 'common') mult = 1.2
    if (conf.rank.lower() === 'uncommon') mult = 1.4
    if (conf.rank.lower() === 'rare') mult = 2
    if (conf.rank.lower() === 'epic') mult = 4
    return base * mult * 1000
}
const confsStore = {} as { [key: number]: IItemConfig }
for (const item of ITEMS_CONFING) {
    confsStore[item.no] = item
}
export const getItemConf = (no: number): IItemConfig | undefined => {
    return confsStore[no]
}

export const DEF_AREA_CACHE = {
    '0': [-138, 2.5, -168],
    '1': [-145.021454, 2.60098577, -348.728607],
    '2': [-145.021454, 2.60098577, -552.728638],
    '3': [-145.021454, 2.60098577, -754.728638],
    '4': [-145.021454, 2.60098577, -954.728638],
    '5': [-145.021454, 2.60098577, -1155.72864],
    '6': [-145.021454, 2.60098577, -1353.72864],
    '7': [-145.021454, 2.60098577, -1559.72864],
    '8': [-145.021454, 2.60098577, -1757.72864],
    '9': [-145.021454, 2.60098577, -1959.72864],
    '10': [-145.021454, 2.60098577, -2165.72852],
    '11': [-145.021454, 2.60098577, -2365.72852],
    '12': [-145.021454, 2.60098577, -2566.72852],
    '13': [-145.021454, 2.60098577, -2765.72852],
    '14': [-145.021454, 2.60098577, -2967.72852],
    '15': [-145.021454, 2.60098577, -3167.72852],
    '16': [-145.021454, 2.60098577, -3367.72852],
    '17': [-145.021454, 2.60098577, -3568.72852],
    '18': [-145.021454, 2.60098577, -3774.72852],
    '19': [-145.021454, 2.60098577, -3970.72852],
    '20': [-145.021454, 2.60098577, -4173.72852],
    '21': [-145.021454, 2.60098577, -4375.72852],
    '22': [-145.021454, 2.60098577, -4578.72852],
    '23': [-145.021454, 2.60098577, -4779.72852],
    '24': [-145.021454, 2.60098577, -4979.72852],
    '25': [-145.021454, 2.60098577, -5181.72852],
    '26': [-145.021454, 2.60098577, -5378.72852],
    '27': [-145.021454, 2.60098577, -5580.72852],
    '28': [-145.021454, 2.60098577, -5778.72852],
    '29': [-145.021454, 2.60098577, -5985.72852],
    '30': [-145.021454, 2.60098577, -6182.72852],
    '31': [-145.021454, 2.60098577, -6381.72852],
    '32': [-145.021454, 2.60098577, -6581.72852],
    '33': [-145.021454, 2.60098577, -6780.72852],
    '34': [-145.021454, 2.60098577, -6980.72852],
    '35': [-145.021454, 2.60098577, -7185.72852],
    '36': [59.9785461, 2.60098577, -7185.72852],
    '37': [262.978546, 2.60098577, -7185.72852],
    '38': [461.978546, 2.60098577, -7185.72852],
    '39': [656.978516, 2.60098577, -7185.72852],
    '40': [656.978516, 2.60098577, -6983.72852],
    '41': [656.978516, 2.60098577, -6782.72852],
    '42': [656.978516, 2.60098577, -6582.72852],
    '43': [656.978516, 2.60098577, -6381.72852],
    '44': [656.978516, 2.60098577, -6188.72852],
    '45': [656.978516, 2.60098577, -5974.72852],
    '46': [656.978516, 2.60098577, -5775.72852],
    '47': [656.978516, 2.60098577, -5576.72852],
    '48': [656.978516, 2.60098577, -5376.72852],
    '49': [656.978516, 2.60098577, -5171.72852],
    '50': [656.978516, 2.60098577, -4965.72852],
    '51': [864.978516, 2.60098577, -4965.72852],
    '52': [1071.97852, 2.60098577, -4965.72852],
    '53': [1278.97852, 2.60098577, -4965.72852],
    '54': [1485.97852, 2.60098577, -4965.72852],
    '55': [1867.97852, -39.1023331, -4971.72852],
    '56': [2050.97852, -39.1023331, -4971.72852],
    '57': [2229.97852, -39.1023331, -4971.72852],
    '58': [2410.97852, -39.1023331, -4971.72852],
    '59': [2596.97852, -39.1023331, -4971.72852],
    '60': [2777.97852, -39.1023331, -4971.72852],
    '61': [2956.97852, -39.1023331, -4971.72852],
    '62': [3138.97852, -39.1023331, -4971.72852],
    '63': [3320.97852, -39.1023331, -4971.72852],
    '64': [3503.97852, -39.1023331, -4971.72852],
    '65': [3838.97852, 2.89766693, -4971.72852],
    '66': [4016.97852, 2.89766693, -4971.72852],
    '67': [4194.97852, 2.89766693, -4971.72852],
    '68': [4376.97852, 2.89766693, -4971.72852],
    '69': [4559.97852, 2.89766693, -4971.72852],
    '70': [4735.97852, 2.89766693, -4971.72852],
    '71': [4921.97852, 2.89766693, -4971.72852],
    '72': [5099.97852, 2.89766693, -4971.72852],
    '73': [5280.97852, 2.89766693, -4971.72852],
    '74': [5461.97852, 2.89766693, -4971.72852],
    '75': [5642.97852, 2.89766693, -4971.72852],
    '76': [5826.97852, 2.89766693, -4971.72852],
    '77': [6004.97852, 2.89766693, -4971.72852],
    '78': [6183.97852, 2.89766693, -4971.72852],
    '79': [6369.97852, 2.89766693, -4971.72852],
    '80': [6547.97851, 2.89766, -4971.72851],
    '81': [6726.97851, 2.89766, -4971.72851],
    '82': [6910.97851, 2.89766, -4971.72851],
    '83': [7078.97851, 2.89766, -4971.72851],
    '84': [7254.97851, 2.89766, -4971.72851],
    '85': [7437.97851, 2.89766, -4971.72851],
    '86': [7621.97851, 2.89766, -4971.72851],
    '87': [7800.97851, 2.89766, -4971.72851],
    '88': [7979.97851, 2.89766, -4971.72851],
    '89': [8160.97851, 2.89766, -4971.72851],
    '90': [8341.97851, 2.89766, -4971.72851],
    '91': [8524.97851, 2.89766, -4971.72851],
    '92': [8705.97851, 2.89766, -4971.72851],
    '93': [8885.97851, 2.89766, -4971.72851],
    '94': [9066.97851, 2.89766, -4971.72851],
} as { [key: string]: number[] }

export const nearestStage = (player: Player) => {
    let dist = 10000000000
    let area = 0
    const hrp = getHRP(player).Position
    for (const [no, val] of pairs(DEF_AREA_CACHE)) {
        const pos = new Vector3(val[0], val[1], val[2])
        const curStage = tonumber(no)!
        const curDist = pos.sub(hrp).Magnitude
        if (curDist < dist) {
            area = curStage
            dist = curDist
            if (curDist < 40) {
                break
            }
        }
    }
    return area
}

export const GPT_ICONS = LGPT_ICONS

// fix : 36 - 64
