import type {
  VanguardFleetRankingProps,
  MainFleetRankingProps,
  SSFleetRankingProps,
} from "@db/types"

import { isDecentVG, isDecentMainFleet, isDecentSSFleet } from "../decentShips"

const VGFleetRankingData: Record<string, VanguardFleetRankingProps[]> =
  (await import("@db/rankings/vgFleetRankings.json").then(
    (module) => module.default,
  )) as Record<string, VanguardFleetRankingProps[]>

const MainFleetRankingData: Record<string, MainFleetRankingProps[]> =
  (await import("@db/rankings/mainFleetRankings.json").then(
    (module) => module.default,
  )) as Record<string, MainFleetRankingProps[]>

const SSFleetRankingData: Record<string, SSFleetRankingProps[]> = (await import(
  "@db/rankings/ssFleetRankings.json"
).then((module) => module.default)) as Record<string, SSFleetRankingProps[]>

const isStrongDamageDealer = (
  rankings: { lightdmg: number; mediumdmg: number; heavydmg: number }[],
) => {
  return rankings.some(({ lightdmg, mediumdmg, heavydmg }) => {
    const dmgValues = [lightdmg, mediumdmg, heavydmg]
    const highDmgCount = dmgValues.filter((dmg) => dmg >= 5).length
    const midDmgCount = dmgValues.filter((dmg) => dmg >= 4).length
    const lowDmgCount = dmgValues.filter((dmg) => dmg >= 3).length

    return highDmgCount >= 1 || midDmgCount >= 2 || lowDmgCount >= 3
  })
}

export const strongDamageDealer = (): Set<string> => {
  const dmgDealerSet = new Set<string>()

  for (const shipName of new Set([
    ...Object.keys(VGFleetRankingData),
    ...Object.keys(MainFleetRankingData),
    ...Object.keys(SSFleetRankingData),
  ])) {
    // vg fleet dmg dealer
    if (
      VGFleetRankingData[shipName] &&
      isDecentVG(shipName) &&
      isStrongDamageDealer(VGFleetRankingData[shipName])
    ) {
      dmgDealerSet.add(shipName)
    }

    // main fleet dmg dealer
    else if (
      MainFleetRankingData[shipName] &&
      isDecentMainFleet(shipName) &&
      isStrongDamageDealer(MainFleetRankingData[shipName])
    ) {
      dmgDealerSet.add(shipName)
    }

    // ss fleet dmg dealer
    else if (
      SSFleetRankingData[shipName] &&
      isDecentSSFleet(shipName) &&
      isStrongDamageDealer(SSFleetRankingData[shipName])
    ) {
      dmgDealerSet.add(shipName)
    }
  }

  return dmgDealerSet
}
