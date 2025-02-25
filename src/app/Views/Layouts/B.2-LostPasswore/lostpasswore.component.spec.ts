import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostpassworeComponent } from './lostpasswore.component';

describe('LostpassworeComponent', () => {
  let component: LostpassworeComponent;
  let fixture: ComponentFixture<LostpassworeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LostpassworeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostpassworeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
