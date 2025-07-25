import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginForm } from './login-form';
import { LoginStore } from './login-store';
import { AuthStore } from '../../shared/data-access/auth-store';

@Component({
  selector: 'app-login',
  imports: [RouterModule, LoginForm],
  providers: [LoginStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="login">
      @if(authStore.user() === null) {
      <app-login-form
        [loginStatus]="loginStore.userAuthenticated.status()"
        (login)="loginStore.login$.next($event)"
      />
      }
    </div>
  `,
  styles: `
      .login {
        height: 100%;
        display: flex;
        justify-content: center;
        margin-top: 5rem;
        a {
          margin: 2rem;
          color: var(--accent-darker-color);
        }
      }
    `,
})
export default class Login {
  public loginStore = inject(LoginStore);
  public authStore = inject(AuthStore);
  private router = inject(Router);

  constructor() {
    effect(() => {
      if (this.authStore.user()) {
        this.router.navigate(['home']);
      }
    });
  }
}
