import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Hotel } from '../types/hotel';
import { mockHotelsData } from '../types/hotels';
import { HotelsReservationsSnackbarsService } from './hotels-reservations-snackbars.service';

@Injectable({
  providedIn: 'root',
})
export class HotelsReservationsHttpService {
  private apiUrl = 'http://localhost:3000/hotels';

  private http = inject(HttpClient);
  private snackBar = inject(HotelsReservationsSnackbarsService);

  public hotels = signal<Hotel[]>([]);
  public loadingHotels = signal<boolean>(true);

  constructor() {
    this.getHotels();
  }

  private getHotels(): void {
    this.http.get<Hotel[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.hotels.set(data);
        this.loadingHotels.set(false);
      },
      error: () => {
        this.snackBar.openSnackBar('Cerrar');
        this.hotels.set(mockHotelsData);
        this.loadingHotels.set(false);
      },
    });
  }
}
