import { Component, Input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Hotel } from '../../types/hotel';

@Component({
  selector: 'app-hotels-reservations-card',
  imports: [MatCard, MatIcon],
  templateUrl: './hotels-reservations-card.component.html',
  styleUrl: './hotels-reservations-card.component.scss',
})
export class HotelsReservationsCardComponent {
  @Input() hotel: Hotel | null = null;

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'assets/image/hotel.jpg';
  }
}
