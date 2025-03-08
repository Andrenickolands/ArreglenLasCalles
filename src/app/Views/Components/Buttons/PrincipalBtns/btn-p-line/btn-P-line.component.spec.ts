import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPLineComponent } from './btn-P-line.component';

describe('BtnLineComponent', () => {
  let component: BtnPLineComponent;
  let fixture: ComponentFixture<BtnPLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnPLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
