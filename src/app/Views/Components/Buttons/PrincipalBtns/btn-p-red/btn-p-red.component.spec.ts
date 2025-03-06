import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPRedComponent } from './btn-p-red.component';

describe('BtnRedComponent', () => {
  let component: BtnPRedComponent;
  let fixture: ComponentFixture<BtnPRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnPRedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
