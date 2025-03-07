import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTerciaryComponent } from './btn-terciary.component';

describe('BtnTerciaryComponent', () => {
  let component: BtnTerciaryComponent;
  let fixture: ComponentFixture<BtnTerciaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnTerciaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnTerciaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
