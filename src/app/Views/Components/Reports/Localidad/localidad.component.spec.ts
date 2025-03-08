import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadComponent } from './localidad.component';

describe('LocalidadComponent', () => {
  let component: LocalidadComponent;
  let fixture: ComponentFixture<LocalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
