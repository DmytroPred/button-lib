import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxButtonGroupComponent } from '../ngx-button-group.component';
import { NgxButtonModule } from '../ngx-button.module';

describe('buttonGroup', () => {
  let fixture: ComponentFixture<TestButtonGroupComponent>;
  let buttonGroupElement: DebugElement[];
  describe('className', () => {
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgxButtonModule], 
        declarations: [NgxButtonGroupComponent, TestButtonGroupComponent],
      })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(TestButtonGroupComponent);
        fixture.detectChanges();
        
        buttonGroupElement = fixture.debugElement.queryAll(By.directive(NgxButtonGroupComponent));
      });
    }));

    it('should apply ngx-btn-group class', () => {
      expect(buttonGroupElement[0].nativeElement.className).toBe('ngx-btn-group');

    });
  });
})

@Component({
  template: `
  <ngx-button-group>
    <button ngx-button ngxType="primary">button</button>
    <button ngx-button ngxType="secondary">button</button>
    <button ngx-button ngxType="destructive">button</button>
    <button ngx-button ngxType="destructive" [disabled]="true">button</button>
  </ngx-button-group>
  `
})
export class TestButtonGroupComponent {
}
