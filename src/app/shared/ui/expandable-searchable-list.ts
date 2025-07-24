import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  TemplateRef,
} from '@angular/core';
import { ExpandableList } from './expandable-list';
import { Search } from './search';
import { NamedEntity } from '../interfaces/features';

@Component({
  selector: 'app-expandable-searchable-list',
  imports: [ExpandableList, Search],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-search [(searchTerm)]="searchTerm" />

    <app-expandable-list
      [items]="filteredItems()"
      [searchTerm]="searchTerm"
      [itemTemplate]="itemTemplate()"
    />
  `,
})
export class ExpandableSearchableList<T extends NamedEntity> {
  readonly items = input.required<T[]>();
  readonly itemTemplate = input<TemplateRef<any>>();

  protected readonly searchTerm = '';
  protected readonly filteredItems = computed(() =>
    this.items().filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  );
}
