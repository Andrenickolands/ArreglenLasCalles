import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportValidateComponent } from './report-validate.component';

describe('ReportValidateComponent', () => {
  let component: ReportValidateComponent;
  let fixture: ComponentFixture<ReportValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportValidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
