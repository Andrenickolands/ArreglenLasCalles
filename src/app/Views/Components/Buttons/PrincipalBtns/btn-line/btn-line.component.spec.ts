import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLineComponent } from './btn-line.component';

describe('BtnLineComponent', () => {
  let component: BtnLineComponent;
  let fixture: ComponentFixture<BtnLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
