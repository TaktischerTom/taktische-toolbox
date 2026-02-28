import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ImguiEditComponent } from './imgui-edit.component'

describe('ImguiEditComponent', () => {
  let component: ImguiEditComponent
  let fixture: ComponentFixture<ImguiEditComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImguiEditComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ImguiEditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
