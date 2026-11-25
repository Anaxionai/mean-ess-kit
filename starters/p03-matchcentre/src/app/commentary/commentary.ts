import { Component, input } from '@angular/core';
import { MatchState } from '../types';

/** The Commentary section: the latest 12 balls, newest first. */
@Component({
  imports: [],
  selector: 'app-commentary',
  templateUrl: './commentary.html',
})
export class Commentary {
  /** The whole match: from the saved sample in task 11, from /live in task 12. */
  match = input.required<MatchState>();

  // TODO(task 11): work out the latest 12 balls, newest first, with computed.
  //   The feed lists the balls oldest first.
}
