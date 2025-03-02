import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InptPrincipalComponent } from './inpt-principal.component';

describe('IptPrincipalComponent', () => {
  let component: InptPrincipalComponent;
  let fixture: ComponentFixture<InptPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InptPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InptPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
