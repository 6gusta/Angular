import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInteressadoComponent } from './formulario-interessado.component';

describe('FormularioInteressadoComponent', () => {
  let component: FormularioInteressadoComponent;
  let fixture: ComponentFixture<FormularioInteressadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioInteressadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioInteressadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
