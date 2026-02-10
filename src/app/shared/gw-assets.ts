import { RaidEncounter } from '../../types/Entities/gw-types'

type EncounterBackground = {
  encounters: {
    [name: string]: string
  }
  wings: {
    [name: string]: string
  }
}

const IMG = '/assets/images/gw2'

export const ASSETS: EncounterBackground = {
  encounters: {
    ah: `${IMG}/aetherblade_hideout.webp`,
    bs: `${IMG}/raven_sanctum.webp`,
    cw: `${IMG}/cold_war.webp`,
    co: `${IMG}/cosmic_observatory.webp`,
    fraenir: `${IMG}/raven_sanctum.webp`,
    ht: `${IMG}/harvest_temple.webp`,
    ko: `${IMG}/kaineng_outlook.webp`,
    kela: `${IMG}/guardians_glade.webp`,
    olc: `${IMG}/old_lions_court.webp`,
    shiverpeaks: `${IMG}/shiverpeaks_pass.webp`,
    tof: `${IMG}/temple_of_febe.webp`,
    bears: `${IMG}/raven_sanctum.webp`,
    woj: `${IMG}/whisper_of_jormag.webp`,
    xjj: `${IMG}/xunlai_jade_junkyard.webp`,
  },
  wings: {
    W1: `${IMG}/spirit_vale.webp`,
    W2: `${IMG}/salvation_pass.webp`,
    W3: `${IMG}/stronghold_of_the_faithful.webp`,
    W4: `${IMG}/bastion_of_the_penitent.webp`,
    W5: `${IMG}/hall_of_chains.webp`,
    W6: `${IMG}/mythwright_gambit.webp`,
    W7: `${IMG}/key_of_ahdashim.webp`,
    W8: `${IMG}/mount_balrior.webp`,
  },
} as const

export function getEncounterBackground(encounter: RaidEncounter): string {
  if (encounter.origin === 'raid') {
    return ASSETS.wings[encounter.wing!] ?? ASSETS.wings['W1']
  } else {
    return ASSETS.encounters[encounter.id] ?? ASSETS.encounters['ah']
  }
}
