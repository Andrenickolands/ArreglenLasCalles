import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptTermsComponent } from './acept-terms.component';

describe('AceptTermsComponent', () => {
  let component: AceptTermsComponent;
  let fixture: ComponentFixture<AceptTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AceptTermsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceptTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
