import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {
  EncounterOrigin,
  EncounterType,
  Expansion,
  RaidEncounter,
  RaidWing,
} from '../../../types/Entities/gw-types'
import { EncounterDisplayComponent } from '../../components/encounter-display/encounter-display.component'
import { NzSwitchComponent } from 'ng-zorro-antd/switch'
import { FormsModule } from '@angular/forms'

type EncounterListItem = {
  encounter: RaidEncounter
  active: boolean
}

@Component({
  selector: 'app-gw-raids',
  imports: [EncounterDisplayComponent, NzSwitchComponent, FormsModule],
  templateUrl: './gw-raids.component.html',
})
export class GwRaidsComponent {
  public raidEncounterList: EncounterListItem[] = []
  public edit: boolean = false

  constructor(private http: HttpClient) {
    this.http
      .get('assets/data/raid-bosses.csv', { responseType: 'text' })
      .subscribe(
        (data) => {
          let csvToRowArray = data.split('\n')
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(',')
            this.raidEncounterList.push({
              encounter: {
                name: row[0],
                id: row[1],
                type: row[2] as EncounterType,
                origin: row[3] as EncounterOrigin,
                expansion: row[4] as Expansion,
                wing:
                  row[3] === 'raid' ? (row[5] as RaidWing) : ('' as RaidWing),
              },
              active: true,
            })
          }
        },
        (error) => {
          console.error(error)
        }
      )
  }
}
