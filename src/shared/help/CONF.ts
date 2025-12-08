import { getItemConf, IItemConfig, ITEMS_CONFING } from "./DATA"

export const STAGE_CONF = [
    { no: 150, fossils: ['bone', 'dino'] },
    { no: 150, fossils: ['bone', 'dino'] },
    { no: 150, fossils: ['bone', 'dino', 'crate'] },
    { no: 150, fossils: ['bone', 'dino', 'crate'] },
    { no: 150, fossils: ['bone', 'dino', 'crate', 'fossil'] },
    { no: 150, fossils: ['bone', 'dino', 'crate', 'fossil'] },
]
for (let i = 0; i < 100; i++) {
    STAGE_CONF.push({ no: 100, fossils: ['bone', 'dino', 'crate', 'fossil'] },)
}

export const compress = (items: number[]) => {
    const data = {} as { [key: string]: number }
    for (const item of items) {
        const val = item + ''
        if (!data[val]) {
            data[val] = 0
        }
        data[val]++
    }
    return data
}

export const decompress = (data: { [key: string]: number }) => {
    const items = [] as number[]
    for (const [key, v] of pairs(data)) {
        if (typeIs(key, 'number')) {
            warn('decompressing bad data', key)
        }
        for (let i = 0; i < v; i++) {
            items.push(tonumber(key)!)
        }
    }
    return items
}

export const DEF_STORE = {
    "stats": {
        gems: 0,
        coins: 0,
        stage: 1,
        rank: 1,
        rebirth: 0,
    },
    "inv": {
        // pets: getPets(false) as number[],
        // boosts: [3001, 3002] as number[],
        data: { ...compress([1, 2, 3001, 3002]) } as { [key: string]: number },
        slots: [
            { open: true, rank: 1, item: -1, cost: 40 },
            { open: true, rank: 3, item: -1, cost: 40 },
            { open: true, rank: 5, item: -1, cost: 40 },
            { open: true, rank: 7, item: -1, cost: 40 },
            { open: true, rank: 9, item: -1, cost: 40 },
            { open: false, rank: -1, item: -1, cost: 40 },
            { open: false, rank: -1, item: -1, cost: 80 },
            { open: false, rank: -1, item: -1, cost: 120 },
        ] as { open: boolean, rank: number, item: number, cost: number }[],
    },
    "temp": {
        actives: [] as { id: number, count: number, start: number, duration: number }[],
        claimed_rewards: [] as number[],
        purchase: {} as { id: number, count: number, ver: TDEV_PROD },
        // drops: {} as { [key: number]: { [key: string]: { pos: Vector3, time: number, ver: string, owner: number, taken: boolean } } },
        active_pets: [] as number[],
        active_hover: -1,
        claimed_time_rewards: [] as number[],
    },
    "pref": {
        showRanker: true,
        showRewards: false,
        allowTrade: 'Yes',
        hideOtherPets: 'No',
        music_volume: 0.5,
        sfx_volume: 1,
        pet_sfx_volume: 1,
        next_area: true,
        boosts: true,
        petLimit: 10,
        hoverPos: 1,
        group_rewards_time: 0,
    },
    "ranker": {
    } as { [key: string]: { start: number, all: number } }
}

export type IStore = typeof DEF_STORE

export const DEV_PRODUCTS = {
    5: 2672894912,
    10: 2672894288,
    15: 2672894681,
    20: 2672895318,
    25: 2672896030,
    30: 2673032308,
    35: 2673032666,
    40: 2673032987,
    60: 2673407706,
    80: 2673407199,
    100: 2673407439,
    120: 2673407706,

}
export type TDEV_PROD = 'slot' | 'shop' | 'pet_limit'


export const EGG_PETS = [] as [[IItemConfig, number, number], [IItemConfig, number, number], [IItemConfig, number, number]][]
const PETS = ITEMS_CONFING.filter(t => t.type === 'PETS')
math.randomseed(100)
let j = 0
let pos = 0
for (let i = 0; i < 200; i++) {
    let a = j
    let b = j + 1
    let c = j + 2
    let ra = 78 + math.random(-5, 5)
    let rb = 12 + math.random(-3, 3)
    let rc = 100 - ra - rb
    EGG_PETS.push([
        [PETS[a], ra, ra],
        [PETS[b], rb, ra + rb],
        [PETS[c], rc, ra + rb + rc],
    ])
    pos += 2
    const NO = 1
    if (pos > NO) {
        pos = 0
        j = math.min(PETS.size() - 3, j + 3)
    }
}
math.randomseed(os.time())

