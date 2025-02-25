import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IptPrincipalComponent } from './ipt-principal.component';

describe('IptPrincipalComponent', () => {
  let component: IptPrincipalComponent;
  let fixture: ComponentFixture<IptPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IptPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IptPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
