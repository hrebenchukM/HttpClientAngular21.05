import { TestBed } from '@angular/core/testing';

import { HttpRxService } from './http-rx.service';

describe('HttpRxService', () => {
  let service: HttpRxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
