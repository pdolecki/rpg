import { Component, inject } from '@angular/core';
import { RainEffect } from '../../shared/ui/rain-effect';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HeroDialog } from './hero-dialog';

@Component({
  selector: 'app-heroes',
  imports: [RainEffect, MatCardModule, MatDialogModule],
  template: `
    <app-rain-effect></app-rain-effect>
    <div class="heroes">
      @for (card of cards; track card.title) {
      <mat-card
        class="card"
        appearance="filled"
        (click)="openDialog(card.title, card.description)"
      >
        <mat-card-header class="header">
          <mat-card-title>
            {{ card.title }}
          </mat-card-title>
        </mat-card-header>
        <mat-card-content class="content">
          <img [src]="card.url" />
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
          img {
            width: 100%;
            height: 300px;
            object-fit: contain;
          }
        }
     }
    }
  `,
})
export default class Heroes {
  readonly dialog = inject(MatDialog);

  protected readonly cards = [
    {
      title: 'Victor',
      url: '/heroes/victor.png',
      description: 'Tutaj będzie krótka historia postaci... kiedyś',
    },
    {
      title: 'Ervar',
      url: '/heroes/ervar.png',
      description: 'Tutaj będzie krótka historia postaci... kiedyś',
    },
    {
      title: 'Joshua',
      url: '/heroes/joshua.png',
      description: 'Tutaj będzie krótka historia postaci... kiedyś',
    },
    {
      title: 'Muriel',
      url: '/heroes/muriel.png',
      description: 'Tutaj będzie krótka historia postaci... kiedyś',
    },
    {
      title: 'Astrid & Jacob',
      url: '/heroes/astrid-jacob.png',
      description: 'Tutaj będzie krótka historia postaci... kiedyś',
    },
    {
      title: 'Theo & Edgar',
      url: '/heroes/theo-edgar.png',
      description: 'Tutaj będzie krótka historia postaci... kiedyś',
    },
    {
      title: 'Brielli',
      url: '/heroes/brielli.png',
      description: 'Tutaj będzie krótka historia postaci... kiedyś',
    },
    {
      title: 'Bashir',
      url: '/heroes/bashir.png',
      description: 'Tutaj będzie krótka historia postaci... kiedyś',
    },
  ];

  openDialog(title: string, description: string) {
    const dialogRef = this.dialog.open(HeroDialog, {
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
