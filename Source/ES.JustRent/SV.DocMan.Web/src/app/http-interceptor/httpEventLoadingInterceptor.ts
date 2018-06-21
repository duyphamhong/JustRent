import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { catchError, finalize, map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class HTTPStatus {
  private requestInFlight$: BehaviorSubject<boolean>;
  constructor() {
    this.requestInFlight$ = new BehaviorSubject(false);
  }

  setHttpStatus(inFlight: boolean) {
    this.requestInFlight$.next(inFlight);
  }

  getHttpStatus(): Observable<boolean> {
    return this.requestInFlight$.asObservable();
  }
}

@Injectable()
export class HttpEventLoadingInterceptor implements HttpInterceptor {
  constructor(private status: HTTPStatus) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(event => {
        return event;
      }),
      catchError(error => {
        return new Observable<any>(error);
      }),
      finalize(() => {
        this.status.setHttpStatus(false);
      })
    )
  }
}
