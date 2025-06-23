import { Route } from '@angular/router';

export const FEATURES_ROUTES: Route[] = [
  {
    path: 'development',
    loadComponent: () => import('./development/development'),
  },
  {
    path: 'heroes',
    loadComponent: () => import('./heroes/heroes'),
  },
  {
    path: 'professions',
    loadComponent: () => import('./professions/professions'),
  },
  {
    path: 'qualities',
    loadComponent: () => import('./qualities/qualities'),
  },
  {
    path: 'states',
    loadComponent: () => import('./states/states'),
  },
  {
    path: 'talents',
    loadComponent: () => import('./talents/talents'),
  },
];
