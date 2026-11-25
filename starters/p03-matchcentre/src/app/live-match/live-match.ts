import { Component, signal } from '@angular/core';
import { MatchState } from '../types';

/**
 * The live part of the page: it asks the replay server for /live every
 * 2 seconds, and stops asking when it is removed from the page (Pause).
 */
@Component({
  // TODO(task 12): list Scorecard and Commentary here.
  imports: [],
  selector: 'app-live-match',
  templateUrl: './live-match.html',
})
export class LiveMatch {
  /** The latest answer of /live, or null before the first one. */
  match = signal<MatchState | null>(null);

  constructor() {
    // TODO(task 12): inject HttpClient as a field. Here, poll FEED_URL + '/live'
    //   (from ../feed): at once, then every 2 seconds, with interval, startWith,
    //   exhaustMap and takeUntilDestroyed, and set `match` with each answer.
    //   Add an effect that sets document.title from the latest score, such as
    //   "GT 145/3 · Match Centre".
    // TODO(task 13): catch a failed request inside exhaustMap, so polling goes
    //   on. Keep an `error` signal and the time of the last good answer; keep
    //   the last good match on screen, and clear the error after a success.
    throw new Error('TODO(task 12): poll /live every 2 seconds');
  }
}
