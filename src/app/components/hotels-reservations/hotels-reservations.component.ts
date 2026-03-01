import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  inject,
  signal,
  untracked,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { HotelsReservationsFiltersService } from '../../services/hotels-reservations-filters.service';
import { HotelsReservationsHttpService } from '../../services/hotels-reservations-http.service';
import { Hotel } from '../../types/hotel';
import { HotelsReservationsCardComponent } from '../hotels-reservations-card/hotels-reservations-card.component';
import { HotelsReservationsFiltersComponent } from '../hotels-reservations-filters/hotels-reservations-filters.component';

@Component({
  selector: 'app-hotels-reservations',
  imports: [
    CommonModule,
    HotelsReservationsCardComponent,
    HotelsReservationsFiltersComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginator,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './hotels-reservations.component.html',
  styleUrl: './hotels-reservations.component.scss',
})
export class HotelsReservationsComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private filtersService = inject(HotelsReservationsFiltersService);
  private hotelsService = inject(HotelsReservationsHttpService);

  private hotelsData = this.hotelsService.hotels;
  protected filters = this.filtersService.hotelFilters;
  protected loadingHotels = this.hotelsService.loadingHotels;

  protected currentPageHotels = signal<Hotel[]>([]);
  protected filteredHotelsData = signal<Hotel[]>([]);
  protected currentPage = signal(0);

  protected endIndex = 6;
  protected startIndex = 0;

  constructor() {
    effect(() => {
      const hotels = this.hotelsData();
      if (hotels && hotels.length > 0) {
        untracked(() => {
          this.applyFilters();
          this.resetPaginator();
        });
      }
    });

    effect(() => {
      this.filters();
      untracked(() => {
        this.applyFilters();
        this.resetPaginator();
      });
    });
  }

  private applyFilters(): void {
    const filters = this.filters();
    let filtered = [...this.hotelsData()];

    if (filters.name && filters.name.trim()) {
      filtered = filtered.filter((hotel) =>
        hotel.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    if (filters.stars && filters.stars.length > 0) {
      filtered = filtered.filter((hotel) =>
        filters.stars.includes(hotel.stars)
      );
    }

    if (
      filters.rate !== null &&
      filters.rate !== undefined &&
      filters.rate > 0
    ) {
      filtered = filtered.filter((hotel) => hotel.rate >= filters.rate);
    }

    if (
      filters.price !== null &&
      filters.price !== undefined &&
      filters.price > 0
    ) {
      filtered = filtered.filter((hotel) => hotel.price <= filters.price);
    }

    this.filteredHotelsData.set(filtered);
  }

  onPageChange(event: any): void {
    this.currentPage.set(event.pageIndex);
    this.updatePaginatedData();
  }

  private updatePaginatedData(): void {
    const hotels = this.filteredHotelsData();
    this.startIndex = this.currentPage() * 6;
    this.endIndex = this.startIndex + 6;
    this.currentPageHotels.set(hotels.slice(this.startIndex, this.endIndex));
  }

  private resetPaginator(): void {
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.currentPage.set(0);
    this.updatePaginatedData();
  }
}
