import { chooseRandom } from "./assist"

export const TEXTURES = [
    "rbxassetid://18415436305", "rbxassetid://18415163450", "rbxassetid://18414831806",
    "rbxassetid://18400348900", "rbxassetid://18336734102", "rbxassetid://18336734108",
    "rbxassetid://18400371799", "rbxassetid://18400348860", "rbxassetid://18400348853",
    "rbxassetid://18401560558", "rbxassetid://18323093301", "rbxassetid://18400735583",
    "rbxassetid://18444996043", "rbxassetid://18445406263", "rbxassetid://18444163179",
    "rbxassetid://18509251012", "rbxassetid://18460156299", "rbxassetid://18293890977",
    "rbxassetid://18939922913", "rbxassetid://18552998461", "rbxassetid://18555094372",
    "rbxassetid://18565428479", "rbxassetid://18539494827", "rbxassetid://18611568342",
    "rbxassetid://18567528730", "rbxassetid://18729338610", "rbxassetid://18939716619",
    "rbxassetid://18728652966", "rbxassetid://18640856171", "rbxassetid://18978050378",
    "rbxassetid://18923317243", "rbxassetid://18923724797", "rbxassetid://105482204332065",
    "rbxassetid://18939760861", "rbxassetid://18939978232", "rbxassetid://123833261341479",
]

