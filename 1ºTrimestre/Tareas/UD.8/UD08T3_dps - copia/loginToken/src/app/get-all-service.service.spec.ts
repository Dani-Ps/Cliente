import { TestBed } from '@angular/core/testing';

import { GetAllServiceService } from './get-all-service.service';

describe('GetAllServiceService', () => {
  let service: GetAllServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
