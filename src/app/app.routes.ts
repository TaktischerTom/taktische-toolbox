import { Routes } from '@angular/router'
import { StartLayoutComponent } from './components/layouts/start-layout/start-layout.component'
import { StartComponent } from './pages/start/start.component'
import { GwRaidsComponent } from './pages/gw-raids/gw-raids.component'
import { ImguiEditComponent } from './pages/imgui-edit/imgui-edit.component'

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
    component: StartLayoutComponent,
    children: [
      {
        path: '',
        component: GwRaidsComponent,
      },
    ],
  },
  {
    path: 'imgui',
    component: StartLayoutComponent,
    children: [
      {
        path: '',
        component: ImguiEditComponent,
      },
    ],
  },
]
