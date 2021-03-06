import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceInvokerService } from '../commons/service-invoker.service';
import { Observable } from 'rxjs';
import { AppSettings } from '../constants/app-setting';
import { Api } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class PhoneContactService {

  constructor(private http: HttpClient, private serviceInvoker: ServiceInvokerService) { }

  getPhoneContacts(): Observable<any> { 
    return this.serviceInvoker.get('', AppSettings.API_ADDRESS + Api.GET_PHONE_CONTACTS);
  }
}
