import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

export type NgxButtonType = 'primary' | 'secondary' | 'destructive' | null;

@Component({
  selector: 'button[ngx-button]',
  template: '<ng-content></ng-content>',
  exportAs: 'ngxButton',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'ngx-btn',
    '[class.ngx-btn-primary]': `ngxType === 'primary'`,
    '[class.ngx-btn-secondary]': `ngxType === 'secondary'`,
    '[class.ngx-btn-destructive]': `ngxType === 'destructive'`,
    '[attr.disabled]': 'disabled || null'
  },
  styleUrls: ['./style/ngx-button.component.scss'],
})
export class NgxButtonComponent {
  @Input() ngxType: NgxButtonType = null;
  @Input() disabled: boolean = false;
}
