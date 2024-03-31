import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.params.get('skipInterceptor')) {
      return next.handle(request);
    }

    const modifiedReq = request.clone({
      url: environment.api_url.concat(request.url.toString())
    });
    return next.handle(modifiedReq);
  }
}
