import { Routes } from '@angular/router'
import { StartLayoutComponent } from './components/layouts/start-layout/start-layout.component'
import { StartComponent } from './pages/start/start.component'

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
]
