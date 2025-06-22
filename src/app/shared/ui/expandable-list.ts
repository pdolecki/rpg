import { Component, computed, input, TemplateRef } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { NamedEntity } from '../interfaces/features';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-expandable-list',
  imports: [MatExpansionModule, NgTemplateOutlet],
  template: `
    <mat-accordion>
      @for (item of filteredItems(); track item.name) {
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>{{ item.name }}</mat-panel-title>
        </mat-expansion-panel-header>
        <ng-template [matExpansionPanelContent]>
          <mat-panel-description>{{ item.description }}</mat-panel-description>
          <ng-container
            *ngTemplateOutlet="itemTemplate(); context: { $implicit: item }"
          />
        </ng-template>
      </mat-expansion-panel>
      }
    </mat-accordion>
    <span class="spacer"></span>
  `,
  styles: `
    .spacer {
      padding: 1rem;
    }
  `,
})
export class ExpandableList<T extends NamedEntity> {
  readonly items = input.required<T[]>();
  readonly searchTerm = input.required<string>();
  readonly itemTemplate = input<TemplateRef<any>>();

  protected readonly filteredItems = computed(() =>
    this.items().filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm().toLowerCase())
    )
  );
}
