import { Component } from '@angular/core'
import { TranslatePipe } from '@ngx-translate/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
