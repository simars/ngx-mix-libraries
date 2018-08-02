import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncInputDriverComponent } from './async-input-driver.component';

describe('AsyncInputDriverComponent', () => {
  let component: AsyncInputDriverComponent;
  let fixture: ComponentFixture<AsyncInputDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncInputDriverComponent ]
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
