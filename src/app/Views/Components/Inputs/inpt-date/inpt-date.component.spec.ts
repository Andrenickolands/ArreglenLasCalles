import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InptDateComponent } from './inpt-date.component';

describe('InptDateComponent', () => {
  let component: InptDateComponent;
  let fixture: ComponentFixture<InptDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InptDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InptDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
