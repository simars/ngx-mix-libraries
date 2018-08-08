import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ApplyPurePipeComponent} from './apply-pure-pipe.component';


describe('MappingPipeComponent', () => {
  let component: ApplyPurePipeComponent;
  let fixture: ComponentFixture<ApplyPurePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyPurePipeComponent ]
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
