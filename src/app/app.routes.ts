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
    title: 'Demo', // note that this will be ignored and replaced by the dynamic title
    component: DemoComponent,
  },
  {
    path: 'demo/:id',
    title: 'Demo #id', // note that this will be ignored and replaced by the dynamic title
    loadComponent: () => import('./demo/demo.component'),
  },
];
