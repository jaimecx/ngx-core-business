import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FiltersContainerComponent } from '../filters-container.component';
import { CollectionFilter } from 'ngx-core-business/types';

@Component({
    selector: 'ngbiz-list-toolbar',
    templateUrl: './list-toolbar.component.html',
    styleUrls: ['./list-toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ListToolbarComponent extends FiltersContainerComponent {
  @Input() searchDebounceTime = 500;
  override searchFilter: CollectionFilter = { id: '_query', type: 'string', field: '_query', operator: '~' };
}
