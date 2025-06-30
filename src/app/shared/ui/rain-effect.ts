import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';

@Component({
  selector: 'app-rain-effect',
  imports: [NgStyle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="rain-container">
      @for (drop of drops; track $index) {
      <div class="drop" [ngStyle]="drop.style"></div>
      }
    </div>
  `,
  styles: `
    .rain-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 9999;
      overflow: hidden;
      .drop {
        position: absolute;
        top: 0;
        width: 2px;
        height: 20px;
        background: var(--color-primary);
        animation-name: fall;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
    }

    @keyframes fall {
      0% {
        transform: translateY(-100px);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(100vh);
        opacity: 0;
      }
    }
  `,
})
export class RainEffect {
  private readonly destroyRef = inject(DestroyRef);

  private readonly rainAudio = new Audio('/audio/rain.mp3');
  private readonly miauAudio = new Audio('/audio/miau.mp3');

  protected readonly drops = Array.from({ length: 150 }, () => {
    const left = Math.random() * 100;
    const top = -Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 1 + Math.random() * 2;
    return {
      style: {
        left: `${left}vw`,
        top: `${top}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      },
    };
  });

  constructor() {
    this.setupAudio();
  }

  private setupAudio(): void {
    this.rainAudio.loop = true;
    this.rainAudio.volume = 0.4;

    this.miauAudio.loop = true;
    this.miauAudio.volume = 0.5;

    const play = () => {
      this.rainAudio.play().catch(() => console.warn('Rain blocked'));
      this.miauAudio.play().catch(() => console.warn('Miau blocked'));
      document.removeEventListener('click', play);
    };

    document.addEventListener('click', play);

    if (!this.rainAudio.onplaying)
      this.rainAudio.play().catch(() => console.warn('Rain blocked'));
    if (!this.miauAudio.onplaying)
      this.miauAudio.play().catch(() => console.warn('Miau blocked'));

    this.destroyRef.onDestroy(() => {
      this.rainAudio.pause();
      this.rainAudio.currentTime = 0;
      this.miauAudio.pause();
      this.miauAudio.currentTime = 0;
    });
  }
}
