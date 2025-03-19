import { Component } from '@angular/core';
import { VictorComponent } from '../victor/victor.component';
import { NoemieComponent } from '../noemie/noemie.component';
import { MarcusComponent } from '../marcus/marcus.component';
import { JustineComponent } from '../justine/justine.component';

@Component({
  selector: 'app-demo',
  imports: [VictorComponent, NoemieComponent, MarcusComponent, JustineComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {}

export default DemoComponent;
