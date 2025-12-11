import { icon } from "./icons"; 

interface PetData {
    idx: number;
    damage: number;
    name: string;
    icon: string;
    rank: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";
    info: string; 
    model_name: string;
}

export const PetCatalog: PetData[] = [
    // --- COMMON (Damage: 3 to 45) ---
    { idx: 1, damage: 3, name: "bee", icon: icon("bee"), rank: "Common", info: "8.5M Exist", model_name: 'bee' },
    { idx: 2, damage: 5, name: "dog", icon: icon("dog"), rank: "Common", info: "7.9M Exist", model_name: 'dog' },
    { idx: 3, damage: 8, name: "rat", icon: icon("rat"), rank: "Common", info: "7.3M Exist", model_name: 'rat' },
    { idx: 4, damage: 10, name: "koala", icon: icon("koala"), rank: "Common", info: "6.8M Exist", model_name: 'koala' },
    { idx: 5, damage: 15, name: "fawn", icon: icon("fawn"), rank: "Common", info: "6.2M Exist", model_name: 'fawn' },
    { idx: 6, damage: 20, name: "worm", icon: icon("worm"), rank: "Common", info: "5.7M Exist", model_name: 'worm' },
    { idx: 7, damage: 25, name: "ant", icon: icon("ant"), rank: "Common", info: "5.1M Exist", model_name: 'ant' },
    { idx: 8, damage: 30, name: "fish", icon: icon("fish"), rank: "Common", info: "4.6M Exist", model_name: 'fish' },
    { idx: 9, damage: 35, name: "chicken", icon: icon("chicken"), rank: "Common", info: "4.0M Exist", model_name: 'chicken' },
    { idx: 10, damage: 40, name: "ladybug", icon: icon("ladybug"), rank: "Common", info: "3.5M Exist", model_name: 'ladybug' },
    { idx: 11, damage: 45, name: "butterfly", icon: icon("butterfly"), rank: "Common", info: "3.0M Exist", model_name: 'butterfly' },

    // --- UNCOMMON (Damage: 55 to 150) ---
    { idx: 12, damage: 55, name: "penguin", icon: icon("penguin"), rank: "Uncommon", info: "1.8M Exist", model_name: 'penguin' },
    { idx: 13, damage: 60, name: "hippo", icon: icon("hippo"), rank: "Uncommon", info: "1.7M Exist", model_name: 'hippo' },
    { idx: 14, damage: 65, name: "bat", icon: icon("bat"), rank: "Uncommon", info: "1.6M Exist", model_name: 'bat' },
    { idx: 15, damage: 70, name: "camel", icon: icon("camel"), rank: "Uncommon", info: "1.5M Exist", model_name: 'camel' },
    { idx: 16, damage: 75, name: "cat", icon: icon("cat"), rank: "Uncommon", info: "1.4M Exist", model_name: 'cat' },
    { idx: 17, damage: 80, name: "raccoon", icon: icon("raccoon"), rank: "Uncommon", info: "1.3M Exist", model_name: 'raccoon' },
    { idx: 18, damage: 85, name: "buffalo", icon: icon("buffalo"), rank: "Uncommon", info: "1.2M Exist", model_name: 'buffalo' },
    { idx: 19, damage: 90, name: "snow ram", icon: icon("snowram"), rank: "Uncommon", info: "1.1M Exist", model_name: 'snow_ram' },
    { idx: 20, damage: 95, name: "monkey", icon: icon("monkey"), rank: "Uncommon", info: "1.0M Exist", model_name: 'monkey' },
    { idx: 21, damage: 100, name: "rabbit", icon: icon("rabbit"), rank: "Uncommon", info: "950K Exist", model_name: 'rabbit' },
    { idx: 22, damage: 110, name: "ray fish", icon: icon("rayfish"), rank: "Uncommon", info: "900K Exist", model_name: 'ray_fish' },
    { idx: 23, damage: 120, name: "seal", icon: icon("seal"), rank: "Uncommon", info: "850K Exist", model_name: 'seal' },
    { idx: 24, damage: 130, name: "squirrel", icon: icon("squirrel"), rank: "Uncommon", info: "800K Exist", model_name: 'squirrel' },
    { idx: 25, damage: 140, name: "flamingo", icon: icon("flamingo"), rank: "Uncommon", info: "750K Exist", model_name: 'flamingo' },
    { idx: 26, damage: 150, name: "axolotl", icon: icon("axolotl"), rank: "Uncommon", info: "700K Exist", model_name: 'axolotl' },

    // --- RARE (Damage: 200 to 550) ---
    { idx: 27, damage: 200, name: "wolf", icon: icon("wolf"), rank: "Rare", info: "350K Exist", model_name: 'wolf' },
    { idx: 28, damage: 220, name: "bull", icon: icon("bull"), rank: "Rare", info: "320K Exist", model_name: 'bull' },
    { idx: 29, damage: 240, name: "bear", icon: icon("bear"), rank: "Rare", info: "290K Exist", model_name: 'bear' },
    { idx: 30, damage: 260, name: "panda", icon: icon("panda"), rank: "Rare", info: "260K Exist", model_name: 'panda' },
    { idx: 31, damage: 280, name: "owl", icon: icon("owl"), rank: "Rare", info: "230K Exist", model_name: 'owl' },
    { idx: 32, damage: 300, name: "peacock", icon: icon("peacock"), rank: "Rare", info: "200K Exist", model_name: 'peacock' },
    { idx: 33, damage: 320, name: "eagle", icon: icon("eagle"), rank: "Rare", info: "180K Exist", model_name: 'eagle' },
    { idx: 34, damage: 340, name: "desert snake", icon: icon("desertsnake"), rank: "Rare", info: "160K Exist", model_name: 'desert_snake' },
    { idx: 35, damage: 360, name: "parrot", icon: icon("parrot"), rank: "Rare", info: "140K Exist", model_name: 'parrot' },
    { idx: 36, damage: 380, name: "spider", icon: icon("spider"), rank: "Rare", info: "120K Exist", model_name: 'spider' },
    { idx: 37, damage: 400, name: "fox", icon: icon("fox"), rank: "Rare", info: "100K Exist", model_name: 'fox' },
    { idx: 38, damage: 430, name: "walrus", icon: icon("walrus"), rank: "Rare", info: "90K Exist", model_name: 'walrus' },
    { idx: 39, damage: 450, name: "snowman", icon: icon("snowman"), rank: "Rare", info: "80K Exist", model_name: 'snowman' },
    { idx: 40, damage: 480, name: "horse", icon: icon("horse"), rank: "Rare", info: "70K Exist", model_name: 'horse' },
    { idx: 41, damage: 500, name: "shark", icon: icon("shark"), rank: "Rare", info: "60K Exist", model_name: 'shark' },
    { idx: 42, damage: 520, name: "Reindeer", icon: icon("reindeer"), rank: "Rare", info: "50K Exist", model_name: 'Reindeer' },
    { idx: 43, damage: 550, name: "snake", icon: icon("snake"), rank: "Rare", info: "40K Exist", model_name: 'snake' },

    // --- EPIC (Damage: 720 to 850) ---
    { idx: 44, damage: 720, name: "dolphin", icon: icon("dolphin"), rank: "Epic", info: "20K Exist", model_name: 'dolphin' },
    { idx: 45, damage: 750, name: "scorpion", icon: icon("scorpion"), rank: "Epic", info: "15K Exist", model_name: 'scorpion' },
    { idx: 46, damage: 780, name: "wight bear", icon: icon("wightbear"), rank: "Epic", info: "10K Exist", model_name: 'wight_bear' },
    { idx: 47, damage: 800, name: "elephant", icon: icon("elephant"), rank: "Epic", info: "8K Exist", model_name: 'elephant' },
    { idx: 48, damage: 850, name: "crocodile", icon: icon("crocodile"), rank: "Epic", info: "5K Exist", model_name: 'crocodile' },

    // --- LEGENDARY (Damage: 1050 to 1200) ---
    { idx: 49, damage: 1050, name: "goldenpeacock", icon: icon("goldenpeacock"), rank: "Legendary", info: "1.5K Exist", model_name: 'goldenpeacock' },
    { idx: 50, damage: 1100, name: "SUPER FOX", icon: icon("superfox"), rank: "Legendary", info: "1K Exist", model_name: 'SUPER_FOX' },
    { idx: 51, damage: 1200, name: "dragon", icon: icon("dragon"), rank: "Legendary", info: "500 Exist", model_name: 'dragon' },
];

export const getPetConf = (idx: number) => {
    return PetCatalog.find(p => p.idx === idx)
}