import { RunService } from "@rbxts/services"
import { getIgnoreFold } from "shared/help/assist"
import { randSample } from "shared/help/math"

const IgnoreFold = getIgnoreFold()

export const sounds = {
    click1: 'rbxassetid://18405797531',
    click2: 'rbxassetid://18405797090',
    click_pos_jimgle: 'rbxassetid://18405797801',
    unlock: 'rbxassetid://17426289244',
    hover_mount: 'rbxassetid://8352945391',

    lobby_sound: 'rbxassetid://8963271787',
    positive_notification: 'rbxassetid://10767227887',
    alert_notification: 'rbxassetid://10653761600',
    frame_open: 'rbxassetid://10248078778',
    button_click2: 'rbxassetid://10247736437',
    button_click: 'rbxassetid://10183593560',
    egg_crack: 'rbxassetid://11454500367',

    coins_jingle_higher: 'rbxassetid://95525088840626',
    coins_short_higher: 'rbxassetid://79664721335967',
    coins_long_higher: 'rbxassetid://93348869700143',

    coins_long: 'rbxassetid://18405798243',
    coins_jingle: 'rbxassetid://18405798548',
    coins_short: 'rbxassetid://18405798849',

    bonus_accuracy: 'rbxassetid://2789419376',
    bonus_perfect: 'rbxassetid://2789419857',

    use_potion: 'rbxassetid://550210148',
    eat1: 'rbxassetid://18787611572',
    eat_fast: 'rbxassetid://1398544778',
    eat2: 'rbxassetid://3043029786',
    water_puddle: 'rbxassetid://9117947037',

    coin_collect1: 'rbxassetid://3125624765',
    coin_collect2: 'rbxassetid://8646410774',
    coin_collect3: 'rbxassetid://1169755927',

    click_mine1: 'rbxassetid://9119720940',
    click_mine2: 'rbxassetid://452267918',
    click_mine3: 'rbxassetid://15675059323',

    breaking_crate1: 'rbxassetid://6700552345',
    breaking_crate2: 'rbxassetid://18675507183',

    rebirth_spooks: 'rbxassetid://1837467212',
    water_splash: 'rbxassetid://142431247',

    vending_machine_ambient: 'rbxassetid://132236427337175',
    vending_machine_action: 'rbxassetid://4587047471',

    ambient_forest_birds_crows_crickets: 'rbxassetid://577701082',
    ambient_scary_place_wellows: 'rbxassetid://133838630142849', //vov 0.7
    ambient_wind_waterfall: 'rbxassetid://5799870105', //vol 0.2
    ambient_scare_forest_mostly_birds: 'rbxassetid://139393062477955',
    ambient_city_sound_short_silent: 'rbxassetid://132011937',
    ambient_water_sound_effects_bubbling_short: '4766793559',
    ambient_water_sound_env_effect: '2874620507',
    ambient_water_fallsounds_short: 'rbxassetid://722948012', //vol 0.7

    ambient_twin_prop_engine_propellers: 'rbxassetid://2154685557',
    ambient_prop_eninge: 'rbxassetid://2149848771',

}

export type TVerName = 'coin' | 'jiggle' | 'lobby' | 'bonus' | 'eat' | 'click_mine' | 'breaking_crate' | 'coin_collect'

export type TSoundKind = 'sfx'

export const playSound = ({ ver, verName, name, pos, volume = 0.5, looped = false }: {
    ver: 'NAMED' | 'TYPED', verName?: TVerName, kind?: TSoundKind,
    name?: keyof typeof sounds, pos?: Vector3, volume?: number, looped?: boolean
}) => {
    if (RunService.IsServer()) {
        warn("Playing sound from server!", ver, verName, name)
    }
    let soundId = ''
    if (ver === 'TYPED') {
        const soundMap = {
            coin: [
                // sounds.coins_short, sounds.coins_short_higher, sounds.coins_short, sounds.coins_short_higher,
                sounds.coins_short, sounds.coins_short_higher, sounds.coins_short, sounds.coins_short_higher,
                sounds.coins_long_higher, sounds.coins_long_higher,
                sounds.coins_long,
            ],
            jiggle: [sounds.coins_jingle, sounds.coins_jingle_higher],
            lobby: [sounds.lobby_sound, sounds.lobby_sound],
            bonus: [sounds.bonus_accuracy, sounds.bonus_perfect],
            eat: [sounds.eat1, sounds.eat2, sounds.eat_fast],
            click_mine: [sounds.click_mine2, sounds.click_mine3],
            breaking_crate: [sounds.breaking_crate1, sounds.breaking_crate2],
            coin_collect: [sounds.coin_collect1, sounds.coin_collect2, sounds.coin_collect3],
        } as Record<TVerName, string[]>
        soundId = randSample(soundMap[verName!])
    } else {
        soundId = sounds[name!]
        if (!soundId) {
            warn('No sound named ', name)
        }
    }
    const s = new Instance('Sound')
    if (soundId.size() > 2) {
        if (pos) {
            const part = new Instance('Part')
            part.Position = pos || Vector3.one
            part.Parent = IgnoreFold;
            part.Transparency = 1
            part.CanCollide = false;
            part.Anchored = true
            s.Parent = part
        } else {
            s.Parent = IgnoreFold //getHRP()
        }
        s.Volume = volume * 0.1
        s.SoundId = soundId
        if (pos) {
            s.RollOffMaxDistance = 100
            s.RollOffMinDistance = 10
        }
        s.Looped = looped
        s.Ended.Connect(() => {
            if (pos) s.Parent?.Destroy()
            s.Destroy()
        })
        s.Play()
    }
    return s
}
