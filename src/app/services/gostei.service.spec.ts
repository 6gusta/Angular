import { TestBed } from '@angular/core/testing';

import { GosteiService } from './gostei.service';

describe('GosteiService', () => {
  let service: GosteiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GosteiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
