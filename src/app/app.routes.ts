import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './shared/guards/auth-guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home'),
    canActivate: [isAuthenticatedGuard()],
  },
  {
    path: 'features',
    loadChildren: () =>
      import('./features/features.routes').then((m) => m.FEATURES_ROUTES),
    canActivate: [isAuthenticatedGuard()],
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
