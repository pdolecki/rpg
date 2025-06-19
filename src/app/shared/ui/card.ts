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
    <mat-card class="card" [routerLink]="cardInfo().path" appearance="outlined">
      <mat-card-header class="header">
        <mat-card-title>
          {{ cardInfo().title }}
        </mat-card-title>
        @if(cardInfo().subtitle) {

        <mat-card-subtitle>{{ cardInfo().subtitle }}</mat-card-subtitle>
        }
      </mat-card-header>
      <mat-card-content class="content">
        @if (cardInfo().content) {
        {{ cardInfo().content }}
        } @else if (cardInfo().svgUrl) {
        <img [src]="cardInfo().svgUrl" />
        }
      </mat-card-content>
    </mat-card>
  `,
  styles: `
    .card {
      cursor: pointer;
      overflow: hidden;
      .header {
        padding-bottom: 1rem;
      }
      .content {
        background-color: #fff;
        img {
          width: 100%;
          height: 250px;
          object-fit: contain;
        }
      }
    }
  `,
})
export class Card {
  readonly cardInfo = input.required<{
    path?: string;
    title: string;
    subtitle?: string;
    svgUrl?: string;
    content?: string;
  }>();
}
