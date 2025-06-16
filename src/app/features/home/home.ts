import { Component } from '@angular/core';
import { Card } from '../../shared/ui/card';

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
  protected readonly cards = [
    {
      path: '/development',
      title: 'Rozwój',
      subtitle:
        'Ścieżka ku potędze - rozwijaj swoją postać i odblokuj ukryte możliwości!',
      svgUrl: '14.svg',
    },
    {
      path: '/talents',
      title: 'Talenty',
      subtitle:
        'Unikalne zdolności, które odróżniają cię od reszty - odkryj swój talent!',
      svgUrl: '6.svg',
    },
    {
      path: '/professions',
      title: 'Profesje',
      subtitle: 'Wybierz swoją drogę - od wojownika po alchemika!',
      svgUrl: '1.svg',
    },
    {
      path: '/states',
      title: 'Stany',
      subtitle: 'Lista stanów - to wszystko to co daje i odbiera ci siły!',
      svgUrl: '8.svg',
    },
    {
      path: '/qualities',
      title: 'Właściwości',
      subtitle:
        'Cechy wyposażenia - dowiedz się jak użyteczne może się ono okazać!',
      svgUrl: '/7.svg',
    },
  ];
}
