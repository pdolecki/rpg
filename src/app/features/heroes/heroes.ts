import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Dialog } from '../../shared/ui/dialog';
import { NgOptimizedImage } from '@angular/common';
import { RainEffect } from '../../shared/ui/rain-effect';
import { HEROES } from '../../shared/mocks/heroes';
import { Hero } from '../../shared/interfaces/features';

@Component({
  selector: 'app-heroes',
  imports: [NgOptimizedImage, RainEffect, MatCardModule, MatDialogModule],
  template: `
    <app-rain-effect></app-rain-effect>
    <div class="heroes">
      @for (hero of heroes; track hero.name) {
      <mat-card
        class="card"
        appearance="filled"
        (click)="openDialog(hero.name, hero.description)"
      >
        <mat-card-header class="header">
          <mat-card-title>
            {{ hero.name }}
          </mat-card-title>
        </mat-card-header>
        <mat-card-content class="content">
          <img [ngSrc]="hero.url" width="350" height="400" priority />
        </mat-card-content>
      </mat-card>
      }
    </div>
  `,
  styles: `
    .heroes {
      margin: 1rem 0 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
      .card {
        cursor: pointer;
        overflow: hidden;
        .header {
          padding-bottom: 1rem;
        }
        .content {
          display: flex;
          justify-content: center;
        }
     }
    }
  `,
})
export default class Heroes {
  protected readonly heroes: Hero[] = HEROES;

  readonly dialog = inject(MatDialog);

  openDialog(title: string, description: string) {
    const dialogRef = this.dialog.open(Dialog, {
      data: {
        title,
        description,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('test');
    });
  }
}
