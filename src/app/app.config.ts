import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';
import { provideRouter, TitleStrategy } from '@angular/router';
import { routes } from './app.routes';
import { PageTitleStrategy } from './page-tite-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withIncrementalHydration()),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    { provide: TitleStrategy, useClass: PageTitleStrategy },
  ],
};
