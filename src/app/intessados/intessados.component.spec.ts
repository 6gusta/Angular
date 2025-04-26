import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntessadosComponent } from './intessados.component';

describe('IntessadosComponent', () => {
  let component: IntessadosComponent;
  let fixture: ComponentFixture<IntessadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntessadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntessadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
