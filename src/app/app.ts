import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavItem } from './shared/interfaces/nav-item';
import { Navigation } from './shell/navigation';
import { LoadingStore } from './shared/data-access/loading-store';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthStore } from './shared/data-access/auth-store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatProgressSpinnerModule, Navigation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (loadingStore.isLoading()) {
    <div class="loader">
      <mat-spinner></mat-spinner>
    </div>
    }
    <app-navigation [navItems]="navItems" [isLoggedIn]="isLoggedIn()">
      <router-outlet />
    </app-navigation>
  `,
  styles: `
    .loader {
      position: fixed;
      z-index: 9999;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-background);
    }
  `,
})
export class App {
  protected readonly authStore = inject(AuthStore);
  protected readonly loadingStore = inject(LoadingStore);
  protected readonly navItems: NavItem[] = [
    { label: 'Strona główna', path: '/home' },
    { label: 'Rozwój postaci', path: '/features/development' },
    { label: 'Lista Profesji', path: '/features/professions' },
    { label: 'Lista Stanów', path: '/features/states' },
    { label: 'Lista Talentów', path: '/features/talents' },
    { label: 'Cechy wyposażenia', path: '/features/qualities' },
    { label: 'Bohaterowie', path: '/features/heroes' },
  ];
  protected readonly isLoggedIn = computed(() => !!this.authStore.user());
}
