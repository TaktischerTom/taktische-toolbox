import { Component } from '@angular/core'
import { HeaderComponent } from '../../header/header.component'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-start-layout',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './start-layout.component.html',
})
export class StartLayoutComponent {}
