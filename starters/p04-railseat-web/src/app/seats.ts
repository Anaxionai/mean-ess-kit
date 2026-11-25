import { inject, Service, signal } from '@angular/core';
import { RailseatApi } from './railseat-api';
import { Seat } from './types';

/**
 * The seats of one journey, shared by every page that needs them. The seat
 * map shows them, and booking (task 12) and sign-out (task 11) refresh or
 * clear them.
 */
@Service()
export class Seats {
  private api = inject(RailseatApi);

  /** The seats of the journey last loaded. */
  readonly list = signal<Seat[]>([]);
  /** True while a load is running. */
  readonly loading = signal(false);
  /** A message for the page, or null when the last load worked. */
  readonly error = signal<string | null>(null);

  /** Load the seats of this journey into `list`, setting `loading` and `error`. */
  load(journeyId: string): void {
    // TODO(task 10): remember journeyId for refresh(), set loading, call
    //   api.seats(journeyId), and on the answer set list (or error), then
    //   clear loading. A 404 means there is no such journey.
    throw new Error(`TODO(task 10): load the seats of journey ${journeyId}`);
  }

  /** Load the same journey again, so the list shows the server's truth. */
  refresh(): void {
    throw new Error('TODO(task 10): load the last journey again');
  }
}
