import { Component, computed, signal } from '@angular/core';
import { Quality } from '../../shared/interfaces/features';
import { Search } from '../../shared/ui/search';
import { MatExpansionModule } from '@angular/material/expansion';
import { QUALITIES } from '../../shared/constants/qualities';
import { ExpandableList } from '../../shared/ui/expandable-list';

@Component({
  selector: 'app-qualities',
  imports: [MatExpansionModule, Search, ExpandableList],
  template: `
    <div class="qualities">
      <app-search (searchTermChange)="searchTerm.set($event)"></app-search>

      <app-expandable-list
        [items]="qualities()"
        [searchTerm]="searchTerm()"
      ></app-expandable-list>
    </div>
  `,
  styles: `
    .qualities {
      padding-bottom: 5rem;
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
