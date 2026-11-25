// The RailSeat API's JSON, from P2 (module 3). Ids are MongoDB ObjectIds,
// sent as strings.
//
// TODO(task 8): check every field against your own API's answers from P2,
//   for example with `curl http://localhost:3000/trains/search?...`. If you
//   named a field differently there, change it here too.

/** One journey in GET /trains/search. */
export interface TrainResult {
  journey_id: string;
  train_number: string;
  train_name: string;
  /** Date and time as text, such as "2026-12-01T16:30:00". */
  departs: string;
  arrives: string;
  free_seats: number;
}

/** One seat in GET /journeys/:journeyId/seats. */
export interface Seat {
  seat_id: string;
  /** Such as "B1". */
  coach: string;
  /** "1A", "2A", "3A", "SL" or "CC". */
  travel_class: string;
  number: number;
  booked: boolean;
}

/** One booking: the answer of POST /bookings, and each item of GET /bookings. */
export interface Booking {
  /** 10 characters. */
  pnr: string;
  /** "confirmed" or "cancelled". */
  status: string;
  journey_id: string;
  /** Such as "2026-12-01". */
  travel_date: string;
  train_number: string;
  train_name: string;
  coach: string;
  seat_number: number;
  passenger_name: string;
}

/** The body of POST /bookings. */
export interface BookingIn {
  journey_id: string;
  seat_id: string;
  passenger: { name: string; age: number };
}

/** The answer of POST /auth/login. */
export interface LoginResponse {
  access_token: string;
  token_type: string;
}

/** Every error answer: 400, 401, 404, 409. A 400 also has `issues`. */
export interface ApiErrorBody {
  error: string;
  issues?: { path: string; message: string }[];
}
