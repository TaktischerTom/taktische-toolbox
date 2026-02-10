import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NzButtonComponent } from 'ng-zorro-antd/button'

@Component({
  selector: 'app-start',
  imports: [RouterLink, NzButtonComponent],
  templateUrl: './start.component.html',
})
export class StartComponent {}
