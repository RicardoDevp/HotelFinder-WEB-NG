import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsReservationsFiltersComponent } from './hotels-reservations-filters.component';

describe('HotelsReservationsFiltersComponent', () => {
  let component: HotelsReservationsFiltersComponent;
  let fixture: ComponentFixture<HotelsReservationsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsReservationsFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsReservationsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
