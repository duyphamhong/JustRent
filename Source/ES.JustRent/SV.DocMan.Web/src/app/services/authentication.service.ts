import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceInvokerService } from '../commons/service-invoker.service';
import { Observable } from 'rxjs';
import { LoginUserObject } from '../models/loginUserObject';
import { AppSettings } from '../constants/app-setting';
import { Api } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private serviceInvoker: ServiceInvokerService) { }

  login(user: LoginUserObject): Observable<any> {
    return this.serviceInvoker.get(user, AppSettings.API_ADDRESS + Api.LOGIN);
  }

  register(user: LoginUserObject): Observable<any> {
    return this.serviceInvoker.get(user, AppSettings.API_ADDRESS + Api.REGISTER);
  }
}
