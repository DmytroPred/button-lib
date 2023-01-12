import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NgxButtonComponent } from '../ngx-button.component';
import { NgxButtonModule } from '../ngx-button.module';

describe('button', () => {
  let fixture: ComponentFixture<TestButtonComponent>;
  let buttonElements: DebugElement[];
  describe('className', () => {
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgxButtonModule], 
        declarations: [NgxButtonComponent, TestButtonComponent],
      })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(TestButtonComponent);
        fixture.detectChanges();
        buttonElements = fixture.debugElement.queryAll(By.directive(NgxButtonComponent));
      });
    }));

    it('should apply base ngx-btn class', () => {
      console.log(buttonElements[0].nativeElement);
      console.log(buttonElements[1].nativeElement);
      console.log(buttonElements[2].nativeElement);
      console.log(buttonElements[3].nativeElement);

      expect(buttonElements[0].nativeElement.className).toContain('ngx-btn');
      expect(buttonElements[1].nativeElement.className).toContain('ngx-btn');
      expect(buttonElements[2].nativeElement.className).toContain('ngx-btn');
      expect(buttonElements[3].nativeElement.className).toContain('ngx-btn');
    });

    it('should apply classname based on ngxType="primary"', () => {
      expect(buttonElements[0].nativeElement.className).toContain('ngx-btn-primary');
    });
    
    it('should apply classname based on ngxType="secondary"', () => {
      expect(buttonElements[1].nativeElement.className).toContain('ngx-btn-secondary');
    });
    
    it('should apply classname based on ngxType="destructive"', () => {
      expect(buttonElements[2].nativeElement.className).toContain('ngx-btn-destructive');
    });

    it('should be disabled', () => {
      expect(buttonElements[3].nativeElement.disabled).toBeTrue();
    });
  });
})

@Component({
  template: `
    <button ngx-button ngxType="primary">button</button>
    <button ngx-button ngxType="secondary">button</button>
    <button ngx-button ngxType="destructive">button</button>
    <button ngx-button ngxType="destructive" [disabled]="true">button</button>
  `
})
export class TestButtonComponent {
}
