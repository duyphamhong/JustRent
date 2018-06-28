import { Component, OnInit } from '@angular/core';
import { UserInfoStorageService } from '../../commons/user-info-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.scss']
})
export class AppheaderComponent implements OnInit {

  userName: string;
  optionsSelect: Array<any>;
  isLogin: boolean;

  constructor(private storageService: UserInfoStorageService, private _router: Router) { }
  
  ngOnInit() {
    this.isLogin = true;
    this.userName  = this.storageService.getUserName();
    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
  ];
  }

  signOut(): void {
    this.storageService.clearStoreage();
    this.isLogin = false;
    this._router.navigate(['/login']);
  }
}
