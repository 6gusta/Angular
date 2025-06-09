import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrigadopelointeresseComponent } from './obrigadopelointeresse.component';

describe('ObrigadopelointeresseComponent', () => {
  let component: ObrigadopelointeresseComponent;
  let fixture: ComponentFixture<ObrigadopelointeresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObrigadopelointeresseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObrigadopelointeresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
