import { Component, computed, signal } from '@angular/core';
import {
  ATTRIBUTES_UPGRADE_COSTS,
  SKILLS_UPGRADE_COSTS,
} from '../../shared/constants/development';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-development',
  standalone: true,
  imports: [
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  template: `
    <div class="development">
      <mat-radio-group
        [value]="type()"
        (change)="type.set($any($event.value))"
        aria-label="Wybierz typ rozwoju"
        class="calculator-radio-group"
      >
        <mat-radio-button value="attribute">Cecha</mat-radio-button>
        <mat-radio-button value="skill">Umiejętność</mat-radio-button>
      </mat-radio-group>

      <mat-form-field appearance="outline">
        <mat-label>Aktualny poziom rozwinięcia</mat-label>
        <input
          matInput
          type="number"
          [value]="current()"
          (input)="current.set($any($event.target).valueAsNumber)"
          min="0"
          max="49"
        />
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>Docelowy poziom rozwinięcia</mat-label>
        <input
          matInput
          type="number"
          [value]="target()"
          (input)="target.set($any($event.target).valueAsNumber)"
          min="1"
          max="50"
        />
      </mat-form-field>

      @if (totalCost() > 0) {
        <span>Koszt: {{ totalCost() }} PD</span>
      }
    </div>
  `,
  styles: `
    .development {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `,
})
export default class Development {
  protected readonly type = signal<'attribute' | 'skill'>('attribute');
  protected readonly current = signal(0);
  protected readonly target = signal(1);

  protected readonly totalCost = computed(() => {
    const costs =
      this.type() === 'attribute'
        ? ATTRIBUTES_UPGRADE_COSTS
        : SKILLS_UPGRADE_COSTS;
    return this.calculateTotalCost(this.current(), this.target(), costs);
  });

  private calculateTotalCost(
    from: number,
    to: number,
    costs: Record<number, number>
  ): number {
    let total = 0;
    for (let level = from; level < to; level++) {
      for (const costLevel of Object.keys(costs)
        .map(Number)
        .sort((a, b) => a - b)) {
        if (level < costLevel) {
          total += costs[costLevel];
          break;
        }
      }
    }
    return total;
  }
}
