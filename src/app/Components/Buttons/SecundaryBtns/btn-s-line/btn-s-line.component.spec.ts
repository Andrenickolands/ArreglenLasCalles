import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSLineComponent } from './btn-s-line.component';

describe('BtnSLineComponent', () => {
  let component: BtnSLineComponent;
  let fixture: ComponentFixture<BtnSLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnSLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
