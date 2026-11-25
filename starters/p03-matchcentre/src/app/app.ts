import { Component } from '@angular/core';

// The root component. Its page is in app.html.
//
// TODO(task 11): add `match = sample` (from ./sample, which you write in
//   task 10), and list Scorecard and Commentary in `imports`.
// TODO(task 12): get /meta once with HttpClient into a `meta` signal, for the
//   header. Add `live = signal(true)` and a button that switches it, labelled
//   Pause or Resume. List LiveMatch in `imports`, and take out `match`.
@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
