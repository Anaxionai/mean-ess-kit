import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking, BookingIn, Seat, TrainResult } from './types';

/** Your RailSeat API from P2. Start it with `npm run dev` in railseat/api/. */
export const API_URL = 'http://localhost:3000';

/**
 * Every call to the RailSeat API. Each method returns the HttpClient
 * observable: the page or service that calls it subscribes. A failed answer
 * arrives as an HttpErrorResponse, with its status (404, 409 ...) and the
 * API's `{ error }` body.
 */
@Service()
export class RailseatApi {
  private http = inject(HttpClient);

  /** GET /trains/search?from=NDLS&to=BCT&date=2026-12-01 */
  searchTrains(from: string, to: string, date: string): Observable<TrainResult[]> {
    throw new Error(`TODO(task 8): search the trains from ${from} to ${to} on ${date}`);
  }

  /** GET /journeys/:journeyId/seats. A 404 for a journey that does not exist. */
  seats(journeyId: string): Observable<Seat[]> {
    throw new Error(`TODO(task 10): load the seats of journey ${journeyId}`);
  }

  /** GET /bookings: the signed-in passenger's own bookings. Needs the token. */
  myBookings(): Observable<Booking[]> {
    throw new Error('TODO(task 11): load my bookings');
  }

  /** POST /bookings. Needs the token. A 409 when someone else took the seat first. */
  book(body: BookingIn): Observable<Booking> {
    throw new Error(`TODO(task 12): book seat ${body.seat_id}`);
  }
}
