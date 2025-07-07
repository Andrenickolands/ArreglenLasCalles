import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalThanks } from './modal-thanks';

describe('ModalThanks', () => {
  let component: ModalThanks;
  let fixture: ComponentFixture<ModalThanks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalThanks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalThanks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
