import { Component, OnInit } from '@angular/core';
import { UserInfoStorageService } from '../../commons/user-info-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  userName: string;

  constructor(private storageService: UserInfoStorageService, private _router: Router) { }

  ngOnInit() {
    this.userName  = this.storageService.getUserName();
  }

  signOut(): void {
    this.storageService.clearStoreage();
    this._router.navigate(['/login']);
  }
}
