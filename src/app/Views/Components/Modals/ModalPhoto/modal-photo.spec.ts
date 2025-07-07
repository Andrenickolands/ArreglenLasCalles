import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPhoto } from './modal-photo';

describe('ModalPhoto', () => {
  let component: ModalPhoto;
  let fixture: ComponentFixture<ModalPhoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPhoto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPhoto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
