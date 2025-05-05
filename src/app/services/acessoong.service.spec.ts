import { TestBed } from '@angular/core/testing';

import { AcessoongService } from './acessoong.service';

describe('AcessoongService', () => {
  let service: AcessoongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcessoongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
