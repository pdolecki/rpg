import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  imports: [FormsModule, MatFormFieldModule, MatIconModule, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-form-field appearance="outline" class="search">
      <mat-label>Wyszukaj</mat-label>
      <input matInput [(ngModel)]="searchTerm" />
      <mat-icon matSuffix class="clear" (click)="searchTerm.set('')">
        clear
      </mat-icon>
    </mat-form-field>
  `,
  styles: `
    .search{
      width: 100%;
      .clear {
        &:hover {
          cursor: pointer;
        }
      }
    }
  `,
})
export class Search {
  readonly searchTerm = model<string>('');
}
