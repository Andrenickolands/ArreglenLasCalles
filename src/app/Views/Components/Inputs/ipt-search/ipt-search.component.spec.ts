import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IptSearchComponent } from './ipt-search.component';

describe('IptSearchComponent', () => {
  let component: IptSearchComponent;
  let fixture: ComponentFixture<IptSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IptSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IptSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
