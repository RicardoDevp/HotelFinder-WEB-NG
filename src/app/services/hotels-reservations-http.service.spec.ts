import { TestBed } from '@angular/core/testing';

import { HotelsReservationsHttpService } from './hotels-reservations.service';

describe('HotelsReservationsHttpService', () => {
  let service: HotelsReservationsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsReservationsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
