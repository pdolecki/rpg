import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [
    RouterLink,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  template: `
    <mat-card class="card" [routerLink]="cardInfo().path">
      <mat-card-header>
        <mat-card-title>
          {{ cardInfo().title }}
        </mat-card-title>
      </mat-card-header>
      <mat-card-content class="card-content">
        {{ cardInfo().content }}
      </mat-card-content>
    </mat-card>
  `,
  styles: `
    .card {
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      cursor: pointer;
      &-content {
        text-align: center;
      }
      .more-button {
        position: absolute;
        top: 5px;
        right: 10px;
      }  
    }
  `,
})
export class Card {
  readonly cardInfo = input.required<{
    path: string;
    title: string;
    content: string;
  }>();
}
