import { Component, computed, signal } from '@angular/core';
import { Quality } from '../../shared/interfaces/features';
import { Search } from '../../shared/ui/search';
import { MatExpansionModule } from '@angular/material/expansion';
import { QUALITIES } from '../../shared/constants/qualities';

@Component({
  selector: 'app-qualities',
  imports: [MatExpansionModule, Search],
  template: `
    <app-search (searchTermChange)="searchTerm.set($event)"></app-search>
    <mat-accordion>
      @for (quality of filteredQualities(); track $index) {
      <mat-expansion-panel class="expansion-panel">
        <mat-expansion-panel-header class="header">
          <mat-panel-title>{{ quality.name }}</mat-panel-title>
        </mat-expansion-panel-header>

        <ng-template [matExpansionPanelContent]>
          <mat-panel-description>
            {{ quality.description }}
          </mat-panel-description>
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
export default class Qualitites {
  protected readonly qualities = signal<Quality[]>(QUALITIES);
  protected readonly searchTerm = signal<string>('');

  filteredQualities = computed(() =>
    this.qualities().filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm().toLowerCase())
    )
  );
}
