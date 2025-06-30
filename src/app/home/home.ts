
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardInfo } from '../shared/interfaces/card-info';
import { Card } from '../shared/ui/card';

@Component({
  selector: 'app-home',
  imports: [Card],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  protected readonly cards: CardInfo[] = [
  {
    path: '/features/development',
    title: 'Rozwój',
    subtitle:
      'Ścieżka ku potędze - rozwijaj swoją postać i odblokuj ukryte możliwości!',
    svgUrl: '/icons/14.svg',
  },
  {
    path: '/features/talents',
    title: 'Talenty',
    subtitle:
      'Unikalne zdolności, które odróżniają cię od reszty - odkryj swój talent!',
    svgUrl: '/icons/6.svg',
  },
  {
    path: '/features/professions',
    title: 'Profesje',
    subtitle: 'Wybierz swoją drogę - od wojownika po alchemika!',
    svgUrl: '/icons/1.svg',
  },
  {
    path: '/features/states',
    title: 'Stany',
    subtitle: 'Lista stanów - to wszystko to co daje i odbiera ci siły!',
    svgUrl: '/icons/8.svg',
  },
  {
    path: '/features/qualities',
    title: 'Właściwości',
    subtitle:
      'Cechy wyposażenia - dowiedz się jak użyteczne może się ono okazać!',
    svgUrl: '/icons/7.svg',
  },
  {
    path: '/features/heroes',
    title: 'Bohaterowie',
    subtitle: 'Hall of fame - poznaj epickich bohaterów z naszych kampani!',
    svgUrl: '/icons/15.svg',
  },
];
}