import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginongComponent } from './loginong.component';

describe('LoginongComponent', () => {
  let component: LoginongComponent;
  let fixture: ComponentFixture<LoginongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
