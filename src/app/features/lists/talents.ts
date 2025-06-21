import { Component, signal } from '@angular/core';
import { Talent } from '../../shared/interfaces/features';
import { TALENTS } from '../../shared/constants/talents';
import { ExpandableSearchableList } from '../../shared/ui/expandable-searchable-list';

@Component({
  selector: 'app-talents',
  imports: [ExpandableSearchableList],
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
  protected readonly talents = signal<Talent[]>(TALENTS);
}
