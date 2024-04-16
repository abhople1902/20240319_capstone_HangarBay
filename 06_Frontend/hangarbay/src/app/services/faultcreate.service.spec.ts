import { TestBed } from '@angular/core/testing';

import { FaultcreateService } from './faultcreate.service';

describe('FaultcreateService', () => {
  let service: FaultcreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaultcreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
