import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export function RequestInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  if (request.params.get('skipInterceptor')) {
    return next(request);
  }
  const modifiedReq = request.clone({
    url: environment.api_url.concat(request.url.toString())
  });
  return next(modifiedReq);
}

