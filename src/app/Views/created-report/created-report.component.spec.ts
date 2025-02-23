import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedReportComponent } from './created-report.component';

describe('CreatedReportComponent', () => {
  let component: CreatedReportComponent;
  let fixture: ComponentFixture<CreatedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
