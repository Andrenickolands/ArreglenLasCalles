import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InptPasswordComponent } from './inpt-password.component';

describe('InptPasswordComponent', () => {
  let component: InptPasswordComponent;
  let fixture: ComponentFixture<InptPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InptPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InptPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
