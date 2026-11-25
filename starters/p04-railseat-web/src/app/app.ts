import { Component } from '@angular/core';
import { Search } from './pages/search/search';

// The root component. For now it shows only the Search page.
//
// TODO(task 7): import RouterOutlet, RouterLink and RouterLinkActive from
//   '@angular/router' instead of Search.
// TODO(task 11): inject Auth, for the signed-in email and Sign out.
@Component({
  imports: [Search],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
