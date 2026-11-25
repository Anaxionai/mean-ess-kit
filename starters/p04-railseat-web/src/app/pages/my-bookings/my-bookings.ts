import { Component } from '@angular/core';

/** The signed-in passenger's own bookings. Route: 'bookings' */
@Component({
  imports: [],
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.html',
})
export class MyBookings {
  // TODO(task 11): load RailseatApi.myBookings() into signals for the
  //   bookings, loading and error.
}
