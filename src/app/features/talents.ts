import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ExpandableSearchableList } from '../shared/ui/expandable-searchable-list';
import { FeaturesFacade } from '../shared/data-access/features-facade';

@Component({
  selector: 'app-talents',
  imports: [ExpandableSearchableList],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-expandable-searchable-list
      [items]="talents()"
      [itemTemplate]="detailsTemplate"
    ></app-expandable-searchable-list>

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
  `,
})
export default class Talents {
  protected readonly featuresFacade = inject(FeaturesFacade);
  protected readonly talents = this.featuresFacade.talents;
}
