import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacheComponent } from './bache.component';

describe('BacheComponent', () => {
  let component: BacheComponent;
  let fixture: ComponentFixture<BacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
