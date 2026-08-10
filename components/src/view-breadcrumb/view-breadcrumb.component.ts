import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Use this component to display a breadcrumb trail.
 */
@Component({
    selector: 'ngbiz-view-breadcrumb',
    templateUrl: './view-breadcrumb.component.html',
    styleUrls: ['./view-breadcrumb.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ViewBreadcrumbComponent { }
