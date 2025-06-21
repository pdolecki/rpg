import { Component, computed, input, signal, TemplateRef } from '@angular/core';
import { ExpandableList } from './expandable-list';
import { Search } from './search';
import { NamedEntity } from '../interfaces/features';

@Component({
  selector: 'app-expandable-searchable-list',
  imports: [ExpandableList, Search],
  template: `
    <app-search (searchTermChange)="searchTerm.set($event)" />

    <app-expandable-list
      [items]="filteredItems()"
      [searchTerm]="searchTerm()"
      [itemTemplate]="itemTemplate()"
    />
  `,
})
export class ExpandableSearchableList<T extends NamedEntity> {
  readonly items = input.required<T[]>();
  readonly itemTemplate = input<TemplateRef<any>>();

  protected readonly searchTerm = signal('');
  protected readonly filteredItems = computed(() =>
    this.items().filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm().toLowerCase())
    )
  );
}
