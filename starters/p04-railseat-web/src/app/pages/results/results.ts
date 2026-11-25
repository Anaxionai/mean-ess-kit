import { Component } from '@angular/core';

/** The trains for one search. Route: 'results?from=NDLS&to=BCT&date=2026-12-01' */
@Component({
  imports: [],
  selector: 'app-results',
  templateUrl: './results.html',
})
export class Results {
  // TODO(task 7): from, to and date as input<string>(), filled from the query
  //   parameters by withComponentInputBinding().
  // TODO(task 8): inject RailseatApi. In an effect, read from(), to() and
  //   date(), call searchTrains and log the answer with console.log. Return
  //   early while a value is still empty.
  // TODO(task 9): check the URL's values with searchForm() and setValue. If
  //   they are invalid, keep the problem for the page and do not call the API.
  // TODO(task 10): keep the trains, loading and error in signals. In the
  //   effect, subscribe, and pass onCleanup a function that unsubscribes, so a
  //   new search cancels the old one.
}
