import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPipeComponent } from './apply-pipe.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgxMixModule} from '../../../../projects/ngx-mix/src/lib/ngx-mix.module';

describe('MappingPipeComponent', () => {
  let component: ApplyPipeComponent;
  let fixture: ComponentFixture<ApplyPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxMixModule],
      declarations: [ ApplyPipeComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
