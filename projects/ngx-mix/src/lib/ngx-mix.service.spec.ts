import { TestBed, inject } from '@angular/core/testing';

import { NgxMixService } from './ngx-mix.service';

describe('NgxMixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxMixService]
    });
  });

  it('should be created', inject([NgxMixService], (service: NgxMixService) => {
    expect(service).toBeTruthy();
  }));
});
