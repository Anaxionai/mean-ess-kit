import { Component, input } from '@angular/core';
import { BowlingRow } from '../types';

/** The bowling table of one innings: one row per bowler. */
@Component({
  imports: [],
  selector: 'app-bowling-table',
  templateUrl: './bowling-table.html',
})
export class BowlingTable {
  /** The rows to show, made by bowlingCard in score.ts. */
  rows = input.required<BowlingRow[]>();
}
