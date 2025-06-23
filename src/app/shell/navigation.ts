import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../shared/interfaces/nav-item';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeStore } from './data-access/theme-store';
import { AuthStore } from '../shared/data-access/auth-store';

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
    MatSlideToggleModule,
  ],
  template: `
    <div class="navigation">
      <mat-toolbar class="toolbar">
        <button matIconButton (click)="snav.toggle()">
          <mat-icon>menu</mat-icon>
        </button>
        @if(isLoggedIn()) {
        <button mat-icon-button (click)="authStore.logout()">
          <mat-icon>logout</mat-icon>
        </button>
        }
      </mat-toolbar>

      <mat-sidenav-container class="sidenav">
        <mat-sidenav #snav class="list">
          <mat-nav-list>
            <mat-list-item (click)="snav.close()">
              <mat-slide-toggle
                [checked]="themeStore.darkMode()"
                (change)="themeStore.setDarkMode($event.checked)"
              >
                Dark Mode
              </mat-slide-toggle>
            </mat-list-item>

            @if(isLoggedIn()) { @for (navItem of navItems(); track navItem.path)
            {
            <a
              mat-list-item
              [routerLink]="navItem.path"
              routerLinkActive="active"
              (click)="snav.close()"
              >{{ navItem.label }}</a
            >
            } }
          </mat-nav-list>
        </mat-sidenav>

        <mat-sidenav-content class="content">
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
      .toolbar {
        display: flex;
        justify-content: space-between;
      }
      .sidenav {
        flex: 1;
        .list {
          max-width: 100%;
          .active {
            background-color: var(--color-primary);
          }
        }
        .content {
          padding: 1rem;
        }
      }
    }
  `,
})
export class Navigation {
  readonly navItems = input.required<NavItem[]>();
  readonly isLoggedIn = input.required<boolean>();
  protected readonly themeStore = inject(ThemeStore);
  protected readonly authStore = inject(AuthStore);
}
