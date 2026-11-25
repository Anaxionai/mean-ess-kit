import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // TODO(task 7): add withComponentInputBinding() to provideRouter, so the
    //   pages read path and query parameters as inputs.
    provideRouter(routes),
    // TODO(task 11): provideHttpClient(withInterceptors([authInterceptor])),
    //   so every request goes through auth/auth-interceptor.ts.
  ],
};
