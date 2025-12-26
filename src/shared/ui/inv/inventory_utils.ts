import { getItemConf, GPT_ICONS } from "shared/help/DATA";
import { countMapToTuples } from "shared/help/math";
import { getPetConf } from "shared/help/pet_catalog";

export const invSidebarItems = [
    { icon: GPT_ICONS.nav_dinopaw, name: 'Pets', ver: 'pets' },
    { icon: GPT_ICONS.nav_backpack, name: 'Boosts', ver: 'boosts' },
    { icon: GPT_ICONS.nav_potions, name: 'Potions', ver: 'potions' },
    // { icon: GPT_ICONS.nav_book, name: 'Enchants', ver: 'books' },
    { icon: GPT_ICONS.nav_hover, name: 'Hovers', ver: 'hoverboards' },
]

export type TItemGroup = {
    id: string,
    count: number
    kind: 'pet' | 'boost'
}

export const getItemsInGroups = (sidebarItem: string, petIds: Record<string, number>,
    boostIds: Record<string, number>
): TItemGroup[] => {
    const pIds = countMapToTuples(petIds).filter(p => {
        if (sidebarItem === 'all') return true
        if (sidebarItem === 'Pets') return true
        return false
    })
    pIds.sort((a, b) => {
        return getPetConf(tonumber(a[0])!)!.damage > getPetConf(tonumber(b[1])!)!.damage
    })
    const plist = pIds.map(id => {
        return { id: id[0], count: id[1], kind: 'pet' as const }
    })
    const bIds = countMapToTuples(boostIds).filter(p => {
        const conf = getItemConf(tonumber(p[0])!)
        if (sidebarItem === 'Boosts') return conf?.type === "BOOSTS"
        if (sidebarItem === 'Potions') return conf?.type === "POTIONS"
        if (sidebarItem === 'Hovers') return conf?.type === "HOVERBOARDS"
        return false
    })
    bIds.sort((a, b) => {
        return getItemConf(tonumber(a[0])!)!.name > getItemConf(tonumber(b[0])!)!.name
    })
    const blist = bIds.map(id => {
        return { id: id[0], count: id[1], kind: 'boost' as const }
    })
    return [...plist, ...blist]
}

