import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroOngComponent } from './cadastro-ong.component';

describe('CadastroOngComponent', () => {
  let component: CadastroOngComponent;
  let fixture: ComponentFixture<CadastroOngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroOngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
