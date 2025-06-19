import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavItem } from './shared/interfaces/nav-item';
import { Navigation } from './shell/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation],
  template: `
    <app-navigation [navItems]="navItems">
      <router-outlet />
    </app-navigation>
  `,
})
export class App {
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
