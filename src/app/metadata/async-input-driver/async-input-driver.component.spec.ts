import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncInputDriverComponent } from './async-input-driver.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgxMixModule} from '../../../../projects/ngx-mix/src/lib/ngx-mix.module';

describe('AsyncInputDriverComponent', () => {
  let component: AsyncInputDriverComponent;
  let fixture: ComponentFixture<AsyncInputDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncInputDriverComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncInputDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
