import { Injectable, signal } from '@angular/core';
import { HotelReservationFilters } from '../types/hotel-reservation-filters';

@Injectable({
  providedIn: 'root',
})
export class HotelsReservationsFiltersService {
  initialFilters: HotelReservationFilters = {
    name: '',
    stars: [1, 2, 3, 4, 5],
    rate: 2,
    price: 500,
  };

  hotelFilters = signal<HotelReservationFilters>(this.initialFilters);

  updateFilters(filters: Partial<HotelReservationFilters>): void {
    this.hotelFilters.set({
      ...this.hotelFilters(),
      ...filters,
    });
  }

  onStarFilterChange(star: number, checked: boolean): void {
    const currentStars = this.hotelFilters().stars;

    if (checked) {
      this.updateFilters({
        stars: [...currentStars, star],
      });
    } else {
      this.updateFilters({
        stars: currentStars.filter((s) => s !== star),
      });
    }
  }

  setNameFilter(name: string): void {
    this.updateFilters({ name });
  }

  setRateFilter(rate: number): void {
    this.updateFilters({ rate });
  }

  setPriceFilter(price: number): void {
    this.updateFilters({ price });
  }

  resetFilters(): void {
    this.hotelFilters.set(this.initialFilters);
  }
}
