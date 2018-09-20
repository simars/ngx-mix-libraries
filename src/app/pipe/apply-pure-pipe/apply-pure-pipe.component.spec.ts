import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ApplyPurePipeComponent} from './apply-pure-pipe.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgxMixModule} from '../../../../projects/ngx-mix/src/lib/ngx-mix.module';


describe('MappingPipeComponent', () => {
  let component: ApplyPurePipeComponent;
  let fixture: ComponentFixture<ApplyPurePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxMixModule],
      declarations: [ ApplyPurePipeComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyPurePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
