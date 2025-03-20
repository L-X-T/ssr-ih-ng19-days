import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  imports: [],
  template: '',
  styleUrl: './base.component.scss',
})
export class BaseComponent {
  protected onClick(event: Event): void {
    const img = event.target as HTMLImageElement;
    console.log(img.alt + ' was clicked');
  }
}
