import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSComponent } from './btn-s.component';

describe('BtnSComponent', () => {
  let component: BtnSComponent;
  let fixture: ComponentFixture<BtnSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
