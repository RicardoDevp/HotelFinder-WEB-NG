import { TestBed } from '@angular/core/testing';

import { HotelReservationsSnackbarsService } from './hotel-reservations-snackbars.service';

describe('HotelReservationsSnackbarsService', () => {
  let service: HotelReservationsSnackbarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelReservationsSnackbarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
