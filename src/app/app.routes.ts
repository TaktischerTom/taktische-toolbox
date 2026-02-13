import { Routes } from '@angular/router'
import { StartLayoutComponent } from './components/layouts/start-layout/start-layout.component'
import { StartComponent } from './pages/start/start.component'
import { GwRaidsComponent } from './pages/gw-raids/gw-raids.component'
import { ContentLayoutComponent } from './components/layouts/content-layout/content-layout.component'
import { HsrCharacterCountdownComponent } from './pages/hsr-character-countdown/hsr-character-countdown.component'

export const routes: Routes = [
  {
    path: '',
    component: StartLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: StartComponent,
      },
    ],
  },
  {
    path: 'raids',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        component: GwRaidsComponent,
      },
    ],
  },
  {
    path: 'hsr',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        component: HsrCharacterCountdownComponent,
      },
    ],
  },
]
