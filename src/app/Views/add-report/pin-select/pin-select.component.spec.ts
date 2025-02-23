import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinSelectComponent } from './pin-select.component';

describe('PinSelectComponent', () => {
  let component: PinSelectComponent;
  let fixture: ComponentFixture<PinSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
