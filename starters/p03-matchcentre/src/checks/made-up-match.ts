// A made-up match in the format of the kit's replay feed, for the starter
// checks. It is not Cricsheet data. Innings 1 has 2 overs and 2 balls, with
// one wide and one wicket.

const play = (over: number, ball: number, batter: string, bowler: string, runs: number) => ({
  over,
  ball,
  batter,
  non_striker: batter === 'A Kumar' ? 'C Das' : 'A Kumar',
  bowler,
  runs: { batter: runs, extras: 0, total: runs },
});

export const madeUpInnings = {
  number: 1,
  team: 'Pune Panthers',
  balls: [
    play(0, 1, 'A Kumar', 'D Rao', 4),
    play(0, 2, 'A Kumar', 'D Rao', 1),
    {
      over: 0,
      ball: 3,
      batter: 'B Singh',
      non_striker: 'A Kumar',
      bowler: 'D Rao',
      runs: { batter: 0, extras: 1, total: 1 },
      extras: { wides: 1 },
    },
    {
      over: 0,
      ball: 3,
      batter: 'B Singh',
      non_striker: 'A Kumar',
      bowler: 'D Rao',
      runs: { batter: 0, extras: 0, total: 0 },
      wicket: { player_out: 'B Singh', kind: 'bowled' },
    },
    play(0, 4, 'C Das', 'D Rao', 6),
    play(0, 5, 'C Das', 'D Rao', 0),
    play(0, 6, 'C Das', 'D Rao', 2),
    play(1, 1, 'A Kumar', 'E Iyer', 1),
    play(1, 2, 'C Das', 'E Iyer', 0),
    play(1, 3, 'C Das', 'E Iyer', 0),
    play(1, 4, 'C Das', 'E Iyer', 4),
    play(1, 5, 'C Das', 'E Iyer', 0),
    play(1, 6, 'C Das', 'E Iyer', 1),
    play(2, 1, 'C Das', 'D Rao', 0),
    play(2, 2, 'C Das', 'D Rao', 1),
  ],
};

/** A /live answer with one innings in play. */
export const madeUpLive = {
  match_id: '1',
  status: 'live',
  innings: [madeUpInnings],
};
