import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InptEmailComponent } from './inpt-email.component';

describe('InptEmailComponent', () => {
  let component: InptEmailComponent;
  let fixture: ComponentFixture<InptEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InptEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InptEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
