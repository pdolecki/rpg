import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavItem } from './shared/interfaces/nav-item';
import { Navigation } from './shell/navigation';
import { Loading } from './shared/data-access/loading';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatProgressSpinnerModule, Navigation],
  template: `
    @if (loading.isLoading()) {
    <div class="loader">
      <mat-spinner></mat-spinner>
    </div>
    }
    <app-navigation [navItems]="navItems">
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
  protected readonly loading = inject(Loading);
  protected readonly navItems: NavItem[] = [
    { label: 'Strona główna', path: '/home' },
    { label: 'Rozwój postaci', path: '/development' },
    { label: 'Lista Profesji', path: '/professions' },
    { label: 'Lista Stanów', path: '/states' },
    { label: 'Lista Talentów', path: '/talents' },
    { label: 'Cechy wyposażenia', path: '/qualities' },
    { label: 'Bohaterowie', path: '/heroes' },
  ];
}
