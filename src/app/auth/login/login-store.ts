import { Injectable, inject, resource } from '@angular/core';
import { Subject } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthStore } from '../../shared/data-access/auth-store';
import { Credentials } from '../../shared/interfaces/credentials';

@Injectable()
export class LoginStore {
  private authStore = inject(AuthStore);

  login$ = new Subject<Credentials>();
  login = toSignal(this.login$);

  userAuthenticated = resource({
    params: this.login,
    loader: ({ params }) => this.authStore.login(params),
  });
}
