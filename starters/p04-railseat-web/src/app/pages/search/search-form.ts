import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

// One set of rules for the search: the Search page's form and the Results
// page's check of the URL both use them.
//
// Each validator returns null for a good value, or an error object whose
// value is a message a passenger understands, for example
//   { stationCode: 'Use a station code of 2 to 5 letters, such as NDLS.' }
// Test one without a page: stationCode(new FormControl('N1')).

/** The search form: three text controls that are never null. */
export type SearchForm = FormGroup<{
  from: FormControl<string>;
  to: FormControl<string>;
  date: FormControl<string>;
}>;

/** A station code: after trim and uppercase, it matches ^[A-Z]{2,5}$. */
export function stationCode(control: AbstractControl): ValidationErrors | null {
  throw new Error('TODO(task 9): check a station code');
}

/** A real YYYY-MM-DD date (not 2026-02-30) that is not before today. */
export function notInPast(control: AbstractControl): ValidationErrors | null {
  throw new Error('TODO(task 9): check the date');
}

/**
 * The group validator: from and to, trimmed and uppercased, must differ.
 * The Search page shows its message under To.
 */
export function differentStations(group: AbstractControl): ValidationErrors | null {
  throw new Error('TODO(task 9): check that from and to differ');
}

/** A new, empty search form with all three validators. */
export function searchForm(): SearchForm {
  throw new Error('TODO(task 9): build the FormGroup');
}
