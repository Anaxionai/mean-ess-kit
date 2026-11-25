import { Component } from '@angular/core';

/** Every seat of one journey, coach by coach. Route: 'journeys/:journeyId/seats' */
@Component({
  imports: [],
  selector: 'app-seat-map',
  styleUrl: './seat-map.css',
  templateUrl: './seat-map.html',
})
export class SeatMap {
  // TODO(task 7): journeyId = input<string>(), from the path.
  // TODO(task 10): inject Seats, and load the seats in an effect when
  //   journeyId() changes. Group them by coach with computed, and keep the
  //   open coach and the selected seat's id (not its place in the grid) in
  //   signals. Refresh every 30 seconds with interval and takeUntilDestroyed,
  //   and add a method for the Refresh seats button.
  // TODO(task 12): a reactive form with Name (required, minLength 2) and Age
  //   (min 1, max 120). A `booking` signal, true while the request runs. Book
  //   through RailseatApi.book, then seats.refresh() after success and after
  //   failure. On success keep the booking, to show its PNR, train, coach and
  //   seat. On an HttpErrorResponse with status 409, the someone-else message;
  //   a 401 is the interceptor's job; anything else, "Booking failed. Please
  //   try again." On any error, clear the selection.
}
