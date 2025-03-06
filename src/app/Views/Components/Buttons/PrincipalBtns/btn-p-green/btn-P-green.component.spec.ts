import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPGreenComponent } from './btn-P-green.component';

describe('BtnGreenComponent', () => {
  let component: BtnPGreenComponent;
  let fixture: ComponentFixture<BtnPGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnPGreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
