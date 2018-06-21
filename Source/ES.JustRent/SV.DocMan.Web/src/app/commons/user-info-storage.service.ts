import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoStorageService {

  userName: string;
  accessToken: string;
  permissions: string;

  constructor() { }

  setUserName(name:string): void {
    localStorage.setItem('userName', name);
  }

  setAccessToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  getUserName(): string {
    return localStorage.getItem('userName');
  }

  getAccessToken(): string {
    return localStorage.getItem('accessToken');
  }

  clearStoreage(): void {
    localStorage.clear();
  }
}