export const LCOLORS = {
    claw: Color3.fromRGB(237, 237, 237),

    backdrop: {
        base: Color3.fromRGB(255, 255, 255),
        stroke: Color3.fromRGB(138, 213, 255),
    },
    confirm: {
        base: Color3.fromRGB(45, 240, 142),
        stroke: Color3.fromRGB(46, 208, 127),
    },

    deny: {
        base: Color3.fromRGB(255, 99, 99),
        stroke: Color3.fromRGB(223, 82, 82),
    },
    cust: {
        green: Color3.fromHex("#6df198"),
        white: Color3.fromRGB(255, 255, 255),
    },
    sim: {
        green: Color3.fromHex('#8CF813'),
        red: Color3.fromHex('#FF1864'),
        disable: Color3.fromHex('#B1AFC9'),
    },
    but1: {
        base: Color3.fromHex('#81FDFF'),
        stroke: Color3.fromHex('#000000'),
    },
    tgreen: {
        base: Color3.fromHex('#40FC3B'),
        stroke: Color3.fromHex('#000000'),
    },
    magenta: Color3.fromHex('#57E7FF'),
}
const OLD_GPT_ICONS = {
    PerksBeginner: 'rbxassetid://80480688829518',
    PerksMiningMaster: 'rbxassetid://88028778712217',
    PerksLuckyStreak: 'rbxassetid://87684466927167',
    PerksPowerHouse: 'rbxassetid://76049969903374',
    PerksUltimateMiner: 'rbxassetid://102164727043112',

    LimMysteryBox: 'rbxassetid://138880797216871',
    LimMegaMysteryBox: 'rbxassetid://112407979155771',
    LimDeveloperPack: 'rbxassetid://90050619996951',
    LimDevinePetEgg: 'rbxassetid://117564096826052',
    LimMythicalPetEgg: 'rbxassetid://114192898261591',

    teleport: 'rbxassetid://138763954448519',
    jar: 'rbxassetid://140366694955709',
    emeralds: 'rbxassetid://17892581758',
    sapphire: 'rbxassetid://17892588134',

}
export const LGPT_ICONS = {
    shop: 'rbxassetid://126044237314323',
    teleport: 'rbxassetid://129882880483230',
    gift_box: 'rbxassetid://138726334779853',
    flag1: 'rbxassetid://75990210937856',
    settings: 'rbxassetid://102733826787026',
    diamond: 'rbxassetid://75173893623139',
    pet_face: 'rbxassetid://76420047151174',
    hoverboard: 'rbxassetid://75524116079245',
    hover_tablet: 'rbxassetid://92977119059714',

    trade: 'rbxassetid://106863471939044',
    tnt: 'rbxassetid://110172778876648',
    coin_flag: 'rbxassetid://128924194347576',
    magnet_flag: 'rbxassetid://111399169263119',
    jar: 'rbxassetid://113562554833724',
    large_jar: 'rbxassetid://100788357728261',
    hoverboard2: 'rbxassetid://121515518788135',
    loading: 'rbxassetid://123603427675398',
    pet_unkown: 'rbxassetid://74885207287206',

    mango: 'rbxassetid://89306384120707',
    apple: 'rbxassetid://139075766345421',
    pineapple: 'rbxassetid://98270441514457',
    bag_diamonds: 'rbxassetid://119592363643902',
    nav_dinopaw: 'rbxassetid://128696743208574',
    nav_hover: 'rbxassetid://104278966171541',
    nav_book: 'rbxassetid://111162674022147',
    nav_potions: 'rbxassetid://128906101194875',
    nav_backpack: 'rbxassetid://97151917636810',

    PerksBeginner: 'rbxassetid://106395467016797',
    PerksMiningMaster: 'rbxassetid://79698351011158',
    PerksLuckyStreak: 'rbxassetid://79028659615430',
    PerksPowerHouse: 'rbxassetid://130153567234833',
    PerksUltimateMiner: 'rbxassetid://100371702308469',

    LimMysteryBox: 'rbxassetid://90760541609331',
    LimMegaMysteryBox: 'rbxassetid://121661896876988',
    LimDeveloperPack: 'rbxassetid://98776798057323',
    LimDevinePetEgg: 'rbxassetid://82348626624623',
    LimMythicalPetEgg: 'rbxassetid://72228755768800',

    Tel_Dispencer: 'rbxassetid://120004420112458',
    Tel_FusePets: 'rbxassetid://123420534661642',
    Tel_MergeFOssils: 'rbxassetid://90836246139418',
    Tel_GroupRewards: 'rbxassetid://126496756149111',
    Tel_Egg: 'rbxassetid://108206268044576',

}
export const LICONS = {
    close: "rbxassetid://7669008758",
    deleteIcon: "rbxassetid://7913037853",
    dispencer: 'rbxassetid://18662471810',

    checkmark: "rbxassetid://7723805767",
    claw: "rbxassetid://7667262248",

    equip: "rbxassetid://7668509700",
    grid: "rbxassetid://7668509757",
    petBackdrop: "rbxassetid://7912876282",
    rename: "rbxassetid://7668509813",
    trash: "rbxassetid://7668509860",

    sabertoothTiger: "rbxassetid://7667334424",
    skeletonsabertooth: "rbxassetid://17750209476",
    triceratops: "rbxassetid://7667467754",
    greenclaw: 'rbxassetid://93242094450848',
    goldcub: 'rbxassetid://112517098002811',
    blackclaw: 'rbxassetid://132211668385284',
    blackvelo: 'rbxassetid://112384545123531',
    glowhorn: 'rbxassetid://90969790270294',
    redhorn: 'rbxassetid://122984163603481',
    dinobird: 'rbxassetid://99032432352995',
    purpleclaw: 'rbxassetid://114150526750732',
    casto: "rbxassetid://99294589519376",
    coelo: "rbxassetid://110925062615749",
    megathe: "rbxassetid://108640727872921",
    terror_bird: "rbxassetid://133528284798645",
    behemo: "rbxassetid://113562681809675",
    gur_dog: "rbxassetid://96089557705063",
    imago: "rbxassetid://107735440617783",
    gur_croc: "rbxassetid://72128312711457",
    giant_crab: "rbxassetid://110904002067254",
    scorpion: "rbxassetid://78276418564311",
    leon: "rbxassetid://111153101359606",
    beard_dragon: "rbxassetid://82717991156601",
    horn_cobra: "rbxassetid://104370393752606",
    stripped_owl: "rbxassetid://134194559785839",
    sphinx: "rbxassetid://77157008784593",
    anubis: "rbxassetid://139422044811193",
    spirit_bear: "rbxassetid://111705437318064",
    spirit_owl: "rbxassetid://86692206772995",
    glypto: "rbxassetid://117548709323381",
    spirit_wolf: "rbxassetid://87925579827230",


    BottomImage: "rbxassetid://6017289712",
    MidImage: "rbxassetid://6017289904",
    TopImage: "rbxassetid://6017290134",

    ToolsGem: "rbxassetid://13516069179",
    ToolsCoinsOld: "rbxassetid://15993201893",
    ToolsCoins: "rbxassetid://18485757472",
    ToolsRobux: 'rbxassetid://14288891190',

    ToolsHoverboard: "rbxassetid://17792356751",
    ToolsLock: 'rbxassetid://17792356252',
    ToolsPets: 'rbxassetid://17828036045',
    ToolTeleport: 'rbxassetid://18650707913',
    ToolPlusIcon: 'rbxassetid://94324310567762',

    PawEgg: 'rbxassetid://17750659948',
    WoodEgg: 'rbxassetid://17775764371',

    BackPack1: 'rbxassetid://12878997112',

    NavTrade: 'rbxassetid://18173307922',
    NavAchievement: 'rbxassetid://18173308403',
    NavShop: 'rbxassetid://18173308647',
    NavSettings: 'rbxassetid://18173308971',
    NavBoosts: 'rbxassetid://18173309223',
    NavPets: 'rbxassetid://18173309533',

    BoostBackpack: 'rbxassetid://18180167935',
    BoostPotions: 'rbxassetid://18180168446',
    BoostEnchants: 'rbxassetid://18180168686',
    BoostsHoverboard: "rbxassetid://17792356751",

    Book0: 'rbxassetid://18215039303',
    Book1: 'rbxassetid://18215038926',
    Book2: 'rbxassetid://18215039098',

    Hoverboard0: 'rbxassetid://18215039513',
    hover1: 'rbxassetid://116604416774913',
    hover2: 'rbxassetid://105092765441356',
    hover3: 'rbxassetid://71776233105979',
    hover4: 'rbxassetid://92301991926894',
    hover5: 'rbxassetid://85864087175688',
    hover6: 'rbxassetid://134609442207489',
    hover7: 'rbxassetid://78594976147176',
    hover8: 'rbxassetid://140602872600843',

    ItemTnt: 'rbxassetid://18215046336',
    ItemFlag: 'rbxassetid://18215040123',
    ItemGift: 'rbxassetid://18215046510',
    ItemAppple: 'rbxassetid://18215046682',
    ItemJar: 'rbxassetid://18376153806',
    Potion0: 'rbxassetid://18215046897',
    Potion1: 'rbxassetid://18215047139',
    Potion2: 'rbxassetid://18215086503',
    SelectCircle: 'rbxassetid://18217133385',
    ButGreen: 'rbxassetid://18241142528',
    ButRed: 'rbxassetid://18241142078',
    ButGrey: 'rbxassetid://18241226326',
    ButYes: 'rbxassetid://18254267627',
    ButNo: 'rbxassetid://18254267860',
    ButSmallYes: 'rbxassetid://18241278198',
    ButSmallNo: 'rbxassetid://18241862412',
    BookLock: 'rbxassetid://18258720812',
    DivideImg: 'rbxassetid://18285209210',

    emeralds: 'rbxassetid://121636474195695',
    sapphire: 'rbxassetid://71872160266998',
    coin: 'rbxassetid://18485757472',
    bone: 'rbxassetid://18644790026',
    fossil: 'rbxassetid://18644797504',

    tradeArrows: 'rbxassetid://127725395454186',
    rankGold: 'rbxassetid://135052491375577',
    rebirth: 'rbxassetid://122400549042581',
    PerksSpeed: 'rbxassetid://125935777068642',
    PerksBeginer: 'rbxassetid://105157144431632',
    RadialSector: 'rbxassetid://74389304825384',
    RadialEmpty: 'rbxassetid://92757294625384',

    Hit_Arror: 'rbxassetid://16337053600',
    Hint_Tap_Fossil: 'rbxassetid://135280193599098',
    Hit_Pets_Help: 'rbxassetid://99702644415358',
    Hit_Keep_Going: 'rbxassetid://83677325235392',
    Tel_Rebirth: 'rbxassetid://110369515055984',

    gold_coin: "rbxassetid://134269015474949",
    gold_bars: "rbxassetid://119284951290369",
    ruby_coin: "rbxassetid://139319455487508",
    ruby_bars: "rbxassetid://123421428901088",
    platinum_coin: "rbxassetid://103052051055143",
    platinum_bars: "rbxassetid://78230629750273",
    emarald_coin: "rbxassetid://115270155869182",
    emarald_bars: "rbxassetid://100501682691935",

    giftbox_yellow: 'rbxassetid://136251201069368',
    giftbox_blue: 'rbxassetid://101360084261639',
    giftbox_green: 'rbxassetid://106785197223456',
    giftbox_treasure_chest: 'rbxassetid://89550585858531',

    tools_teleport2: 'rbxassetid://92224309374232',
    tools_hoverboard2: 'rbxassetid://90235706225732',
    tools_inventory2: 'rbxassetid://74334529902137',
}

