import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeStore {
  readonly darkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const darkMode = this.darkMode();
      document.documentElement.classList.toggle('dark-mode', darkMode);
      localStorage.setItem('darkMode', String(darkMode));
    });
  }

  setDarkMode(darkMode: boolean): void {
    this.darkMode.set(darkMode);
  }

  private getInitialTheme(): boolean {
    const saved = localStorage.getItem('darkMode');
    return saved
      ? saved === 'true'
      : window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  }
}
