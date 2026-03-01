import { TestBed } from '@angular/core/testing';

import { HotelsReservationsSnackbarsService } from './hotels-reservations-snackbars.service';

describe('HotelsReservationsSnackbarsService', () => {
  let service: HotelsReservationsSnackbarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsReservationsSnackbarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
