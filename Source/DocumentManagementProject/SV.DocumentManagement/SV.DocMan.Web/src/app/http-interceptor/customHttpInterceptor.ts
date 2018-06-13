import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfoStorageService } from '../commons/user-info-storage.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(public storeageService: UserInfoStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${this.storeageService.getAccessToken()}`)
    });
    return next.handle(request);
  }
}

