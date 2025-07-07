import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReport } from './modal-report';

describe('ModalReport', () => {
  let component: ModalReport;
  let fixture: ComponentFixture<ModalReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
