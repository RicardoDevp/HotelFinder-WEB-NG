import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: MatPaginatorIntl,
      useValue: {
        ...new MatPaginatorIntl(),
        itemsPerPageLabel: 'Hoteles por página:',
        nextPageLabel: 'Página siguiente',
        previousPageLabel: 'Página anterior',
      },
    },
  ],
};
