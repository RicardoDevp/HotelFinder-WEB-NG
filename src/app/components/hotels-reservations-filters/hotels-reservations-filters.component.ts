import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { HotelsReservationsFiltersService } from '../../services/hotels-reservations-filters.service';

@Component({
  selector: 'app-hotels-reservations-filters',
  imports: [
    MatCardModule,
    MatSliderModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatTooltipModule,
  ],
  templateUrl: './hotels-reservations-filters.component.html',
  styleUrl: './hotels-reservations-filters.component.scss',
})
export class HotelsReservationsFiltersComponent implements OnInit, OnDestroy {
  @ViewChild('nameInput') nameInput!: HTMLInputElement;
  @ViewChildren('starCheckbox') starCheckboxes!: QueryList<MatCheckbox>;

  protected filtersService = inject(HotelsReservationsFiltersService);

  private destroy$ = new Subject<void>();
  private nameSubject = new Subject<string>();

  protected hotelsReservationfilters = this.filtersService.hotelFilters;

  protected nameValue = signal('');
  protected priceValue = signal(500);
  protected rateValue = signal(2);

  ngOnInit(): void {
    this.nameSubject
      .pipe(debounceTime(300), takeUntil(this.destroy$))
      .subscribe((name) => {
        this.filtersService.setNameFilter(name);
      });
  }

  onStarFilterChange(event: any, star: number): void {
    this.filtersService.onStarFilterChange(star, event.checked);
  }

  onNameChange(event: Event): void {
    const name = (event.target as HTMLInputElement).value;
    this.nameValue.set(name);
    this.nameSubject.next(name);
  }

  onRateChange(event: Event): void {
    const rate = (event.target as HTMLInputElement).valueAsNumber;
    this.rateValue.set(rate);
    this.filtersService.setRateFilter(rate);
  }

  onPriceChange(event: Event): void {
    const price = (event.target as HTMLInputElement).valueAsNumber;
    this.priceValue.set(price);
    this.filtersService.setPriceFilter(price);
  }

  resetFilters(): void {
    this.filtersService.resetFilters();
    this.resetVisualFilters();
  }

  private resetVisualFilters(): void {
    this.nameValue.set('');
    if (this.nameInput) {
      this.nameInput.value = '';
    }

    this.starCheckboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });

    this.rateValue.set(2);

    this.priceValue.set(500);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
