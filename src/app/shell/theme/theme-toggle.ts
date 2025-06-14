import { Component, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeStore } from './theme-store';

@Component({
  selector: 'app-theme-toggle',
  imports: [MatSlideToggleModule],
  template: ` <mat-slide-toggle
    [checked]="themeStore.darkMode()"
    (change)="themeStore.setDarkMode($event.checked)"
  >
    Dark Mode
  </mat-slide-toggle>`,
  styles: ``,
})
export class ThemeToggle {
  protected readonly themeStore = inject(ThemeStore);
}
