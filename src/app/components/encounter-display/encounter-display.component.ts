import { Component, Input, OnInit } from '@angular/core'
import { RaidEncounter } from '../../../types/Entities/gw-types'
import { NgStyle } from '@angular/common'
import { getEncounterBackground } from '../../shared/gw-assets'

@Component({
  selector: 'app-encounter-display',
  imports: [NgStyle],
  templateUrl: './encounter-display.component.html',
})
export class EncounterDisplayComponent implements OnInit {
  @Input()
  public encounter: RaidEncounter = {
    id: 'vg',
    name: 'Vale Guardian',
    type: 'boss',
    origin: 'raid',
    expansion: 'hot',
    wing: 'W1',
  }
  @Input()
  public active: boolean = true

  public encounterBackground: string = ''

  constructor() {}

  ngOnInit(): void {
    this.encounterBackground = getEncounterBackground(this.encounter)
  }
}
