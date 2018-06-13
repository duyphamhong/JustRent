import { Component, OnInit } from '@angular/core';
import { UserInfoStorageService } from '../../commons/user-info-storage.service';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  userName: string;

  constructor(private storageService: UserInfoStorageService) { }

  ngOnInit() {
    this.userName  = this.storageService.getUserName();
  }

  signOut(): void {
    this.storageService.clearStoreage();
  }
}
