import { Component } from '@angular/core';

/** The search form passengers start from. Route: '' */
@Component({
  imports: [],
  selector: 'app-search',
  templateUrl: './search.html',
})
export class Search {
  // TODO(task 7): inject Router, and add a method for a temporary button that
  //   navigates to /results with the query parameters from NDLS, to BCT and
  //   tomorrow's date as YYYY-MM-DD.
  // TODO(task 9): replace it with searchForm() from ./search-form and a submit
  //   method. Invalid: markAllAsTouched(), so every message shows. Valid:
  //   navigate to /results with the trimmed, uppercased values.
}
