import { TestBed } from '@angular/core/testing';

import { PetverService } from './petver.service';

describe('PetverService', () => {
  let service: PetverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
