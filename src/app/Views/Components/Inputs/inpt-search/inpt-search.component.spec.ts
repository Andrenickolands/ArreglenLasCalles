import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InptSearchComponent } from './inpt-search.component';

describe('IptSearchComponent', () => {
  let component: InptSearchComponent;
  let fixture: ComponentFixture<InptSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InptSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InptSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