export const ANIM_CONF = {
    '01_sabertooth': {
        jump: '83601906443535',
        idle: '75665081336262',
        dig: '87859557175498',
    },
    '02_triceratops': {
        jump: '109322949409624',
        idle: '110289177125836',
        dig: '98077973836493',
    },
    '04_dino': {
        jump: '116261485417660',
        idle: '86564658109611',
        dig: '124441623327312',
    },
    '07_bracho': {
        jump: '73721009971800',
        idle: '92069115720340',
        dig: '88523565382670',
    },
    '05_black_velo': {
        jump: '77267585356705',
        idle: '90187561276636',
        dig: '79186456786190',
    },
    '08_trex': {
        jump: '97789688992955',
        idle: '94665495765123',
        dig: '94882575877712',
    },
    '03_dodo': {
        jump: '91162347594011',
        idle: '72544133593477',
        dig: '132849375230804',
    },
    '06_mamuth': {
        jump: '107618154396980',
        idle: '126532322101747',
        dig: '101858315988003',
    },
    '09_stego': {
        jump: '119920601572629',
        idle: '109439330759692',
        dig: '129174946763770',
    },
    '12_leon_desert': {
        jump: '84024950021352',
        idle: '130912227893602',
        dig: '138523819266600',
    },
    '10_giant_crab': {
        jump: '75628042389194',
        idle: '112700193768044',
    },
    '11_scorpion': {
        jump: '134932544543434',
        idle: '80163151802492',
    },
    '13_bearded_dragon': {
        jump: '107755011700243',
        idle: '137885996902664',
        dig: '127449121546128',
    },
    '14_horned_cobra': {
        jump: '138374671572237',
        idle: '91188856819898',
    },
    '15_stripped_owl': {
        jump: '128898273626587',
        idle: '103216091398838',
        dig: '91319080849265',
    },
    '16_sphinx': {
        jump: '119162084599808',
        idle: '138702138402557',
        dig: '77273438788372',
    },
    '17_anubis': {
        jump: '121759114990595',
        idle: '91777448103460',
        dig: '81837045535399',
    },
    '18_spirit_bear': {
        jump: '124418610639648',
        idle: '138476613405134',
    },
    '19_spirit_owl': {
        jump: '91155375908530',
        idle: '104090159114797',
        dig: '78263270055350',
    },
    '20_spirit_wolf': {
        jump: '99101803043343',
        idle: '131913235035266',
        dig: '133931478274385',
    },
    '1_castoroides': {
        jump: '102894665973008',
        idle: '97838977939251',
        dig: '84244508901411',
    },
    '2_coelodonta': {
        jump: '126794773917808',
        idle: '79656709252922',
    },
    '3_glyptodon': {
        jump: '91079921737846',
        idle: '98877829955707',
        dig: '106569554667639',
    },
    '4_megatherium': {
        jump: '78273523729300',
        idle: '133270553357854',
    },
    '5_terror_bird': {
        jump: '130716131795136',
        // check
        idle: '',
        dig: '140345219257547',
    },
    '6_behemotops': {
        jump: '78998993542955',
        idle: '138850805283283',
    },
    '7_guardian_dog': {
        jump: '73904049663815',
        idle: '90832451831304',
    },
    '8_imagotaria': {
        jump: '138235622638595',
        idle: '71876223006203',
    },
    '9_guardian_crocodile': {
        jump: '102867876694863',
        idle: '115752742223813',
    },
} as { [key: string]: { [key: string]: string } }

