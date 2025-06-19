import { Component, computed, signal } from '@angular/core';
import { Talent } from '../../shared/interfaces/features';
import { Search } from '../../shared/ui/search';
import { MatExpansionModule } from '@angular/material/expansion';
import { TALENTS } from '../../shared/constants/talents';
import { ExpandableList } from '../../shared/ui/expandable-list';

@Component({
  selector: 'app-talents',
  imports: [MatExpansionModule, Search, ExpandableList],
  template: `
    <div class="talents">
      <app-search (searchTermChange)="searchTerm.set($event)"></app-search>

      <app-expandable-list
        [items]="talents()"
        [searchTerm]="searchTerm()"
        [itemTemplate]="detailsTemplate"
      ></app-expandable-list>

      <ng-template #detailsTemplate let-talent>
        @if(talent.max) {
        <section>
          <h3>Max:</h3>
          <p>{{ talent.max }}</p>
        </section>
        } @if(talent.tests) {
        <section>
          <h3>Testy:</h3>
          <p>{{ talent.tests }}</p>
        </section>
        }
      </ng-template>
    </div>
  `,
  styles: `
    .talents {
      padding-bottom: 5rem;
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
