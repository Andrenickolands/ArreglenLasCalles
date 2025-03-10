import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrioComponent } from './barrio.component';

describe('BarrioComponent', () => {
  let component: BarrioComponent;
  let fixture: ComponentFixture<BarrioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarrioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
