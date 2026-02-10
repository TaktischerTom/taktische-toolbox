import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EncounterDisplayComponent } from './encounter-display.component'

describe('EncounterDisplayComponent', () => {
  let component: EncounterDisplayComponent
  let fixture: ComponentFixture<EncounterDisplayComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncounterDisplayComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(EncounterDisplayComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
