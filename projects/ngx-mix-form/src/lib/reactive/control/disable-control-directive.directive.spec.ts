import {FormBuilder, FormGroup, NgControl} from '@angular/forms';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgxMixFormReactiveModule} from '../ngx-mix-form-reactive.module';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {DisableControlDirective} from './disable-control.directive';

fdescribe('DisableControlDirective', () => {

  let component: TestDisableControlComponent;
  let fixture: ComponentFixture<TestDisableControlComponent>;


  beforeEach(async () => {
    await TestBed
      .configureTestingModule({
        declarations: [TestDisableControlComponent],
        imports: [NgxMixFormReactiveModule]
      })
      .compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(TestDisableControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', async () => {
    const directive = new DisableControlDirective({} as NgControl);
    await expect(directive).toBeTruthy();
  });

  it('should be enabled by default', async () => {
    const testDe: DebugElement = fixture.debugElement;
    const inputDe = testDe.query(By.css('input'));
    const input: HTMLElement = inputDe.nativeElement;
    await expect(input.getAttribute('disabled')).toBe(null);
  });

  it('should toggle between enabled / disabled', async () => {
    const testDe: DebugElement = fixture.debugElement;
    const inputDe = testDe.query(By.css('input'));
    const input: HTMLElement = inputDe.nativeElement;
    await expect(input.getAttribute('disabled')).toBe(null);
    const buttonDe = testDe.query(By.css('button'));
    buttonDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    await fixture.whenStable();
    await expect(input.getAttribute('disabled')).not.toBe(null);
    buttonDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    await fixture.whenStable();
    await expect(input.getAttribute('disabled')).toBe(null);
  });

});


@Component({
  selector: 'ngx-mix-test-disable-control',
  template: `
    <form [formGroup]="formGroup">
      <input formControlName="formControl" [disableControl]="disable">
      <button (click)="disable= !disable">{{disable? 'Enable' : 'Disable'}}</button>
    </form>
  `
})
export class TestDisableControlComponent {
  disable: boolean;
  formGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group( {
      formControl: 'Some text'
    });
  }

}
