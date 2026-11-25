import { Component, input } from '@angular/core';
import { MatchState } from '../types';

/**
 * The Scorecard section: one button per innings, and the batting and bowling
 * tables of the innings that is chosen.
 */
@Component({
  // TODO(task 11): list BattingTable and BowlingTable here.
  imports: [],
  selector: 'app-scorecard',
  templateUrl: './scorecard.html',
})
export class Scorecard {
  /** The whole match: from the saved sample in task 11, from /live in task 12. */
  match = input.required<MatchState>();

  // TODO(task 11): keep the chosen innings in a signal, where null means
  //   "the latest innings". Work out the chosen innings and its batting and
  //   bowling rows with computed, from battingCard and bowlingCard in score.ts.
}
