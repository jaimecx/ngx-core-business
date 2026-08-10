import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
@Component({
    selector: 'ngbiz-edition-pin',
    templateUrl: './edition-pin.component.html',
    styleUrls: ['./edition-pin.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class EditionPinComponent {
  @Input() icon!: string;
}
