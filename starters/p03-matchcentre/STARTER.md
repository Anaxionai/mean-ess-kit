# Match Centre Guided starter (P3, module 4, week 6)

This folder is a ready-made `matchcentre/` project for the Guided level of P3.
It does the set-up for you: the Angular CLI project, the test runner, the
file layout, and the typed inputs and signatures the briefs ask for. It gives
you no answers. Each stub throws `new Error('TODO(task NN): ...')` or holds a
`TODO(task NN)` comment, and you write it in task NN of module 4.

## What is included

- The project that task 9's `ng new matchcentre --style=css --ssr=false
  --ai-config=none --skip-git --defaults` makes (Angular 22, TypeScript 6,
  Vitest through `ng test`), without `README.md`, `src/app/app.spec.ts` and
  the start page. `package-lock.json` pins every version.
- `src/app/app.html`: a placeholder page, so `npm start` works at once.
- `src/styles.css`: empty, for all your styles.
- `src/app/types.ts`: `Ball`, `Innings`, `MatchState` and `MatchMeta` are
  empty, because typing the real feed is task 10. `BattingRow` and
  `BowlingRow` (task 11, step 2) are given.
- `src/app/score.ts`: the six functions, as stubs with typed parameters.
- `src/app/score.spec.ts`: three `it.todo` tests for you to write (task 10).
- `src/app/feed.ts`: `FEED_URL` (task 12, step 1 is done).
- `BattingTable`, `BowlingTable`, `Scorecard`, `Commentary` and `LiveMatch`,
  each in its own folder as `ng generate component` makes them, with their
  inputs typed and their templates empty. They have no `.css` file: your
  styles stay in `src/styles.css`.
- `src/checks/`: the starter checks (see below).
- `tsconfig.json` already has `"resolveJsonModule": true` (task 10, step 6).

Not included, because they are yours: `src/app/sample.ts` and
`src/app/live-sample.json` (task 10), and `README.md` and `docs/` (task 15).

## Copy it in (task 9, step 2)

You need Node (the version in the kit's `VERSIONS.md`) and the Angular CLI
from task 3. Run `git pull` in your kit folder. Then, in Git Bash, in task 9's
folder:

```bash
cp -r ~/mean-ess-kit/starters/p03-matchcentre matchcentre
cd matchcentre
npm install
npm start
```

At http://localhost:4200 you see the starter's placeholder page, not
Angular's start page that step 3 describes. There is no `app.spec.ts` to
delete (step 4). Go on with step 5.

Copy the starter only once, in task 9. From task 10 on, you copy your own
`matchcentre/` folder forward, as each brief says.

## Run it

```bash
npm start                             # the app at http://localhost:4200
npx tsc -p tsconfig.app.json --noEmit # the type check: no output means no errors
npm run build                         # the production build, into dist/matchcentre/browser
npx ng test --no-watch                # 8 skipped checks and 3 todo, until you switch them on
```

## Steps you skip

- Task 11, step 3, and task 12, step 2: the five components exist, so do not
  run `ng generate component`. It would stop, because the files exist.
- Task 12, step 2: `match` is declared in `LiveMatch`. You still inject
  `HttpClient` there.

## The starter checks

- `src/checks/score-checks.spec.ts`: `battingCard`, `bowlingCard` and
  `describeBall` (task 11).
- `src/checks/tables-checks.spec.ts`: `BattingTable` and `BowlingTable` (task 11).
- `src/checks/live-match-checks.spec.ts`: polling and clean-up (task 12), and
  the loading and error states (task 13).

When you finish a task, delete `.skip` from its group and run
`npx ng test --no-watch`. The checks use a made-up match in the feed's format
and a pretend server, so the replay server need not run. They test only what
every fair solution agrees on. They are not part of your tasks, and the
build leaves out every `.spec.ts` file.

The starter does not test `inningsRuns`, `inningsWickets` or `oversText`:
you test them yourself in `src/app/score.spec.ts`, with values from your
own sample.

## Your TODOs

| Task | Files | What you write |
|---|---|---|
| 9 | `src/app/app.html`, `src/styles.css` | the static mock-up, and its phone-first layout |
| 10 | `src/app/types.ts`, `src/app/score.ts`, `src/app/score.spec.ts` | the four feed types, `sample.ts` and the saved sample; `inningsRuns`, `inningsWickets`, `oversText` and their three tests |
| 11 | `src/app/score.ts`, the four component folders, `src/app/app.ts`, `src/app/app.html` | `battingCard`, `bowlingCard`, `describeBall`; the innings signal, `computed` rows and templates; `match = sample` |
| 12 | `live-match/`, `src/app/app.ts`, `src/app/app.html` | polling with `interval`, `exhaustMap` and `takeUntilDestroyed`; the title `effect`; `/meta`; Pause and Resume |
| 13 | `live-match/`, `scorecard/scorecard.html`, `src/styles.css` | `catchError` inside the poll; the loading, error and empty states; the accessibility fixes |
| 14 | `src/index.html`, `src/app/app.html` | the title and description; the Cricsheet credit. The `build:pages` script goes in `package.json`, which cannot hold a comment. |

Tasks 1 to 7 are learn cards and task 8 is the concept check: none of them
uses the starter. Task 15, the wrap-up, has no TODO: you write `README.md`
and `EXPLAIN.md`, not code.

The Stretch goals (wicket announcements, the run-rate chart, the saved-match
replay) have no stubs.

To see what is left, search the folder for `TODO` with Ctrl+Shift+F in
VS Code. Delete each TODO comment when you have done it.

## The Cricsheet credit

The replay data comes from Cricsheet under the ODC-By 1.0 licence, which asks
a public page to credit it (see the kit's `tools/cricket-replay/README.md`).
Your published page needs a line such as "Ball-by-ball data from Cricsheet
(cricsheet.org), licensed under ODC-By 1.0." (task 14, step 3).

## What you still write yourself

Everything a task asks for:

- the mock-up's HTML and every style;
- the four feed types, `sample.ts`, your saved sample and your tests;
- every function body in `score.ts`;
- every template, signal, `computed` and `effect`, and the polling;
- the loading, error and empty states and the accessibility fixes;
- the GitHub Pages set-up, `evidence.md`, `AI_LOG.md` and the wrap-up files.
