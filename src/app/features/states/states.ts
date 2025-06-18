import { Component, computed, signal } from '@angular/core';
import { State } from '../../shared/interfaces/features';
import { Search } from '../../shared/ui/search';
import { MatExpansionModule } from '@angular/material/expansion';
import { STATES } from '../../shared/constants/states';

@Component({
  selector: 'app-states',
  imports: [MatExpansionModule, Search],
  template: `
    <app-search (searchTermChange)="searchTerm.set($event)"></app-search>
    <mat-accordion>
      @for (state of filteredStates(); track $index) {
      <mat-expansion-panel class="expansion-panel">
        <mat-expansion-panel-header class="header">
          <mat-panel-title>{{ state.name }}</mat-panel-title>
        </mat-expansion-panel-header>

        <ng-template [matExpansionPanelContent]>
          <mat-panel-description>
            {{ state.description }}
          </mat-panel-description>

          @if(state.neutralization) {
          <section class="section">
            <h3>Neutralizowanie:</h3>
            <p>{{ state.neutralization }}</p>
          </section>
          } @if(state.consequences) {
          <section class="section">
            <h3>Konsekwencje:</h3>
            <p>{{ state.consequences }}</p>
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
export default class States {
  protected readonly states = signal<State[]>(STATES);
  protected readonly searchTerm = signal<string>('');

  filteredStates = computed(() =>
    this.states().filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm().toLowerCase())
    )
  );
}
