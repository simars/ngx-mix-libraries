import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMixComponent } from './ngx-mix.component';

describe('NgxMixComponent', () => {
  let component: NgxMixComponent;
  let fixture: ComponentFixture<NgxMixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
