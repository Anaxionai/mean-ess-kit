import { Component, input } from '@angular/core';
import { BattingRow } from '../types';

/** The batting table of one innings: one row per batter. */
@Component({
  imports: [],
  selector: 'app-batting-table',
  templateUrl: './batting-table.html',
})
export class BattingTable {
  /** The rows to show, made by battingCard in score.ts. */
  rows = input.required<BattingRow[]>();
}
