import {
  Component,
  input,
  output,
  inject,
  ResourceStatus,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Credentials } from '../../shared/interfaces/credentials';

@Component({
  selector: 'app-login-form',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form
      [formGroup]="loginForm"
      (ngSubmit)="login.emit(loginForm.getRawValue())"
    >
      <mat-form-field appearance="outline">
        <mat-label>login</mat-label>
        <input
          matNativeControl
          formControlName="login"
          type="text"
          placeholder="login"
        />
        <mat-icon matPrefix>mail</mat-icon>
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>password</mat-label>
        <input
          matNativeControl
          formControlName="password"
          type="password"
          placeholder="password"
        />
        <mat-icon matPrefix>lock</mat-icon>
      </mat-form-field>

      @if (loginStatus()==='error') {
      <mat-error>Could not log you in with those details.</mat-error>
      }

      <button
        matButton="filled"
        type="submit"
        [disabled]="loginStatus() === 'loading'"
      >
        Login
      </button>
    </form>
  `,
  styles: `
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      button {
        width: 100%;
      }
      mat-error {
        margin: 5px 0;
      }
    `,
})
export class LoginForm {
  loginStatus = input.required<ResourceStatus>();
  login = output<Credentials>();

  private fb = inject(FormBuilder);

  loginForm = this.fb.nonNullable.group({
    login: [''],
    password: [''],
  });
}
