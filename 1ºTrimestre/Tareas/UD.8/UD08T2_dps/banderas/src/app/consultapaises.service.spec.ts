import { TestBed } from '@angular/core/testing';

import { ConsultapaisesService } from './consultapaises.service';

describe('ConsultapaisesService', () => {
  let service: ConsultapaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultapaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
