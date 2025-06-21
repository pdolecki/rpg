import { Component, signal } from '@angular/core';
import { Quality } from '../../shared/interfaces/features';
import { QUALITIES } from '../../shared/constants/qualities';
import { ExpandableSearchableList } from '../../shared/ui/expandable-searchable-list';

@Component({
  selector: 'app-qualities',
  imports: [ExpandableSearchableList],
  template: `
    <app-expandable-searchable-list
      [items]="qualities()"
    ></app-expandable-searchable-list>
  `,
})
export default class Qualitites {
  protected readonly qualities = signal<Quality[]>(QUALITIES);
}
