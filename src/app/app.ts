import { Component, effect, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSlideToggleModule,
  ],
  template: `
    <div class="navigation">
      <mat-toolbar>
        <button matIconButton (click)="snav.toggle()">
          <mat-icon>menu</mat-icon>
        </button>
      </mat-toolbar>

      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav #snav class="sidenav-list">
          <mat-nav-list>
            <mat-list-item>
              <mat-slide-toggle
                [checked]="darkMode()"
                (change)="darkMode.set($event.checked)"
              >
                Dark Mode
              </mat-slide-toggle>
            </mat-list-item>
            @for (navItem of navItems; track navItem.path) {
            <a mat-list-item [routerLink]="navItem.path">{{ navItem.label }}</a>
            }
          </mat-nav-list>
        </mat-sidenav>

        <mat-sidenav-content class="sidenav-content">
          <router-outlet />
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: `
    .navigation {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      .sidenav-container {
        flex: 1;
        .sidenav-list {
          max-width: 100%;
        }
        .sidenav-content {
          padding: 1rem;
        }
      }
    }
  `,
})
export class App {
  protected readonly darkMode = signal<boolean>(false);
  protected readonly navItems = [{ label: 'Home', path: '/home' }];

  protected switchTheme = effect(() => {
    const darkMode = this.darkMode();
    document.body.classList.toggle('dark-mode', darkMode);
  });
}
