import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Runs for every HttpClient request once app.config.ts registers it with
 * provideHttpClient(withInterceptors([authInterceptor])).
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // TODO(task 11):
  // - Call inject() at the top: Auth and Router.
  // - When there is a token, pass on
  //   req.clone({ setHeaders: { Authorization: 'Bearer ' + token } }),
  //   otherwise req as it is.
  // - Add catchError: on a 401 from any URL but /auth/login, call logout(),
  //   navigate to /login, and rethrow the error.
  throw new Error('TODO(task 11): add the token to each request');
};
