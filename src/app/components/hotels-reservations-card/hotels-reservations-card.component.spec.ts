import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsReservationsCardComponent } from './hotels-reservations-card.component';

describe('HotelsReservationsCardComponent', () => {
  let component: HotelsReservationsCardComponent;
  let fixture: ComponentFixture<HotelsReservationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsReservationsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsReservationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
