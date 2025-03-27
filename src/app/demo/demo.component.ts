import { afterNextRender, Component, effect, inject, input, signal } from '@angular/core';
import { VictorComponent } from '../victor/victor.component';
import { NoemieComponent } from '../noemie/noemie.component';
import { MarcusComponent } from '../marcus/marcus.component';
import { JustineComponent } from '../justine/justine.component';
import { PageTitleStrategy } from '../page-tite-strategy';

@Component({
  selector: 'app-demo',
  imports: [VictorComponent, NoemieComponent, MarcusComponent, JustineComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  private readonly pageTitleStrategy = inject(PageTitleStrategy);

  readonly id = input<number | undefined>();
  readonly showJustine = signal(false);

  constructor() {
    effect(() => this.pageTitleStrategy.setTitle(this.id() !== undefined ? `Page #${this.id()}` : 'Page'));

    afterNextRender(() => {
      setTimeout(() => this.showJustine.set(true), 4_200);
    });
  }
}

export default DemoComponent;
