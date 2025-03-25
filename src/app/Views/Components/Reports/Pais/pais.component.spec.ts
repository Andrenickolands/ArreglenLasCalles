import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisComponent } from './Pais.Component';

describe('PaisComponent', () => {
  let component: PaisComponent;
  let fixture: ComponentFixture<PaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
