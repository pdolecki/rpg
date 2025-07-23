import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-development-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <table class="development-table">
      <thead>
        <tr>
          <th rowspan="2">Poprzednie rozwinięcie</th>
          <th colspan="2">Koszt rozwinięcia w PD</th>
        </tr>
        <tr>
          <th>Cechy</th>
          <th>Umiejętności</th>
        </tr>
      </thead>
      <tbody>
        @for(range of upgradeRanges; track $index; let index = $index) {
        <tr>
          <td>{{ range }}</td>
          <td>{{ cechyCosts[index] }}</td>
          <td>{{ umiejetnosciCosts[index] }}</td>
        </tr>
        }
      </tbody>
    </table>
  `,
  styles: `
      .development-table {
        margin: 0 auto;
        min-width: 300px;
        border-collapse: collapse;
        text-align: center;
        margin-top: 1rem;
        font-size: 0.95rem;
        th,
        td {
          border: 1px solid var(--color-primary);
          padding: 8px 12px;
        }
      }
    `,
})
export class DevelopmentTable {
  readonly upgradeRanges = [
    '0 do 5',
    '6 do 10',
    '11 do 15',
    '16 do 20',
    '21 do 25',
    '26 do 30',
    '31 do 35',
    '36 do 40',
    '41 do 45',
    '46 do 50',
  ];

  readonly cechyCosts = [25, 30, 40, 50, 70, 90, 120, 150, 190, 230];
  readonly umiejetnosciCosts = [10, 15, 20, 30, 40, 60, 80, 110, 140, 180];
}
