import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_ROUTING } from './app.routing';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(APP_ROUTING), provideClientHydration(withEventReplay()),
    provideHttpClient(),
  ]
};
