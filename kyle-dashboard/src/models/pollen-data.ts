export interface PollenData {
    pollenCount: PollenCount,
    pollenRisk: PollenRisk
}

export interface PollenCount {
    grass_pollen: number,
    tree_pollen: number,
    weed_pollen: number
}

export interface PollenRisk {
    grass_pollen: string,
    tree_pollen: string,
    weed_pollen: string
}