import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPipeComponent } from './apply-pipe.component';

describe('MappingPipeComponent', () => {
  let component: ApplyPipeComponent;
  let fixture: ComponentFixture<ApplyPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyPipeComponent ]
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
