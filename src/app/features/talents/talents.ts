import { Component, computed, signal } from '@angular/core';
import { Talent } from '../../shared/interfaces/features';
import { Search } from '../../shared/ui/search';
import { MatExpansionModule } from '@angular/material/expansion';
import { TALENTS } from '../../shared/constants/talents';

@Component({
  selector: 'app-talents',
  imports: [MatExpansionModule, Search],
  template: `
    <app-search (searchTermChange)="searchTerm.set($event)"></app-search>
    <mat-accordion>
      @for (talent of filteredTalents(); track $index) {
      <mat-expansion-panel class="expansion-panel">
        <mat-expansion-panel-header class="header">
          <mat-panel-title>{{ talent.name }}</mat-panel-title>
        </mat-expansion-panel-header>

        <ng-template [matExpansionPanelContent]>
          <mat-panel-description>
            {{ talent.description }}
          </mat-panel-description>

          @if(talent.max) {
          <section class="section">
            <h3>Max:</h3>
            <p>{{ talent.max }}</p>
          </section>
          } @if(talent.tests) {
          <section class="section">
            <h3>Testy:</h3>
            <p>{{ talent.tests }}</p>
          </section>
          }
        </ng-template>
      </mat-expansion-panel>
      }
    </mat-accordion>
  `,
  styles: `
  .expansion-panel {
    .header {
      height: fit-content;
      padding: 1rem;
    }
  }
  `,
})
export default class Talents {
  protected readonly talents = signal<Talent[]>(TALENTS);
  protected readonly searchTerm = signal<string>('');

  filteredTalents = computed(() =>
    this.talents().filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm().toLowerCase())
    )
  );
}
