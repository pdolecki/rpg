import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  signal,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { Card } from '../shared/ui/card';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [MatGridListModule, Card],
  template: `
    <div class="home">
      <mat-grid-list [cols]="numberOfColumns()" rowHeight="2:1">
        @for (card of cards; track card.path) {
        <mat-grid-tile>
          <app-card [cardInfo]="card"></app-card>
        </mat-grid-tile>
        }
      </mat-grid-list>
    </div>
  `,
  styles: `
    .home {
      margin: 20px;
    }
  `,
})
export default class Home {
  private readonly destroyRef = inject(DestroyRef);
  private readonly breakpointObserver = inject(BreakpointObserver);
  protected readonly isSmallScreen = signal<boolean>(true);
  protected readonly numberOfColumns = computed(() =>
    this.isSmallScreen() ? 1 : 2
  );

  protected readonly cards = [
    {
      path: '/development',
      title: 'Rozwój',
      content:
        'Ścieżka ku potędze - rozwijaj swoją postać i odblokuj ukryte możliwości!',
    },
    {
      path: '/talents',
      title: 'Talenty',
      content:
        'Unikalne zdolności, które odróżniają cię od reszty - odkryj swój talent!',
    },
    {
      path: '/professions',
      title: 'Profesje',
      content: 'Wybierz swoją drogę - od wojownika po alchemika!',
    },
    {
      path: '/states',
      title: 'Stany',
      content: 'Lista stanów - to wszystko to co daje i odbiera ci siły!',
    },
    {
      path: '/qualities',
      title: 'Właściwości',
      content:
        'Właściwości twojego wyposażenia - dowiedz się jak użyteczne może się ono okazać!',
    },
  ];

  constructor() {
    effect(() => {
      this.breakpointObserver
        .observe([Breakpoints.XSmall, Breakpoints.Small])
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(({ matches }) => this.isSmallScreen.set(matches));
    });
  }
}
