import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRedComponent } from './btn-red.component';

describe('BtnRedComponent', () => {
  let component: BtnRedComponent;
  let fixture: ComponentFixture<BtnRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnRedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
