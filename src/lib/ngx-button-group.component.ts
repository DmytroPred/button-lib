
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'ngx-button-group',
  exportAs: 'ngxButtonGroup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'ngx-btn-group'
  },
  preserveWhitespaces: false,
  template: '<ng-content></ng-content>',
  styleUrls: ['./style/ngx-button-group.component.scss']
})
export class NgxButtonGroupComponent { }