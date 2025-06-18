import { Component, computed, signal } from '@angular/core';
import { Profession } from '../../shared/interfaces/features';
import { PROFESSIONS } from '../../shared/constants/professions';
import { Search } from '../../shared/ui/search';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-professions',
  imports: [MatExpansionModule, Search],
  template: `
    <app-search (searchTermChange)="searchTerm.set($event)"></app-search>
    <mat-accordion>
      @for (profession of filteredProfessions(); track $index) {
      <mat-expansion-panel class="expansion-panel">
        <mat-expansion-panel-header class="header">
          <mat-panel-title>{{ profession.name }}</mat-panel-title>
        </mat-expansion-panel-header>

        <ng-template [matExpansionPanelContent]>
          <mat-panel-description>
            {{ profession.description }}
          </mat-panel-description>

          <section class="section">
            <h3>Rasy:</h3>
            <p>{{ profession.races.join(', ') }}</p>
          </section>

          <section class="section">
            <h3>Rozwój:</h3>
            @for (level of getLevels(profession); track level) {
            <div class="sub-section">
              <h4>{{ level }}:</h4>
              <span> {{ profession.requirements[level].join(', ') }}</span>
            </div>
            }
          </section>

          <section class="section">
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
      </mat-expansion-panel>
      }
    </mat-accordion>
  `,
  styles: `
  .expansion-panel {
    .header {
      height: fit-content;
      padding: 1rem;
    }
    .section {
      h3 {
        margin-bottom: 0;
      } 
      h4{
        margin: 0;
      }
      .sub-section {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
   }
  }
  `,
})
export default class Professions {
  protected readonly professions = signal<Profession[]>(PROFESSIONS);
  protected readonly searchTerm = signal<string>('');

  filteredProfessions = computed(() =>
    this.professions().filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm().toLowerCase())
    )
  );

  protected getLevels(profession: Profession): number[] {
    return Object.keys(profession.requirements)
      .map(Number)
      .sort((a, b) => a - b);
  }
}
