import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsReservationsComponent } from './hotels-reservations.component';

describe('HotelsReservationsComponent', () => {
  let component: HotelsReservationsComponent;
  let fixture: ComponentFixture<HotelsReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsReservationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
