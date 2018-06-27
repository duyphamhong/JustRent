import { Component, OnInit } from '@angular/core';
import { PhoneContactService } from '../../../../services/phone-contact.service';
import { PhoneContact } from '../../../../models/phoneContact';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashboardComponent implements OnInit {
  contacts: PhoneContact[] = [];

  constructor(private service: PhoneContactService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.service.getPhoneContacts()
      .subscribe(data => {
        this.contacts = data.contacts
      }, error => {
        alert(error)
      });
  }
}
