import { Component, computed, signal } from '@angular/core';
import { State } from '../../shared/interfaces/features';
import { Search } from '../../shared/ui/search';
import { MatExpansionModule } from '@angular/material/expansion';
import { STATES } from '../../shared/constants/states';
import { ExpandableList } from '../../shared/ui/expandable-list';

@Component({
  selector: 'app-states',
  imports: [MatExpansionModule, Search, ExpandableList],
  template: `
    <app-search (searchTermChange)="searchTerm.set($event)"></app-search>

    <app-expandable-list
      [items]="states()"
      [searchTerm]="searchTerm()"
      [itemTemplate]="detailsTemplate"
    ></app-expandable-list>

    <ng-template #detailsTemplate let-state>
      @if(state.neutralization) {
      <section>
        <h3>Neutralizowanie:</h3>
        <p>{{ state.neutralization }}</p>
      </section>
      } @if(state.consequences) {
      <section>
        <h3>Konsekwencje:</h3>
        <p>{{ state.consequences }}</p>
      </section>
      }
    </ng-template>
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
