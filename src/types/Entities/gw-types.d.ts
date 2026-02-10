export type EncounterType = 'boss' | 'event'
export type EncounterOrigin = 'raid' | 'strike'
export type Expansion =
  | 'core'
  | 'hot'
  | 'pof'
  | 'ibs'
  | 'eod'
  | 'soto'
  | 'janthir'
  | 'voe'
export type RaidWing = 'W1' | 'W2' | 'W3' | 'W4' | 'W5' | 'W6' | 'W7' | 'W8'

export type RaidEncounter = {
  id: string
  name: string
  type: EncounterType
  origin: EncounterOrigin
  expansion: Expansion
  wing?: RaidWing
}
