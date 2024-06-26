import { TestBed } from '@angular/core/testing';

import { HttpalbumsService } from './httpalbums.service';

describe('HttpalbumsService', () => {
  let service: HttpalbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpalbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
