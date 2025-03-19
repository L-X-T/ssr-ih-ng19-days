import { afterNextRender, Component, ElementRef, inject, NgZone, signal } from '@angular/core';

@Component({
  selector: 'app-base',
  imports: [],
  template: '',
  host: { '[class.is-hydrated]': 'isHydrated()' },
})
export class BaseComponent {
  private readonly elementRef = inject(ElementRef);
  readonly isHydrated = signal(false);

  constructor() {
    afterNextRender(() => {
      this.blink();
      this.isHydrated.set(true);
      console.log(this.constructor.name + ' hydrated');
    });
  }

  protected onClick(event: Event): void {
    const img = event.target as HTMLImageElement;
    console.log(img.alt + ' was clicked');
  }

  private blink(): void {
    // Just a hack used to visualize the hydration for 0.5 seconds
    this.elementRef.nativeElement.firstChild.style.display = 'none';
    setTimeout(() => {
      this.elementRef.nativeElement.firstChild.style.display = '';
    }, 500);
  }
}
