import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  date: string;
  today: string;

  constructor() { }

  ngOnInit() {
    this.today = new Date().toDateString();
  }

  onDateUpdate(date: string): void {
    this.date = date;
  }

}
