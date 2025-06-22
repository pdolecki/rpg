import { Component } from '@angular/core';
import { Card } from '../../shared/ui/card';
import { HOME_CARDS } from '../../shared/constants/home-cards';

@Component({
  selector: 'app-home',
  imports: [Card],
  template: `
    <div class="home">
      @for (card of cards; track card.path) {
      <app-card [cardInfo]="card"></app-card>
      }
    </div>
  `,
  styles: `
    .home {
      margin: 1rem 0 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
    }
  `,
})
export default class Home {
  protected readonly cards = HOME_CARDS;
}
