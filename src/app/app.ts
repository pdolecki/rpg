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
  styles: `
  `,
})
export class App {
  protected readonly navItems: NavItem[] = [{ label: 'Home', path: '/home' }];
}
