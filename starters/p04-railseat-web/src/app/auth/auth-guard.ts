import { CanActivateFn } from '@angular/router';

/**
 * Keeps signed-out passengers away from the seat map and My bookings.
 * Put it in canActivate on those routes in app.routes.ts.
 */
export const authGuard: CanActivateFn = () => {
  // TODO(task 11): true when signed in; otherwise
  //   inject(Router).createUrlTree(['/login']).
  throw new Error('TODO(task 11): let signed-in passengers through');
};
