// Starter checks for LiveMatch. A pretend server (HttpTestingController)
// answers instead of the replay server, and pretend timers stand in for the
// 2 seconds, so the checks run at once.
// When you finish a task, delete ".skip" from its group and run
// `npx ng test --no-watch`.

import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { FEED_URL } from '../app/feed';
import { LiveMatch } from '../app/live-match/live-match';
import { madeUpLive } from './made-up-match';

const LIVE = `${FEED_URL}/live`;

beforeEach(() => {
  vi.useFakeTimers({ toFake: ['setInterval', 'clearInterval'] });
  TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
});

afterEach(() => {
  vi.useRealTimers();
});

// TODO(task 12): delete ".skip" on the next line when LiveMatch polls /live.
describe.skip('task 12: polling /live', () => {
  it('asks at once, then every 2 seconds, and stops when removed', () => {
    const server = TestBed.inject(HttpTestingController);
    const fixture = TestBed.createComponent(LiveMatch);
    server.expectOne(LIVE).flush(madeUpLive);
    expect(fixture.componentInstance.match()).toEqual(madeUpLive);
    vi.advanceTimersByTime(2000);
    server.expectOne(LIVE).flush(madeUpLive);
    fixture.destroy();
    vi.advanceTimersByTime(10000);
    server.expectNone(LIVE);
  });
});

// TODO(task 13): delete ".skip" on the next line when the three states work.
describe.skip('task 13: loading and error states', () => {
  it('shows a role="status" message before the first answer', () => {
    TestBed.inject(HttpTestingController);
    const fixture = TestBed.createComponent(LiveMatch);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[role="status"]')).not.toBeNull();
    fixture.destroy();
  });

  it('keeps the last good match and polls on after a failed request', () => {
    const server = TestBed.inject(HttpTestingController);
    const fixture = TestBed.createComponent(LiveMatch);
    server.expectOne(LIVE).flush(madeUpLive);
    vi.advanceTimersByTime(2000);
    server.expectOne(LIVE).flush('down', { status: 500, statusText: 'Server Error' });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[role="alert"]')).not.toBeNull();
    expect(fixture.componentInstance.match()).toEqual(madeUpLive);
    vi.advanceTimersByTime(2000);
    server.expectOne(LIVE).flush(madeUpLive);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[role="alert"]')).toBeNull();
    fixture.destroy();
  });
});
