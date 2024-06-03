import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideClientHydration,
  withHttpTransferCacheOptions
} from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { RequestInterceptor } from '@interceptors/request.interceptor';
import { routes } from './app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ),
    provideHttpClient(withFetch(),
      withInterceptors(
        [RequestInterceptor]
      )
    ),

    importProvidersFrom(CommonModule),
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true
      })
    )
  ]
};
