import { getItemConf } from "./DATA";
import { icon } from "./icons";
import { listToMap } from "./math";

export interface TPetData {
    id: string;
    damage: number;
    name: string;
    icon: string;
    rank: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";
    info: string;
    model_name: string;
    rotation?: number,
}

export const PetCatalog: TPetData[] = [
    // --- COMMON (Damage: 3 to 45) ---
    { id: '1', damage: 3, name: "bee", icon: icon('pet'), rank: "Common", info: "8.5M Exist", model_name: 'bee', rotation: 90 },
    { id: '2', damage: 5, name: "dog", icon: icon('pet'), rank: "Common", info: "7.9M Exist", model_name: 'dog', rotation: 180 },
    { id: '3', damage: 8, name: "rat", icon: icon('pet'), rank: "Common", info: "7.3M Exist", model_name: 'rat', rotation: 180 },
    { id: '4', damage: 10, name: "koala", icon: icon('pet'), rank: "Common", info: "6.8M Exist", model_name: 'koala', rotation: 0 },
    { id: '5', damage: 15, name: "fawn", icon: icon('pet'), rank: "Common", info: "6.2M Exist", model_name: 'fawn' },
    { id: '6', damage: 20, name: "worm", icon: icon('pet'), rank: "Common", info: "5.7M Exist", model_name: 'worm', rotation: -90 },
    { id: '7', damage: 25, name: "ant", icon: icon('pet'), rank: "Common", info: "5.1M Exist", model_name: 'ant' },
    { id: '8', damage: 30, name: "fish", icon: icon('pet'), rank: "Common", info: "4.6M Exist", model_name: 'fish', rotation: 90 },
    { id: '9', damage: 35, name: "chicken", icon: icon('pet'), rank: "Common", info: "4.0M Exist", model_name: 'chicken' },
    { id: '10', damage: 40, name: "ladybug", icon: icon('pet'), rank: "Common", info: "3.5M Exist", model_name: 'ladybug', rotation: 90 },
    { id: '11', damage: 45, name: "butterfly", icon: icon('pet'), rank: "Common", info: "3.0M Exist", model_name: 'butterfly', rotation: 90 },

    // --- UNCOMMON (Damage: 55 to 150) ---
    { id: '12', damage: 55, name: "penguin", icon: icon('pet'), rank: "Uncommon", info: "1.8M Exist", model_name: 'penguin' },
    { id: '13', damage: 60, name: "hippo", icon: icon('pet'), rank: "Uncommon", info: "1.7M Exist", model_name: 'hippo' },
    { id: '14', damage: 65, name: "bat", icon: icon('pet'), rank: "Uncommon", info: "1.6M Exist", model_name: 'bat', rotation: 180 },
    { id: '15', damage: 70, name: "camel", icon: icon('pet'), rank: "Uncommon", info: "1.5M Exist", model_name: 'camel' },
    { id: '16', damage: 75, name: "cat", icon: icon('pet'), rank: "Uncommon", info: "1.4M Exist", model_name: 'cat', rotation: 180 },
    { id: '17', damage: 80, name: "raccoon", icon: icon('pet'), rank: "Uncommon", info: "1.3M Exist", model_name: 'raccoon', rotation: 180 },
    { id: '18', damage: 85, name: "buffalo", icon: icon('pet'), rank: "Uncommon", info: "1.2M Exist", model_name: 'buffalo', rotation: 180 },
    { id: '19', damage: 90, name: "snow ram", icon: icon('pet'), rank: "Uncommon", info: "1.1M Exist", model_name: 'snow ram', rotation: 180 },
    { id: '20', damage: 95, name: "monkey", icon: icon('pet'), rank: "Uncommon", info: "1.0M Exist", model_name: 'monkey', rotation: 180 },
    { id: '21', damage: 100, name: "rabbit", icon: icon('pet'), rank: "Uncommon", info: "950K Exist", model_name: 'rabbit', rotation: 180 },
    { id: '22', damage: 110, name: "ray fish", icon: icon('pet'), rank: "Uncommon", info: "900K Exist", model_name: 'ray fish' },
    { id: '23', damage: 120, name: "seal", icon: icon('pet'), rank: "Uncommon", info: "850K Exist", model_name: 'seal', rotation: 90 },
    { id: '24', damage: 130, name: "squirrel", icon: icon('pet'), rank: "Uncommon", info: "800K Exist", model_name: 'squirrel', rotation: 90 },
    { id: '25', damage: 140, name: "flamingo", icon: icon('pet'), rank: "Uncommon", info: "750K Exist", model_name: 'flamingo', rotation: 180 },
    { id: '26', damage: 150, name: "axolotl", icon: icon('pet'), rank: "Uncommon", info: "700K Exist", model_name: 'axolotl' },

    // --- RARE (Damage: 200 to 550) ---
    { id: '27', damage: 200, name: "wolf", icon: icon('pet'), rank: "Rare", info: "350K Exist", model_name: 'wolf', rotation: 180 },
    { id: '28', damage: 220, name: "bull", icon: icon('pet'), rank: "Rare", info: "320K Exist", model_name: 'bull', rotation: 180 },
    { id: '29', damage: 240, name: "bear", icon: icon('pet'), rank: "Rare", info: "290K Exist", model_name: 'bear', rotation: 180 },
    { id: '30', damage: 260, name: "panda", icon: icon('pet'), rank: "Rare", info: "260K Exist", model_name: 'panda', rotation: 180 },
    { id: '31', damage: 280, name: "owl", icon: icon('pet'), rank: "Rare", info: "230K Exist", model_name: 'owl' },
    { id: '32', damage: 300, name: "peacock", icon: icon('pet'), rank: "Rare", info: "200K Exist", model_name: 'peacock' },
    { id: '33', damage: 320, name: "eagle", icon: icon('pet'), rank: "Rare", info: "180K Exist", model_name: 'eagle', rotation: 180 },
    { id: '34', damage: 340, name: "desert snake", icon: icon('pet'), rank: "Rare", info: "160K Exist", model_name: 'desert snake', rotation: 180 },
    { id: '35', damage: 360, name: "parrot", icon: icon('pet'), rank: "Rare", info: "140K Exist", model_name: 'parrot' },
    { id: '36', damage: 380, name: "spider", icon: icon('pet'), rank: "Rare", info: "120K Exist", model_name: 'spider' },
    { id: '37', damage: 400, name: "fox", icon: icon('pet'), rank: "Rare", info: "100K Exist", model_name: 'fox', rotation: 180 },
    { id: '38', damage: 430, name: "walrus", icon: icon('pet'), rank: "Rare", info: "90K Exist", model_name: 'walrus' },
    { id: '39', damage: 450, name: "snowman", icon: icon('pet'), rank: "Rare", info: "80K Exist", model_name: 'snowman' },
    { id: '40', damage: 480, name: "horse", icon: icon('pet'), rank: "Rare", info: "70K Exist", model_name: 'horse' },
    { id: '41', damage: 500, name: "shark", icon: icon('pet'), rank: "Rare", info: "60K Exist", model_name: 'shark', rotation: 90 },
    { id: '42', damage: 520, name: "Reindeer", icon: icon('pet'), rank: "Rare", info: "50K Exist", model_name: 'Reindeer' },
    { id: '43', damage: 550, name: "snake", icon: icon('pet'), rank: "Rare", info: "40K Exist", model_name: 'snake', rotation: 180 },

    // --- EPIC (Damage: 720 to 850) ---
    { id: '44', damage: 720, name: "dolphin", icon: icon('pet'), rank: "Epic", info: "20K Exist", model_name: 'dolphin', rotation: 90 },
    { id: '45', damage: 750, name: "scorpion", icon: icon('pet'), rank: "Epic", info: "15K Exist", model_name: 'scorpion', rotation: 180 },
    { id: '46', damage: 780, name: "wight bear", icon: icon('pet'), rank: "Epic", info: "10K Exist", model_name: 'wight bear', rotation: 180 },
    { id: '47', damage: 800, name: "elephant", icon: icon('pet'), rank: "Epic", info: "8K Exist", model_name: 'elephant', rotation: -90 },
    { id: '48', damage: 850, name: "crocodile", icon: icon('pet'), rank: "Epic", info: "5K Exist", model_name: 'crocodile', rotation: 180 },

    // --- LEGENDARY (Damage: 1050 to 1200) ---
    { id: '49', damage: 1050, name: "goldenpeacock", icon: icon('pet'), rank: "Legendary", info: "1.5K Exist", model_name: 'goldenpeacock' },
    { id: '50', damage: 1100, name: "SUPER FOX", icon: icon('pet'), rank: "Legendary", info: "1K Exist", model_name: 'SUPER FOX', rotation: 180 },
    { id: '51', damage: 1200, name: "dragon", icon: icon('pet'), rank: "Legendary", info: "500 Exist", model_name: 'dragon' },
];

export const allPetIds = PetCatalog.map(p => p.id)

const petsCache = listToMap(PetCatalog, 'id')
export const getPetConf = (id: string) => {
    return petsCache[id] as TPetData | undefined
}

export const getRankColor = (rank: string) => {
    switch (rank) {
        case "Common":
            return Color3.fromRGB(150, 150, 150);
        case "Uncommon":
            return Color3.fromRGB(0, 175, 0);
        case "Rare":
            return Color3.fromRGB(0, 120, 255);
        case "Epic":
            return Color3.fromRGB(150, 0, 255);
        case "Legendary":
            return Color3.fromRGB(255, 175, 0);
        case "Mythic":
            return Color3.fromRGB(255, 50, 50);
        default:
            return Color3.fromRGB(100, 100, 100);
    }
}

export const isPetId = (id: string) => {
    return !!petsCache[id]
}

export const getAnyConf = (id: string) => {
    if (isPetId(id)) {
        return { isPet: true as const, ...getPetConf(id) }
    } else {
        return { isPet: false as const, ...getItemConf(tonumber(id)!) }
    }
}