export const LANIM_DATA = {
    IDLE1: '17704557753',
    IDLE2: "17763592905",
    IDLE3: '17705557887',
    MINING1: '17717556595',
    MINING2: '17763601696',
    MINING3: '17717563267',
    JUMP1: "17739229286",
    JUMP2: '17763599811',
    JUMP3: "17739222626",
    HIGH_JUMP1: "18129019856",
}

export const potions = {
    blue1: 'rbxassetid://18405917247',
    red1: 'rbxassetid://18405917954',
    greed1: 'rbxassetid://18405918443',
    yellow1: 'rbxassetid://18405919084',
    purple1: 'rbxassetid://18405919672',

    B_blue1: 'rbxassetid://18405909617',
    B_red1: 'rbxassetid://18405910196',
    B_greed1: 'rbxassetid://18405910745',
    B_yellow1: 'rbxassetid://18405911184',
    B_purple1: 'rbxassetid://18405911653',


    blue2: 'rbxassetid://18405920234',
    red2: 'rbxassetid://18405920867',
    greed2: 'rbxassetid://18405927723',
    yellow2: 'rbxassetid://18405921926',
    purple2: 'rbxassetid://18405922532',

    B_blue2: 'rbxassetid://18405912282',
    B_red2: 'rbxassetid://18405912911',
    B_greed2: 'rbxassetid://18405926530',
    B_yellow2: 'rbxassetid://18405913902',
    B_purple2: 'rbxassetid://18405914315',

    blue3: 'rbxassetid://18405922966',
    red3: 'rbxassetid://18405923459',
    greed3: 'rbxassetid://18405928139',
    yellow3: 'rbxassetid://18405924228',
    purple3: 'rbxassetid://18405924655',

    B_blue3: 'rbxassetid://18405914716',
    B_red3: 'rbxassetid://18405915146',
    B_greed3: 'rbxassetid://18405927195',
    B_yellow3: 'rbxassetid://18405915894',
    B_purple3: 'rbxassetid://18405916375',
}

export interface LIItemConfig {
    no: number, icon: string, icon2?: string, damage?: number, rank: string, name: string, desc: string,
    level: number, duration: number, type: 'PETS' | 'BOOKS' | "HOVERBOARDS" | "POTIONS" | 'BOOSTS' | 'LIMITED' | 'PERKS',
    not_tradable?: boolean, count?: number, cost?: number, model_id?: number, info?: string,
    effect?: 'damage' | 'speed' | 'coin' | 'magnet' | 'mine' | 'egg_luck' | 'treasure', effectVal?: number,
    robux?: number, pos?: number, model_name?: string, items?: number[], retextured?: boolean, src?: string,
}
export const chooseConfs = (choices: [string | number, number][]) => {
    const data = [] as number[]
    for (const choice of choices) {
        const ver = choice[0]
        const no = choice[1]
        if (typeIs(ver, 'number')) {
            for (let i = 0; i < no; i++) {
                data.push(ver)
            }
        } else {
            const [typeVer, rank] = ver.split('.')
            const items = LITEMS.filter(t => {
                let passed = (t.type.lower() === typeVer.lower()) || (typeVer === '')
                const tRank = (t.rank || '').lower()
                if (rank.size() > 0 && passed) {
                    passed = tRank === rank.lower()
                }
                return passed
            })
            if (items.size() === 0) {
                warn('No items', ver, items.size())
            } if (items.size() === 1) {
                warn('1 item ', ver, items.size())
                for (let i = 0; i < no; i++) {
                    data.push(items[0].no)
                }
            } else {
                for (let i = 0; i < no; i++) {
                    data.push(chooseRandom(items).no)
                }
            }
        }
    }
    return data
}

