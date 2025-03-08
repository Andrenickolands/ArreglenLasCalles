import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPPrincipalComponent } from './btn-p-principal.component';

describe('BtnPrincipalComponent', () => {
  let component: BtnPPrincipalComponent;
  let fixture: ComponentFixture<BtnPPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnPPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
