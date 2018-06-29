import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private _router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const started = Date.now();
    // let ok: string;
    return next.handle(req)
      .pipe(
        tap(
          // Succeeds when there is a response; ignore other events
          // event => ok = event instanceof HttpResponse ? 'succeeded' : '',
          // Operation failed; error is an HttpErrorResponse
         // error => ok = 'failed'
        ),
        catchError(err => {
          console.log(err);
          if (err instanceof HttpErrorResponse) {
            console.log(err.status);
            console.log(err.message);
            if (err.status === 401) {
              alert('401 error');
              this._router.navigate(['/login']);
            }
          }
          return new Observable<any>(err);
        }),
        // Log when response observable either completes or errors
        finalize(() => {
          // const elapsed = Date.now() - started;
          //  onst msg = `${req.method} "${req.urlWithParams}"
          //   ${ok} in ${elapsed} ms.`;
          // alert(msg);
        })
      );
  }
} 
