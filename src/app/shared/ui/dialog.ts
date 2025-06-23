import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content class="mat-typography">
      <p>
        {{ data.description }}
      </p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button matButton [mat-dialog-close]="true">Zamknij</button>
    </mat-dialog-actions>
  `,
  styles: ``,
})
export class Dialog {
  protected readonly data = inject<{ title: string; description: string }>(
    MAT_DIALOG_DATA
  );
}
