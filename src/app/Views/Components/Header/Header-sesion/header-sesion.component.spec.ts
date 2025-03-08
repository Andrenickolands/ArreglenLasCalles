import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSesionComponent } from './header-sesion.component';

describe('HeaderSesionComponent', () => {
  let component: HeaderSesionComponent;
  let fixture: ComponentFixture<HeaderSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSesionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
