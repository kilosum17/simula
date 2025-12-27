import { objValues, toJson } from "shared/help/assist";
import { GPT_ICONS } from "shared/help/DATA";
import { countMapToTuples, stringContains } from "shared/help/math";
import { getAnyConf } from "shared/help/pet_catalog";

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
}

export const getFilteredItems = ({ kind, itemIds, searchText }: {
    kind: string, itemIds: Record<string, number>, searchText: string
}): TItemGroup[] => {
    const ids = countMapToTuples(itemIds).filter(p => {
        if (kind === 'all') return true
        const conf = getAnyConf(p[0])
        if (searchText && searchText !== '') {
            const text = toJson(objValues(conf))
            return stringContains(text, searchText)
        }
        if (conf.isPet) {
            if (kind === 'Pets') return true
        } else {
            if (kind === 'Boosts') return conf?.type === "BOOSTS"
            if (kind === 'Potions') return conf?.type === "POTIONS"
            if (kind === 'Hovers') return conf?.type === "HOVERBOARDS"
        }
        return false
    })
    ids.sort((a, b) => {
        const confA = getAnyConf(a[0])!
        const confB = getAnyConf(b[0])!
        return confA.name! > confB.name!
    })
    ids.sort((a, b) => {
        const confA = getAnyConf(a[0])!
        const confB = getAnyConf(b[0])!
        return confA.isPet && !confB.isPet
    })

    const list = ids.map(id => {
        const conf = getAnyConf(id[0])
        return {
            id: id[0],
            count: id[1],
            conf: conf,
        }
    })
    if (searchText) {
        print('Search', searchText, list.map(l => l.conf.name))
    }
    return list
}

