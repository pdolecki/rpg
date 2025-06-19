import { Component } from '@angular/core';
import { Card } from '../../shared/ui/card';

@Component({
  selector: 'app-heroes',
  imports: [Card],
  template: `
    <div class="heroes">
      @for (card of cards; track card.title) {
      <app-card [cardInfo]="card"></app-card>
      }
    </div>
  `,
  styles: `
    .heroes {
      margin: 1rem 0 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
    }
  `,
})
export default class Heroes {
  protected readonly cards = [
    {
      title: 'Victor',
      svgUrl: '/heroes/victor.png',
    },
    {
      title: 'Ervar',
      svgUrl: '/heroes/ervar.png',
    },
    {
      title: 'Joshua',
      svgUrl: '/heroes/joshua.png',
    },
    {
      title: 'Muriel',
      svgUrl: '/heroes/muriel.png',
    },
    {
      title: 'Astrid & Jacob',
      svgUrl: '/heroes/astrid-jacob.png',
    },
    {
      title: 'Theo & Edgar',
      svgUrl: '/heroes/theo-edgar.png',
    },
    {
      title: 'Brielli',
      svgUrl: '/heroes/brielli.png',
    },
    {
      title: 'Bashir',
      svgUrl: '/heroes/bashir.png',
    },
  ];
}
