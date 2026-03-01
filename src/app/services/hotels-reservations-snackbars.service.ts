import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class HotelsReservationsSnackbarsService {
  private _snackBar = inject(MatSnackBar);

  openSnackBar(action: string) {
    this._snackBar.open(
      'Ocurrió un error al obtener los hoteles, se cargarán datos de prueba locales.',
      action,
      { duration: 9000 }
    );
  }
}
