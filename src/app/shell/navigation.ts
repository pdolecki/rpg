import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeToggle } from './theme/theme-toggle';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../shared/interfaces/nav-item';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ThemeToggle,
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
            <mat-list-item (click)="snav.close()">
              <app-theme-toggle></app-theme-toggle>
            </mat-list-item>

            @for (navItem of navItems(); track navItem.path) {
            <a
              mat-list-item
              [routerLink]="navItem.path"
              routerLinkActive="active"
              (click)="snav.close()"
              >{{ navItem.label }}</a
            >
            }
          </mat-nav-list>
        </mat-sidenav>

        <mat-sidenav-content class="sidenav-content">
          <ng-content></ng-content>
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
          .active {
            background-color: var(--color-primary);
          }
        }
        .sidenav-content {
          padding: 1rem;
        }
      }
    }
  `,
})
export class Navigation {
  navItems = input.required<NavItem[]>();
}
