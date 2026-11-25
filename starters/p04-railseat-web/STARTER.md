# RailSeat web: the Guided starter for P4 (module 5, week 7)

This folder is a `railseat/web/` folder with the set-up done: the Angular CLI
project, the pages, the API's types, the services' signatures, and Playwright
installed and configured. All the logic a task asks for is still yours. Each
piece is marked `TODO(task NN)`, where NN is the task's number in module 5.

It talks to your own RailSeat API from P2 (module 3) on port 3000, with the
sign-in you built there.

## What is included

| Path | What it gives you |
|---|---|
| `package.json`, `package-lock.json` | The project that `ng new web --style=css --ssr=false --ai-config=none --skip-git --defaults` makes (Angular 22, TypeScript 6, Vitest through `ng test`), plus `@playwright/test`, at pinned versions |
| `src/app/app.ts`, `app.html` | Shows only the Search page. You add the header and `<router-outlet />`. |
| `src/app/app.routes.ts`, `app.config.ts` | Empty routes, and `provideRouter` without its features |
| `src/app/pages/` | `search`, `results`, `seat-map`, `my-bookings` and `not-found` (task 7), and `login` (task 11), each with an `<h1>` |
| `src/app/pages/search/search-form.ts` | The `SearchForm` type and the stubs of `stationCode`, `notInPast`, `differentStations` and `searchForm` |
| `src/app/pages/search/search-form.spec.ts` | Five skipped test cases |
| `src/app/types.ts` | `TrainResult`, `Seat`, `Booking`, `BookingIn`, `LoginResponse` and `ApiErrorBody`, with ids as strings |
| `src/app/railseat-api.ts` | `API_URL` and the `RailseatApi` service: `searchTrains`, `seats`, `myBookings` and `book` as stubs |
| `src/app/seats.ts` | The `Seats` service: the `list`, `loading` and `error` signals, and `load` and `refresh` as stubs |
| `src/app/auth/` | `auth.ts` (the `Auth` service), `auth-interceptor.ts` (`authInterceptor`) and `auth-guard.ts` (`authGuard`), as stubs |
| `src/styles.css` | Plain, readable styles. This course uses plain CSS, no CSS framework. |
| `playwright.config.ts` | Chromium only, one worker, a trace for each failure, `baseURL`, and a `webServer` that runs `npm start` |
| `e2e/booking.spec.ts` | The end-to-end test, skipped, and a date helper to write |
| `.gitignore` | Keeps `node_modules/`, `dist/`, the Angular cache and Playwright's output out of Git |

## Copy it in (task 7, step 1)

You need Node (the version in the kit's `VERSIONS.md`) and the Angular CLI
from P3. In Git Bash, in task 7's folder, after you copy your `railseat/`
folder from P2 and before there is a `railseat/web/` folder:

```bash
cp -r ~/mean-ess-kit/starters/p04-railseat-web railseat/web
cd railseat/web
npm install
```

There is no `app.spec.ts` to delete (step 2). From task 8 on, you copy your
own `railseat/` folder forward, as each brief says.

## Run it

In `railseat/web/`:

```bash
npm start                # then open http://localhost:4200
npm run build            # the type check and the production build, into dist/web
npx ng test --no-watch   # 5 skipped until task 9
```

For task 13, install the test browser once with
`npx playwright install chromium`, then run `npx playwright test`. Playwright
starts the web app itself, so start MongoDB and your API first.

## Steps already done for you

- **Task 7:** step 1 (copy this folder), step 2 (only `npm install`), and
  step 3 (the pages and their `<h1>`s exist: do not run `ng generate`).
- **Task 8:** step 1 (`types.ts`, but check it against your API), and the
  first half of step 2 (the service and `API_URL`; `searchTrains` is yours).
  The CORS fix goes in your own Express app in `railseat/api/`, not here.
- **Task 10:** step 2's file and signals exist (`seats.ts`); `load` and
  `refresh` are yours.
- **Task 11:** the files exist: `auth/auth.ts`, `auth/auth-interceptor.ts`,
  `auth/auth-guard.ts` and `pages/login/`. Every step is still yours.
- **Task 13:** steps 1 to 3 are done, except installing the browser. There
  is no example test to delete.

## TODO map

| Task | Files | What you write |
|---|---|---|
| 7 | `app.routes.ts`, `app.config.ts`, `app.ts`, `app.html`, `styles.css` | The five routes, `withComponentInputBinding()`, the header with `routerLink` and `routerLinkActive` |
| 7 | `pages/search/`, `pages/results/`, `pages/seat-map/`, `pages/not-found/` | The temporary search button, the `from`, `to`, `date` and `journeyId` inputs, the links |
| 8 | `types.ts`, `railseat-api.ts`, `pages/results/results.ts` | Check the types; `searchTrains`; the first call, in an `effect` |
| 9 | `pages/search/search-form.ts`, `search-form.spec.ts` | The three validators, `searchForm()` and the five tests |
| 9 | `pages/search/`, `pages/results/` | The form with its messages; the check of the URL's values |
| 10 | `railseat-api.ts`, `seats.ts` | `seats()`, `load` and `refresh` |
| 10 | `pages/results/`, `pages/seat-map/` (with `seat-map.css`) | The train list with its states; the coach buttons, the seat grid, the selection and the 30-second refresh |
| 11 | `auth/auth.ts`, `auth/auth-interceptor.ts`, `auth/auth-guard.ts` | The token in memory, `login`, `logout`; the bearer header and the 401 sign-out; the guard |
| 11 | `app.config.ts`, `app.routes.ts`, `app.ts`, `app.html` | `withInterceptors`, the `/login` route and the guard, the header's sign-in parts |
| 11 | `railseat-api.ts`, `pages/login/`, `pages/my-bookings/` | `myBookings()`, the sign-in form, the booking cards with their states |
| 12 | `railseat-api.ts`, `pages/seat-map/` | `book()`, the booking form, its messages and the lost race (409) |
| 13 | `e2e/booking.spec.ts` | The date helper and the test |

Tasks 1 to 5 are learn cards and task 6 is the concept check. Task 14 is the
wrap-up (`railseat/README.md` and `EXPLAIN.md`). None of them writes code
here, so none has a TODO. The Stretch goals have no stubs.

## What you still write yourself

- Every route, page, template and form, and the whole seat map.
- Every method in `RailseatApi`, `Seats` and `Auth`, the interceptor and
  the guard.
- The validators, their unit tests and the Playwright test.
- The CORS change in your API, `evidence.md`, `AI_LOG.md`,
  `railseat/README.md` and `EXPLAIN.md`.

Delete each TODO comment when you finish it. When none are left, you may
delete this file.
