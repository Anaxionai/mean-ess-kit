// Starter checks for BattingTable and BowlingTable. Each check draws a table
// from made-up rows and looks for them in the HTML.
// When you finish task 11, delete ".skip" from the group and run
// `npx ng test --no-watch`.

import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { BattingTable } from '../app/batting-table/batting-table';
import { BowlingTable } from '../app/bowling-table/bowling-table';

// TODO(task 11): delete ".skip" on the next line when both tables work.
describe.skip('task 11: the tables draw their rows input', () => {
  it('BattingTable has a caption, header cells and a row per batter', () => {
    const fixture = TestBed.createComponent(BattingTable);
    fixture.componentRef.setInput('rows', [
      { name: 'A Kumar', runs: 45, balls: 30, fours: 4, sixes: 2 },
      { name: 'C Das', runs: 7, balls: 9, fours: 1, sixes: 0 },
    ]);
    fixture.detectChanges();
    const html: string = fixture.nativeElement.innerHTML;
    expect(html).toContain('<caption');
    expect(html).toContain('<th');
    expect(html).toContain('A Kumar');
    expect(html).toContain('45');
    expect(html).toContain('C Das');
  });

  it('BowlingTable has a caption, header cells and a row per bowler', () => {
    const fixture = TestBed.createComponent(BowlingTable);
    fixture.componentRef.setInput('rows', [{ name: 'D Rao', overs: '3.2', runs: 31, wickets: 2 }]);
    fixture.detectChanges();
    const html: string = fixture.nativeElement.innerHTML;
    expect(html).toContain('<caption');
    expect(html).toContain('<th');
    expect(html).toContain('D Rao');
    expect(html).toContain('3.2');
    expect(html).toContain('31');
  });
});
