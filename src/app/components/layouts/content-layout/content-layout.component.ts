import { Component } from '@angular/core'
import { HeaderComponent } from '../../header/header.component'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-content-layout',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './content-layout.component.html',
})
export class ContentLayoutComponent {}
