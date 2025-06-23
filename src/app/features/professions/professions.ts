import { Component, signal } from '@angular/core';
import { Profession } from '../../shared/interfaces/features';
import { PROFESSIONS } from '../../shared/constants/professions';
import { ExpandableSearchableList } from '../../shared/ui/expandable-searchable-list';

@Component({
  selector: 'app-professions',
  imports: [ExpandableSearchableList],
  template: `
    <app-expandable-searchable-list
      [items]="professions()"
      [itemTemplate]="detailsTemplate"
    ></app-expandable-searchable-list>

    <ng-template #detailsTemplate let-profession>
      <section>
        <h3>Rasy:</h3>
        <span>{{ profession.races.join(', ') }}</span>
      </section>

      <section>
        <h3>Rozwój:</h3>
        @for (level of getLevels(profession); track level) {
        <div>
          <h4>{{ level }}:</h4>
          <span> {{ profession.requirements[level].join(', ') }}</span>
        </div>
        }
      </section>

      <section>
        @for (path of profession.paths; track path.name) {
        <h3>{{ path.level }} {{ path.name }} ({{ path.status }})</h3>
        <h4>Umiejętności:</h4>
        <span>{{ path.skills.join(', ') }}</span>
        <h4>Talenty:</h4>
        <span>{{ path.talents.join(', ') }}</span>
        <h4>Wyposażenie:</h4>
        <span>{{ path.equipment.join(', ') }}</span>
        }
      </section>
    </ng-template>
  `,
})
export default class Professions {
  protected readonly professions = signal<Profession[]>(PROFESSIONS);

  protected getLevels(profession: Profession): number[] {
    return Object.keys(profession.requirements)
      .map(Number)
      .sort((a, b) => a - b);
  }
}
