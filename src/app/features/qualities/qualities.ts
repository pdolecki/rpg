import { Component, inject } from '@angular/core';
import { ExpandableSearchableList } from '../../shared/ui/expandable-searchable-list';
import { FeaturesFacade } from '../../shared/data-access/features-facade';

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
  protected readonly featuresFacade = inject(FeaturesFacade);
  protected readonly qualities = this.featuresFacade.qualities;
}
