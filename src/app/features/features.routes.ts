import { Route } from '@angular/router';

export const FEATURES_ROUTES: Route[] = [
  {
    path: 'development',
    loadComponent: () => import('./development'),
  },
  {
    path: 'heroes',
    loadComponent: () => import('./heroes'),
  },
  {
    path: 'professions',
    loadComponent: () => import('./professions'),
  },
  {
    path: 'qualities',
    loadComponent: () => import('./qualities'),
  },
  {
    path: 'states',
    loadComponent: () => import('./states'),
  },
  {
    path: 'talents',
    loadComponent: () => import('./talents'),
  },
];
