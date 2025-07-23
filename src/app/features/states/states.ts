import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ExpandableSearchableList } from '../../shared/ui/expandable-searchable-list';
import { FeaturesFacade } from '../../shared/data-access/features-facade';

@Component({
  selector: 'app-states',
  imports: [ExpandableSearchableList],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-expandable-searchable-list
      [items]="states()"
      [itemTemplate]="detailsTemplate"
    ></app-expandable-searchable-list>

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
  protected readonly featuresFacade = inject(FeaturesFacade);
  protected readonly states = this.featuresFacade.states;
}
