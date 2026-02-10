import { ComponentFixture, TestBed } from '@angular/core/testing'

import { GwRaidsComponent } from './gw-raids.component'

describe('GwRaidsComponent', () => {
  let component: GwRaidsComponent
  let fixture: ComponentFixture<GwRaidsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GwRaidsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(GwRaidsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
