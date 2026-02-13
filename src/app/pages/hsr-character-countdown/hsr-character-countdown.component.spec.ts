import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HsrCharacterCountdownComponent } from './hsr-character-countdown.component'

describe('HsrCharacterCountdownComponent', () => {
  let component: HsrCharacterCountdownComponent
  let fixture: ComponentFixture<HsrCharacterCountdownComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HsrCharacterCountdownComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(HsrCharacterCountdownComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
