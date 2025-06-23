import { Injectable, inject } from '@angular/core';
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { AUTH } from '../../app.config';
import { toSignal } from '@angular/core/rxjs-interop';
import { Credentials } from '../interfaces/credentials';
import { Router } from '@angular/router';

export type AuthUser = User | null | undefined;

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private readonly auth = inject(AUTH);
  private readonly router = inject(Router);

  private authState$ = authState(this.auth);

  user = toSignal(this.authState$);

  async login(credentials: Credentials | undefined) {
    if (!credentials) return null;

    return signInWithEmailAndPassword(
      this.auth,
      `${credentials.login}@rpg.pl`,
      credentials.password
    );
  }

  logout() {
    signOut(this.auth).then(() => {
      this.router.navigate(['auth/login']);
    });
  }
}
