import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../data-access/auth-store';

export const isAuthenticatedGuard = (): CanActivateFn => {
  return () => {
    const authStore = inject(AuthStore);
    const router = inject(Router);

    if (authStore.user()) {
      return true;
    }

    return router.parseUrl('auth/login');
  };
};
