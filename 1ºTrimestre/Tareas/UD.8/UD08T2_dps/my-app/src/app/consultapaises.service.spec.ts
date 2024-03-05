import { TestBed } from '@angular/core/testing';

import { ConsultaPaisesService } from './consultapaises.service';

describe('ConsultapaisesService', () => {
  let service: ConsultaPaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaPaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
