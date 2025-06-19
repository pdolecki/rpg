import { Routes } from '@angular/router';
import Home from './features/home/home';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'development',
    loadComponent: () =>
      import('./features/development/development').then((m) => m.default),
  },
  {
    path: 'professions',
    loadComponent: () =>
      import('./features/lists/professions').then((m) => m.default),
  },
  {
    path: 'qualities',
    loadComponent: () =>
      import('./features/lists/qualities').then((m) => m.default),
  },
  {
    path: 'states',
    loadComponent: () =>
      import('./features/lists/states').then((m) => m.default),
  },
  {
    path: 'talents',
    loadComponent: () =>
      import('./features/lists/talents').then((m) => m.default),
  },
  {
    path: 'heroes',
    loadComponent: () =>
      import('./features/heroes/heroes').then((m) => m.default),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