const icons = LICONS
export const LITEMS = [
    //PETS  
    //#region  
    { no: 1, type: "PETS", damage: 45, name: "Frostwolf", icon: icons.sabertoothTiger, model_id: 1, rank: "Common", info: "514m Exist", model_name: '01_sabertooth' },
    { no: 2, type: "PETS", damage: 64, name: "Shadowfang", icon: icons.triceratops, model_id: 2, rank: "Common", info: "456m Exist", model_name: '02_triceratops' },
    { no: 3, type: "PETS", damage: 80, name: "Flamebeak", icon: icons.dinobird, model_id: 3, rank: "Uncommon", info: "350m Exist", model_name: '04_dino' },
    { no: 4, type: "PETS", damage: 100, name: "Glowhorn", icon: icons.glowhorn, model_id: 4, rank: "Rare", info: "220m Exist", model_name: '07_bracho' },
    { no: 5, type: "PETS", damage: 135, name: "Scorpion Raptor", icon: icons.scorpion, model_id: 5, rank: "Rare", info: "190m Exist", model_name: '11_scorpion' },
    { no: 6, type: "PETS", damage: 160, name: "Shadowflame", icon: icons.blackvelo, model_id: 6, rank: "Epic", info: "85m Exist", model_name: '05_black_velo' },
    { no: 7, type: "PETS", damage: 200, name: "Rocky Rex", icon: icons.greenclaw, model_id: 7, rank: "Epic", info: "72m Exist", model_name: '08_trex' },
    { no: 8, type: "PETS", damage: 250, name: "Verdant Claw", icon: icons.purpleclaw, model_id: 8, rank: "Legendary", info: "38m Exist", model_name: '03_dodo' },
    { no: 9, type: "PETS", damage: 300, name: "Golden Cub", icon: icons.goldcub, model_id: 9, rank: "Legendary", info: "12m Exist", model_name: '06_mamuth' },
    { no: 10, type: "PETS", damage: 360, name: "Amber Horns", icon: icons.redhorn, model_id: 10, rank: "Mythical", info: "5m Exist", model_name: '09_stego' },
    { no: 11, type: "PETS", damage: 420, name: "Desert Lion", icon: icons.leon, model_id: 11, rank: "Mythical", info: "2m Exist", model_name: '12_leon_desert' },
    { no: 12, type: "PETS", damage: 450, name: "Giant Crab", icon: icons.giant_crab, model_id: 12, rank: "Divine", info: "1m Exist", model_name: '10_giant_crab' },
    { no: 13, type: "PETS", damage: 520, name: "Bearded Dragon", icon: icons.beard_dragon, model_id: 13, rank: "Divine", info: "500k Exist", model_name: '13_bearded_dragon' },
    { no: 14, type: "PETS", damage: 570, name: "Horned Cobra", icon: icons.horn_cobra, model_id: 14, rank: "Divine", info: "250k Exist", model_name: '14_horned_cobra' },
    { no: 15, type: "PETS", damage: 625, name: "Stripped Owl", icon: icons.stripped_owl, model_id: 15, rank: "Divine", info: "100k Exist", model_name: '15_stripped_owl' },
    { no: 16, type: "PETS", damage: 690, name: "Sphinx", icon: icons.sphinx, model_id: 16, rank: "Divine", info: "50k Exist", model_name: '16_sphinx' },
    { no: 17, type: "PETS", damage: 735, name: "Anubis", icon: icons.anubis, model_id: 17, rank: "Divine", info: "25k Exist", model_name: '17_anubis' },
    { no: 18, type: "PETS", damage: 800, name: "Spirit Bear", icon: icons.spirit_bear, model_id: 18, rank: "Divine", info: "10k Exist", model_name: '18_spirit_bear' },
    { no: 19, type: "PETS", damage: 950, name: "Spirit Owl", icon: icons.spirit_owl, model_id: 19, rank: "Divine", info: "5k Exist", model_name: '19_spirit_owl' },
    { no: 20, type: "PETS", damage: 1050, name: "Spirit Wolf", icon: icons.spirit_wolf, model_id: 20, rank: "Divine", info: "1k Exist", model_name: '20_spirit_wolf' },
    { no: 21, type: "PETS", damage: 1120, name: "Castoroides", icon: icons.casto, model_id: 21, rank: "Divine", info: "500 Exist", model_name: '1_castoroides' },
    { no: 22, type: "PETS", damage: 1230, name: "Coelodonta", icon: icons.coelo, model_id: 22, rank: "Divine", info: "250 Exist", model_name: '2_coelodonta' },
    { no: 23, type: "PETS", damage: 1500, name: "Glyptodon", icon: icons.glypto, model_id: 23, rank: "Divine", info: "100 Exist", model_name: '3_glyptodon' },
    { no: 24, type: "PETS", damage: 1620, name: "Megatherium", icon: icons.megathe, model_id: 24, rank: "Divine", info: "50 Exist", model_name: '4_megatherium' },
    { no: 25, type: "PETS", damage: 1750, name: "Terror Bird", icon: icons.terror_bird, model_id: 25, rank: "Divine", info: "25 Exist", model_name: '5_terror_bird' },
    { no: 26, type: "PETS", damage: 1900, name: "Behemoth", icon: icons.behemo, model_id: 26, rank: "Divine", info: "10 Exist", model_name: '6_behemotops' },
    { no: 27, type: "PETS", damage: 2150, name: "Guardian Dog", icon: icons.gur_dog, model_id: 27, rank: "Divine", info: "5 Exist", model_name: '7_guardian_dog' },
    { no: 28, type: "PETS", damage: 2300, name: "Imago", icon: icons.imago, model_id: 28, rank: "Divine", info: "1 Exist", model_name: '8_imagotaria' },
    { no: 29, type: "PETS", damage: 2400, name: "Guardian Crocodile", icon: icons.gur_croc, model_id: 29, rank: "Exclusive", info: "1 Exist", model_name: '9_guardian_crocodile' },
    //#endregion
    //books
    //#region 
    {
        no: 2001, type: 'BOOKS', icon: icons.Book0, rank: 'Epic', effect: 'coin', effectVal: 70, name: 'Fortune Finder',
        desc: 'Increases the amount of coins earned by 70%.', not_tradable: true
    },
    {
        no: 2002, type: 'BOOKS', icon: icons.Book1, rank: 'Rare', effect: 'speed', effectVal: 70, name: 'Swiftstride I',
        desc: 'Boosts speed by 70%.', not_tradable: true
    },
    {
        no: 2003, type: 'BOOKS', icon: icons.Book2, rank: 'Common', effect: 'egg_luck', effectVal: 70, name: 'Hatchling\'s Luck I',
        desc: 'Increases egg hatching luck by 70%.', not_tradable: true
    },
    {
        no: 2004, type: 'BOOKS', icon: icons.Book0, rank: 'Epic', effect: 'treasure', effectVal: 70, name: 'Treasure Seeker',
        desc: 'Increases chances of finding treasure by 70%.', not_tradable: true
    },
    {
        no: 2005, type: 'BOOKS', icon: icons.Book1, rank: 'Rare', effect: 'mine', effectVal: 70, name: 'Mining Frenzy',
        desc: 'Increases mining rate by 70%.', not_tradable: true
    },
    {
        no: 2006, type: 'BOOKS', icon: icons.Book2, rank: 'Common', effect: 'egg_luck', effectVal: 70, name: 'Egg Whisperer',
        desc: 'Increases egg hatching luck by 70%.', not_tradable: true
    },
    {
        no: 2007, type: 'BOOKS', icon: icons.Book0, rank: 'Epic', effect: 'treasure', effectVal: 70, name: 'Buried Riches',
        desc: 'Increases chances of finding treasure by 70%.', not_tradable: true
    },
    {
        no: 2008, type: 'BOOKS', icon: icons.Book1, rank: 'Rare', effect: 'mine', effectVal: 70, name: 'Rapid Digger I',
        desc: 'Increases mining rate by 70%.', not_tradable: true
    },
    {
        no: 2009, type: 'BOOKS', icon: icons.Book2, rank: 'Common', effect: 'coin', effectVal: 70, name: 'Gold Rush',
        desc: 'Increases the amount of coins earned by 70%.', not_tradable: true
    },
    {
        no: 2010, type: 'BOOKS', icon: icons.Book2, rank: 'Common', effect: 'speed', effectVal: 70, name: 'Lightning Speed',
        desc: 'Boosts speed by 70%.', level: 1, not_tradable: true
    },
    //#endregion
    // hoverboards
    //#region 
    {
        no: 3001, type: 'HOVERBOARDS', icon: icons.hover1, duration: 20, rank: 'Common', pos: 1, robux: 40,
        name: 'Classic Cruiser', desc: 'A timeless ride for the ultimate hoverboard experience', level: 1, not_tradable: true
    },
    {
        no: 3002, type: 'HOVERBOARDS', icon: icons.hover2, duration: 22, rank: 'Uncommon', pos: 2, robux: 60,
        name: 'Hot Dogger', desc: 'A tasty treat for your feet', level: 2, not_tradable: true
    },
    {
        no: 3003, type: 'HOVERBOARDS', icon: icons.hover7, duration: 24, rank: 'Rare', pos: 7, robux: 80,
        name: 'Rainbow Dash', desc: 'Soar through the skies with this colorful companion', level: 3, not_tradable: false
    },
    {
        no: 3004, type: 'HOVERBOARDS', icon: icons.hover5, duration: 26, rank: 'Epic', pos: 5, robux: 100,
        name: 'Persian Carpet', desc: 'A magical ride from a faraway land', level: 4, not_tradable: false
    },
    {
        no: 3005, type: 'HOVERBOARDS', icon: icons.hover6, duration: 28, rank: 'Legendary', pos: 6, robux: 120,
        name: 'Sleigh Ride', desc: 'A winter wonderland awaits', level: 5, not_tradable: false
    },
    {
        no: 3006, type: 'HOVERBOARDS', icon: icons.hover4, duration: 30, rank: 'Mythical', pos: 4, robux: 140,
        name: 'Rainbow Road', desc: 'A vibrant journey through a colorful dimension', level: 6, not_tradable: false
    },
    {
        no: 3007, type: 'HOVERBOARDS', icon: icons.hover3, duration: 32, rank: 'Eclusive', pos: 3, robux: 160,
        name: 'Cloud Nine', desc: 'Drift through the clouds in style', level: 7, not_tradable: false
    },
    {
        no: 3008, type: 'HOVERBOARDS', icon: icons.hover8, duration: 34, rank: 'Exclusive', pos: 8, robux: 180,
        name: 'Kitty Cat Cruiser', desc: 'A purrfect ride for the feline fancy', level: 5, not_tradable: false
    },
    //#endregion
    // Boosts    
    //#region 
    {
        no: 1001, type: 'BOOSTS', icon: LGPT_ICONS.tnt, duration: 1, rank: 'Epic',
        name: 'TNT Crate', desc: 'Detonates an explosive, breaking apart large rock formations and revealing hidden fossils.\nLasts 1 minute!', level: 1, info: 'tnt',
    },
    {
        no: 1002, type: 'BOOSTS', icon: LGPT_ICONS.gift_box, duration: 3, rank: 'Rare',
        name: 'Mystery Gift', desc: 'Grants random items that are highly useful for your mining adventures!', level: 1, info: 'gift',
    },
    {
        no: 1003, type: 'BOOSTS', icon: LGPT_ICONS.magnet_flag, duration: 15, rank: 'Common', effect: 'magnet', effectVal: 80,
        name: 'Magnet Flag', desc: 'Marks a strategic mining location, attracting pets and enhancing their mining abilities in the area.\nLasts 15 minutes!', level: 3, info: 'flag',
    },
    {
        no: 1004, type: 'BOOSTS', icon: LGPT_ICONS.apple, duration: 5, rank: 'Rare', effect: 'speed', effectVal: 2,
        name: 'Hasty Apple', desc: 'Provides a burst of energy, making pets mine resources faster.\nLasts 5 minutes!', level: 1, info: 'food'
    },
    {
        no: 1005, type: 'BOOSTS', icon: LGPT_ICONS.jar, duration: 0, rank: 'Rare',
        name: 'Coin Jar', desc: 'Drop this jar in the current area to receive valuable rewards and bonuses!\nInstant effect!', level: 1, info: 'jar'
    },
    {
        no: 1006, type: 'BOOSTS', icon: LGPT_ICONS.coin_flag, duration: 15, rank: 'Common', effect: 'coin', effectVal: 50,
        name: 'Coins Flag', desc: 'Marks a strategic mining location, increasing the amount of assets dropped in the area.\nLasts 15 minutes!', info: 'flag',
        level: 3,
    },
    {
        no: 1007, type: 'BOOSTS', icon: LGPT_ICONS.large_jar, duration: 0, rank: 'Rare',
        name: 'Large Coin Jar', desc: 'Drop this jar in the current area to receive valuable rewards and bonuses!\nInstant effect!', level: 2, info: 'jar',
    },
    {
        no: 1008, type: 'BOOSTS', icon: LGPT_ICONS.bag_diamonds, duration: 3, rank: 'Epic',
        name: 'Bag of Diamonds', desc: 'Provides a generous amount of diamonds to assist with upgrading and enhancing your mining capabilities!', level: 2, info: 'bag_diamonds',
    },
    {
        no: 1009, type: 'BOOSTS', icon: icons.bone, duration: 3, rank: 'Fossil',
        name: 'Collected Bones', desc: 'Merge for random rewards!', level: 2, info: 'bone',
    },
    {
        no: 1010, type: 'BOOSTS', icon: icons.fossil, duration: 3, rank: 'Fossil',
        name: 'Collected Fossil', desc: 'Merge for random rewards!', level: 2, info: 'fossil',
    },
    {
        no: 1011, type: 'BOOSTS', icon: icons.sapphire, duration: 3, rank: 'Fossil',
        name: 'Collected Sapphires', desc: 'Merge for random rewards!', level: 2, info: 'sapphire',
    },
    {
        no: 1012, type: 'BOOSTS', icon: icons.emeralds, duration: 3, rank: 'Fossil',
        name: 'Collected Emeralds', desc: 'Merge for random rewards!', level: 2, info: 'emerald',
    },
    {
        no: 1013, type: 'BOOSTS', icon: LGPT_ICONS.mango, duration: 10, rank: 'Rare', effect: 'speed', effectVal: 3,
        name: 'Mighty Mango', desc: 'A tropical delight that greatly enhances mining speed.\nLasts 10 minutes!', level: 1, info: 'food'
    },
    {
        no: 1014, type: 'BOOSTS', icon: LGPT_ICONS.pineapple, duration: 15, rank: 'Epic', effect: 'speed', effectVal: 4,
        name: 'Powerful Pineapple', desc: 'Infuses pets with unmatched energy for rapid mining.\nLasts 15 minutes!', level: 1, info: 'food'
    },
    //#endregion
    // POTIONS
    //#region 
    {
        no: 4001, type: 'POTIONS', icon: potions.yellow1, icon2: potions.B_yellow1, duration: 15, rank: 'Common', name: 'Lucky Egg Potion I', level: 1,
        desc: 'Increases your chances of hatching rare pets from eggs.\nLasts 15 minutes! \n👆 click to activate', effect: 'egg_luck', effectVal: 2,
    },
    {
        no: 4002, type: 'POTIONS', icon: potions.blue1, icon2: potions.B_blue1, duration: 15, rank: 'Common', name: 'Coins Potion I', level: 1,
        desc: 'Increases the amount of coins you earn from mining fossils.\nLasts 15 minutes! \n👆 click to activate', effect: 'coin', effectVal: 2,
    },
    {
        no: 4003, type: 'POTIONS', icon: potions.red1, icon2: potions.B_red1, duration: 10, rank: 'Common', name: 'Speed Potion I', level: 1,
        desc: 'Boosts your speed, allowing you to move faster.\nLasts 10 minutes! \n👆 click to activate', effect: 'speed', effectVal: 2,
    },
    {
        no: 4004, type: 'POTIONS', icon: potions.greed1, icon2: potions.B_greed1, duration: 5, rank: 'Common', name: 'Damage Potion I', level: 1,
        desc: 'Increases the damage you deal while mining.\nLasts 5 minutes! \n👆 click to activate', effect: 'damage', effectVal: 4,
    },
    {
        no: 4005, type: 'POTIONS', icon: potions.purple1, icon2: potions.B_purple1, duration: 15, rank: 'Common', name: 'Treasure Potion I', level: 1,
        desc: 'Increases your chances of finding treasure while mining.\nLasts 15 minutes! \n👆 click to activate', effect: 'treasure', effectVal: 2,
    },
    {
        no: 4006, type: 'POTIONS', icon: potions.yellow2, icon2: potions.B_yellow2, duration: 15, rank: 'Rare', name: 'Lucky Egg Potion II', level: 2,
        desc: 'Increases your chances of hatching rare pets from eggs.\nLasts 15 minutes! \n👆 click to activate', effect: 'egg_luck', effectVal: 4,
    },
    {
        no: 4007, type: 'POTIONS', icon: potions.blue2, icon2: potions.B_blue2, duration: 15, rank: 'Rare', name: 'Coins Potion II', level: 2,
        desc: 'Increases the amount of coins you earn from mining fossils.\nLasts 15 minutes! \n👆 click to activate', effect: 'coin', effectVal: 4,
    },
    {
        no: 4008, type: 'POTIONS', icon: potions.red2, icon2: potions.B_red2, duration: 10, rank: 'Rare', name: 'Speed Potion II', level: 2,
        desc: 'Boosts your speed, allowing you to move faster.\nLasts 10 minutes! \n👆 click to activate', effect: 'speed', effectVal: 4,
    },
    {
        no: 4009, type: 'POTIONS', icon: potions.greed2, icon2: potions.B_greed2, duration: 5, rank: 'Rare', name: 'Damage Potion II', level: 2,
        desc: 'Increases the damage you deal while mining.\nLasts 5 minutes! \n👆 click to activate', effect: 'damage', effectVal: 6,
    },
    {
        no: 4010, type: 'POTIONS', icon: potions.purple2, icon2: potions.B_purple2, duration: 15, rank: 'Rare', name: 'Treasure Potion II', level: 2,
        desc: 'Increases your chances of finding treasure while mining.\nLasts 15 minutes! \n👆 click to activate', effect: 'treasure', effectVal: 4,
    },
    {
        no: 4011, type: 'POTIONS', icon: potions.yellow3, icon2: potions.B_yellow3, duration: 15, rank: 'Epic', name: 'Lucky Egg Potion III', level: 3,
        desc: 'Increases your chances of hatching rare pets from eggs.\nLasts 15 minutes! \n👆 click to activate', effect: 'egg_luck', effectVal: 6,
    },
    {
        no: 4012, type: 'POTIONS', icon: potions.blue3, icon2: potions.B_blue3, duration: 15, rank: 'Epic', name: 'Coins Potion III', level: 3,
        desc: 'Increases the amount of coins you earn from mining fossils.\nLasts 15 minutes! \n👆 click to activate', effect: 'coin', effectVal: 6,
    },
    {
        no: 4013, type: 'POTIONS', icon: potions.red3, icon2: potions.B_red3, duration: 10, rank: 'Epic', name: 'Speed Potion III', level: 3,
        desc: 'Boosts your speed, allowing you to move faster.\nLasts 10 minutes! \n👆 click to activate', effect: 'speed', effectVal: 6,
    },
    {
        no: 4014, type: 'POTIONS', icon: potions.greed3, icon2: potions.B_greed3, duration: 5, rank: 'Epic', name: 'Damage Potion III', level: 3,
        desc: 'Increases the damage you deal while mining.\nLasts 5 minutes! \n👆 click to activate', effect: 'damage', effectVal: 8,
    },
    {
        no: 4015, type: 'POTIONS', icon: potions.purple3, icon2: potions.B_purple3, duration: 15, rank: 'Epic', name: 'Treasure Potion III', level: 3,
        desc: 'Increases your chances of finding treasure while mining.\nLasts 15 minutes! \n👆 click to activate', effect: 'treasure', effectVal: 6,
    },
    //#endregion
    // Perks
    //#region 
    {
        no: 5001, type: 'PERKS', name: 'Beginner Pack', icon: LGPT_ICONS.PerksBeginner, rank: 'epic',
        desc: 'Start your fossil hunting adventure with essential boosts! \n+15 items!',
        robux: 60, info: 'biginner_pack',
    },
    {
        no: 5002, type: 'PERKS', name: 'Mining Master', icon: LGPT_ICONS.PerksMiningMaster, rank: 'epic',
        desc: 'Become a true mining expert! \n+25 mining items!',
        robux: 80, info: 'mining_master',
    },
    {
        no: 5005, type: 'PERKS', name: 'Ultimate Miner', icon: LGPT_ICONS.PerksUltimateMiner, rank: 'epic',
        desc: 'Unleash the full potential of your mining capabilities! \n+40 mining items!',
        robux: 100, info: 'ultimate_miner',
    },
    {
        no: 5004, type: 'PERKS', name: 'Powerhouse', icon: LGPT_ICONS.PerksPowerHouse, rank: 'epic',
        desc: 'Boost your mining power and speed! \n+60 mining items!',
        robux: 120, info: 'powerhouse',
    },
    {
        no: 5003, type: 'PERKS', name: 'Lucky Streak Pass', icon: LGPT_ICONS.PerksLuckyStreak, rank: 'legendary',
        desc: 'Permanently increase your luck in all aspects of the game, including egg Hatching!',
        robux: 200, info: 'lucky_pass', level: -1, model_name: 'pass', model_id: 1022175477,
    },
    //#endregion
    // Limited Items
    //#region 
    {
        no: 6001, type: 'LIMITED', name: 'Mythical Pet Egg', icon: LGPT_ICONS.LimMythicalPetEgg, rank: 'epic',
        desc: 'Has a chance to hatch a mythical pet!', robux: 40, info: 'mythical_pet',
    },
    {
        no: 6002, type: 'LIMITED', name: 'Divine Pet Egg', icon: LGPT_ICONS.LimDevinePetEgg, rank: 'epic',
        desc: 'Has a chance to hatch a divine pet!', robux: 60, info: 'divine_pet',
    },
    {
        no: 6003, type: 'LIMITED', name: 'Mystery Box', icon: LGPT_ICONS.LimMysteryBox, rank: 'epic',
        desc: 'Contains a random assortment of valuable items!\n+30 items!', robux: 80, info: 'box'
    },
    {
        no: 6004, type: 'LIMITED', name: 'Mega Mystery Box', icon: LGPT_ICONS.LimMegaMysteryBox, rank: 'epic',
        desc: 'Contains a larger assortment of even rarer items!\n+50 items!', robux: 120, info: 'mega_box'
    },
    {
        no: 6005, type: 'LIMITED', name: 'Developer Pack', icon: LGPT_ICONS.LimDeveloperPack, rank: 'epic', info: 'dev_pack',
        desc: 'Show your support for the game and receive exclusive in-game items (Pets,Hoverboards)!\n+3 exclusive items!', robux: 200,
    },
    //#endregion
] as LIItemConfig[]

