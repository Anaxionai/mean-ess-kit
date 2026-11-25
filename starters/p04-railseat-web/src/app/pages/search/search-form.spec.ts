// Unit tests for search-form.ts. Run them with: npx ng test --no-watch
//
// TODO(task 9): import what you need from './search-form' and from 'vitest'
//   (expect), write each case, and change `it.skip` to `it` as you go. Never
//   type a fixed future date: work it out from today, or the test fails later.
import { describe, it } from 'vitest';

describe('search form rules', () => {
  it.skip('accepts a valid search', () => {
    throw new Error('TODO(task 9): NDLS to BCT on a future date has no errors');
  });

  it.skip('accepts lowercase station codes', () => {
    throw new Error('TODO(task 9): ndls passes stationCode, as NDLS would');
  });

  it.skip('refuses the same station twice', () => {
    throw new Error('TODO(task 9): differentStations gives an error for NDLS to NDLS');
  });

  it.skip('refuses a date in the past', () => {
    throw new Error('TODO(task 9): notInPast gives an error for yesterday');
  });

  it.skip("refuses the input the AI's validators let through", () => {
    throw new Error("TODO(task 9): the input from your AI_LOG.md entry, and the error you expect");
  });
});
