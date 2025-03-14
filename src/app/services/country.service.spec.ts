import { TestBed } from '@angular/core/testing';

import { CountrysService } from './country.service';

describe('CountryService', () => {
  let service: CountrysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
