import { Routes } from '@angular/router';

import DemoComponent from './demo/demo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full',
  },
  {
    path: 'demo',
    title: 'Defer & Incremental Hydration',
    component: DemoComponent,
  },
];
