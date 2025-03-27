import { afterNextRender, Component, effect, inject, input, signal } from '@angular/core';
import { VictorComponent } from '../victor/victor.component';
import { NoemieComponent } from '../noemie/noemie.component';
import { MarcusComponent } from '../marcus/marcus.component';
import { JustineComponent } from '../justine/justine.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-demo',
  imports: [VictorComponent, NoemieComponent, MarcusComponent, JustineComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  private readonly title = inject(Title);

  readonly id = input<number | undefined>();
  readonly showJustine = signal(false);

  constructor() {
    effect(() => this.title.setTitle(this.id() !== undefined ? `Page #${this.id()} - Demo` : 'Page - Demo'));

    afterNextRender(() => {
      setTimeout(() => this.showJustine.set(true), 4_200);
    });
  }
}

export default DemoComponent;
