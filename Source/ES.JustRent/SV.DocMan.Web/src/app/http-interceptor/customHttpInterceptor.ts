import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfoStorageService } from '../commons/user-info-storage.service';
import { LoadingIndicatorService } from '../commons/loading-indicator.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(public storeageService: UserInfoStorageService, private loadingService: LoadingIndicatorService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.onRequestStarted();
    request = request.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '**',
        'Authorization': `Bearer ${this.storeageService.getAccessToken()}`
      })
    });
    //console.log(request);
    return next.handle(request).pipe(
      finalize(() => {
        this.loadingService.onRequestFinished();
      })
    );
  }
}

