import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'ngbiz-progress-view',
  templateUrl: './progress-view.component.html',
  styleUrls: ['./progress-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatProgressBarModule],
  host: {
    '[style.z-index]': 'zIndex()',
  },
})
export class ProgressViewComponent {
  text = input<string>('Cargando...');
  zIndex = input<number>(1000);
}
