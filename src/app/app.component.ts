import { Component } from '@angular/core';
import { HotelsReservationsComponent } from './components/hotels-reservations/hotels-reservations.component';

@Component({
  selector: 'app-root',
  imports: [HotelsReservationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'HotelFinder-WEB-NG';
}
