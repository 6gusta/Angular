import { TestBed } from '@angular/core/testing';

import { CadastroongService } from './cadastroong.service';

describe('CadastroongService', () => {
  let service: CadastroongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
