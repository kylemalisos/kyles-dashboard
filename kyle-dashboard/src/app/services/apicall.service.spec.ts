import { TestBed } from '@angular/core/testing';

import { ApiCallService } from './apicall.service';

describe('ApicallService', () => {
  let service: ApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