const maxPetConf = LITEMS.filter(l => l.type === 'PETS').sort((a, b) => {
    return (a.damage || 0) > (b.damage || 0)
})[0]
print('max', maxPetConf)

export const RetexturedPets = [
    // {
    //     parent: 6, name: 'velo',
    //     textures: [
    //         { no: 30, src: 'rbxassetid://99521534842023', damage: 250, },
    //         { no: 31, src: 'rbxassetid://87645536304063', damage: 250, },]
    // },
    {
        parent: 2, name: 'tricera',
        textures: [
            { no: 32, src: 'rbxassetid://82492790721076', damage: 250, icon: 'rbxassetid://92734649451841' },
            { no: 33, src: 'rbxassetid://74796226595485', damage: 250, icon: 'rbxassetid://127434900744719' },]
    },
    {
        parent: 7, name: 'trex',
        textures: [
            { no: 34, src: 'rbxassetid://97407185335075', damage: 250, icon: 'rbxassetid://97591165096180' },
            { no: 35, src: 'rbxassetid://138384724930214', damage: 250, icon: 'rbxassetid://97591165096180' },]
    },
    {
        parent: 10, name: 'stego',
        textures: [
            { no: 36, src: 'rbxassetid://111894055518230', damage: 250, icon: 'rbxassetid://126245095691901' },
            { no: 37, src: 'rbxassetid://111768721904164', damage: 250, icon: 'rbxassetid://95300577825822' },]
    },
    {
        parent: 1, name: 'saber',
        textures: [
            { no: 38, src: 'rbxassetid://139263658039492', damage: 250, icon: 'rbxassetid://95300577825822' },
            { no: 39, src: 'rbxassetid://111755017941811', damage: 250, icon: 'rbxassetid://108636450671188' },]
    },
    {
        parent: 3, name: 'ptero',
        textures: [
            { no: 40, src: 'rbxassetid://134046199092913', damage: 250, icon: 'rbxassetid://93929849754510' },
            { no: 41, src: 'rbxassetid://107659558277084', damage: 250, icon: 'rbxassetid://115913888232550' },]
    },
    {
        parent: 9, name: 'mammoth',
        textures: [
            { no: 42, src: 'rbxassetid://77567913654776', damage: 250, icon: 'rbxassetid://130360849048296' },
            { no: 43, src: 'rbxassetid://138386847521635', damage: 250, icon: 'rbxassetid://81571203851144' },]
    },
    {
        parent: 8, name: 'dodo',
        textures: [
            { no: 44, src: 'rbxassetid://93150777591968', damage: 250, icon: 'rbxassetid://85932207793680' },
            { no: 45, src: 'rbxassetid://122658739736790', damage: 250, icon: 'rbxassetid://93566706233928' },]
    },
    {
        parent: 4, name: 'bracho',
        textures: [
            { no: 46, src: 'rbxassetid://99910741518828', damage: 250, icon: 'rbxassetid://110943433527693' },
            // { no: 47, src: 'rbxassetid://125050030610869', damage: 250, },
        ]
    },
];

// Add retextured pets
(() => {
    let pos = 0
    for (const pet of RetexturedPets) {
        for (const tex of pet.textures) {
            const par = LITEMS.find(t => t.no === pet.parent)
            if (par) {
                const damage = (pos + 1) * 250 + maxPetConf.damage!
                const newPet = { ...par, ...tex, retextured: true, damage } as LIItemConfig
                LITEMS.push(newPet)
                pos++
            }
        }
    }
})()