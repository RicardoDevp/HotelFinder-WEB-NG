import { TestBed } from '@angular/core/testing';

import { HotelsReservationsFiltersService } from './hotels-reservations-filters.service';

describe('HotelsReservationsFiltersService', () => {
  let service: HotelsReservationsFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsReservationsFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
