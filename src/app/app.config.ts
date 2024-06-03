import { PreloadAllModules, RouterModule } from '@angular/router';
import { RequestInterceptor } from '@interceptors/request.interceptor';
import { routes } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideClientHydration,
  withHttpTransferCacheOptions
} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ),
    importProvidersFrom(HttpClientModule),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    importProvidersFrom(CommonModule),
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true
      })
    )
  ]
};
