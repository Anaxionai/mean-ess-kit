// Starter checks for the parts of score.ts that no task asks you to test.
// (inningsRuns, inningsWickets and oversText are yours to test, in
// src/app/score.spec.ts, in task 10.) Each group is skipped until its task.
// When you finish that task, delete ".skip" from the group and run
// `npx ng test --no-watch`. They check only figures that every fair way of
// counting agrees on.
//
// `as never` lets the made-up data in whatever your types in types.ts are.
// Do not copy it into your own code.

import { describe, expect, it } from 'vitest';
import { battingCard, bowlingCard, describeBall } from '../app/score';
import { madeUpInnings } from './made-up-match';

const innings = madeUpInnings as never;

// TODO(task 11): delete ".skip" on the next line when these three functions work.
describe.skip('task 11: batting, bowling and commentary', () => {
  it('battingCard has one row per batter, with runs off the bat', () => {
    const rows = battingCard(innings);
    expect(rows.map((row) => row.name).sort()).toEqual(['A Kumar', 'B Singh', 'C Das']);
    expect(rows.find((row) => row.name === 'A Kumar')).toMatchObject({ runs: 6, balls: 3, fours: 1, sixes: 0 });
    expect(rows.find((row) => row.name === 'C Das')).toMatchObject({ runs: 14, balls: 10, fours: 1, sixes: 1 });
  });

  it('bowlingCard has one row per bowler', () => {
    const rows = bowlingCard(innings);
    expect(rows.map((row) => row.name).sort()).toEqual(['D Rao', 'E Iyer']);
    expect(rows.find((row) => row.name === 'D Rao')).toMatchObject({ wickets: 1 });
    expect(rows.find((row) => row.name === 'E Iyer')).toMatchObject({ overs: '1.0', runs: 6, wickets: 0 });
  });

  it('describeBall names the bowler and the batter', () => {
    const text = describeBall(madeUpInnings.balls[0] as never);
    expect(text).toContain('D Rao');
    expect(text).toContain('A Kumar');
  });
});
