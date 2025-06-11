import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule],
  template: `
    <mat-slide-toggle
      class="example-margin"
      [checked]="darkMode()"
      (change)="darkMode.set($event.checked)"
    >
      Dark Mode
    </mat-slide-toggle>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly darkMode = signal<boolean>(true);

  protected switchTheme = effect(() => {
    const darkMode = this.darkMode();
    document.body.classList.toggle('darkMode', darkMode);
  });
}