export const ANIM_CONF_USER = {
    '01_sabertooth': {
        jump: '80729258565806',
        idle: '77683121662931',
        dig: '124514226578266',
    },
    '02_triceratops': {
        jump: '80120861867660',
        idle: '97550158359862',
        dig: '80199966610345',
        jump2: '132034538001470',
        idle2: '94384737713701',
    },
    '04_dino': {
        jump: '90572733249411',
        idle: '85313855334067',
        dig: '118915231831484',
        jump2: '',
        idle2: '',
    },
    '07_bracho': {
        jump: '102857636140548',
        idle: '91316674666426',
        dig: '132777240239689',
        jump2: '',
        idle2: '',
    },
    '05_black_velo': {
        jump: '98708069384111',
        idle: '109706811071739',
        dig: '73935785758096',
        jump2: '98708069384111',
        idle2: '109706811071739',
    },
    '08_trex': {
        jump: '130416956568674',
        idle: '129667800381789',
        dig: '138099797790753',
        jump2: '',
        idle2: '',
    },
    '03_dodo': {
        jump: '138964775644094',
        idle: '107316749294380',
        dig: '136981452598668',
        jump2: '',
        idle2: '',
    },
    '06_mamuth': {
        jump: '115326657692520',
        idle: '78697609966205',
        dig: '100710575300105',
        jump2: '',
        idle2: '',
    },
    '09_stego': {
        jump: '96480211911000',
        idle: '116901307120011',
        dig: '97557388100651',
        jump2: '',
        idle2: '',
    },
    '12_leon_desert': {
        jump: '99479357839437',
        idle: '94661871166617',
        dig: '111148152218257',
        jump2: '128306843882190',
        idle2: '92460900084282',
    },
    '10_giant_crab': {
        jump: '87420988361889',
        idle: '121395092565718',
    },
    '11_scorpion': {
        jump: '133556381020722',
        idle: '131052644773257',
    },
    '13_bearded_dragon': {
        jump: '110078321146609',
        idle: '103932946096782',
        dig: '139984261154502',
        jump2: '122796961558083',
        idle2: '74690929398164',
    },
    '14_horned_cobra': {
        jump: '72026247468331',
        idle: '101264964632618',
    },
    '15_stripped_owl': {
        jump: '100458280212417',
        idle: '108171702240896',
        dig: '129208758455598',
        jump2: '100074162335035',
        idle2: '91493450109968',
    },
    '16_sphinx': {
        jump: '107611352609208',
        idle: '86414314649513',
        dig: '129663972060778',
        jump2: '103477258968612',
        idle2: '115075624324340',
    },
    '17_anubis': {
        jump: '109245208074446',
        idle: '87341558310639',
        dig: '122367781739713',
        jump2: '111615597129489',
        idle2: '109891688103214',
    },
    '18_spirit_bear': {
        jump: '115148761558428',
        idle: '121004207392761',
    },
    '19_spirit_owl': {
        jump: '72011130984586',
        idle: '95835814597538',
        dig: '121967447869134',
        jump2: '123054747858864',
        idle2: '89439456534067',
    },
    '20_spirit_wolf': {
        jump: '115927656971278',
        idle: '92202840725031',
        dig: '79733786851220',
        jump2: '87516625321422',
        idle2: '133805034641130',
    },
    '1_castoroides': {
        jump: '92148613747683',
        idle: '102069759155225',
        dig: '92175970251506',
        jump2: '95136625279498',
        idle2: '113948891425398',
    },
    '2_coelodonta': {
        jump: '135441126802416',
        idle: '79242653851454',
    },
    '3_glyptodon': {
        jump: '121006768885459',
        idle: '80315915092906',
        dig: '92085634699317',
        jump2: '96790737630393',
        idle2: '104741813246420',
    },
    '4_megatherium': {
        jump: '85658291731860',
        idle: '107667908156877',
    },
    '5_terror_bird': {
        jump: '129210997984747',
        idle: '90037295107946',
        dig: '90037295107946',
        jump2: '110968054827267',
        idle2: '108484114256876',
    },
    '6_behemotops': {
        jump: '89443571294560',
        idle: '93274040469123',
    },
    '7_guardian_dog': {
        jump: '117963373717115',
        idle: '91183676258837',
    },
    '8_imagotaria': {
        jump: '121964715433181',
        idle: '97709583174923',
    },
    '9_guardian_crocodile': {
        jump: '117459640318672',
        idle: '140630261503457',
    },
} as { [key: string]: { [key: string]: string } }


export const ANIMATED = [
    '01_sabertooth',
    '02_triceratops',
    '04_dino',
    '05_black_velo',
    '08_trex',
    '03_dodo',
    '06_mamuth',
    '09_stego',
]

export const NOT_ANIMATED = [
    '07_bracho',
    '12_leon_desert',
    '10_giant_crab',
    '11_scorpion',
    '13_bearded_dragon',
    '14_horned_cobra',
    '15_stripped_owl',
    '16_sphinx',
    '17_anubis',
    '18_spirit_bear',
    '19_spirit_owl',
    '20_spirit_wolf',
    '1_castoroides',
    '2_coelodonta',
    '3_glyptodon',
    '4_megatherium',
    '5_terror_bird',
    '6_behemotops',
    '7_guardian_dog',
    '8_imagotaria',
    '9_guardian_crocodile',
]



export const getPetIds = (store: IStore) => {
    return decompress(store.inv.data).filter(f => {
        const conf = getItemConf(f)
        return conf && conf?.type === 'PETS'
    })
}

export const getBoostIds = (store: IStore) => {
    return decompress(store.inv.data).filter(f => {
        const conf = getItemConf(f)
        return conf && conf?.type !== 'PETS'
    })
}

export const REBIRTH_STAGES = [25, 50, 75, 95]


export const shouldRebirth = (curStage: number, curRebirth: number, showAll = false): [boolean, number] => {
    const points = REBIRTH_STAGES.map((p, i) => {
        return ({ no: i + 1, stage: p })
    })
    for (const point of points) {
        if (curRebirth < point.no || showAll) {
            if (curStage === point.stage) {
                return [true, point.no]
            }
        }
    }
    return [false, 0]
}

export const isGameTester = (player: Player) => {
    const names = [
        'shem'
    ]
    for (const name of names) {
        if (player.Name.lower().find('shem')) {
            return true
        }
    }
    return false
}