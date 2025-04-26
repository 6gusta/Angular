import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOngComponent } from './page-ong.component';

describe('PageOngComponent', () => {
  let component: PageOngComponent;
  let fixture: ComponentFixture<PageOngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
