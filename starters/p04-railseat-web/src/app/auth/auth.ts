import { HttpClient } from '@angular/common/http';
import { computed, inject, Service, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../railseat-api';
import { LoginResponse } from '../types';

/**
 * Who is signed in. The token lives only in memory, in this service, so a
 * reload signs the passenger out (task 11, step 10). Never put it in
 * localStorage: any script on the page can read that.
 */
@Service()
export class Auth {
  private http = inject(HttpClient);

  // TODO(task 11): a private field for the token, such as
  //   `private accessToken: string | null = null`.

  /** The signed-in passenger's email, or null when nobody is signed in. */
  readonly email = signal<string | null>(null);

  /** True when a passenger is signed in. */
  readonly isSignedIn = computed<boolean>(() => {
    throw new Error('TODO(task 11): work out isSignedIn from the email signal');
  });

  /** The token for the interceptor, or null when nobody is signed in. */
  token(): string | null {
    throw new Error('TODO(task 11): return the token');
  }

  /**
   * POST /auth/login with { email, password }. On success, keep access_token
   * and the email. A wrong email or password fails with a 401
   * HttpErrorResponse: the login page shows its own message for it.
   */
  login(email: string, password: string): Observable<LoginResponse> {
    throw new Error('TODO(task 11): sign in at ' + API_URL + '/auth/login');
  }

  /** Forget the token and the email, and clear the Seats list. */
  logout(): void {
    throw new Error('TODO(task 11): sign out');
  }
}
