import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  host: {
    '(document:click)': 'onCloseCalendar()'
  }
})
export class DatepickerComponent implements OnInit {

  @Input() label: string = 'Date';
  @Input() value: string;
  @Output() update: EventEmitter<string> = new EventEmitter<string>();

  date: Date = new Date();
  month: number; 
  year: number; 
  days: number[];

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  showCalendar: boolean = false;
  result: string;

  ngOnInit() {
    // Set value if default date is present
    if (this.value) this.date = new Date(this.value);
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();
    if (this.value) this.selectDay(this.date.getDate());
    this.updateMonth();
  }
  
  updateMonth(e?: Event, type?: string) {
    if (e) e.stopPropagation();
    if (type === 'dec') this.month--;
    if (type === 'inc') this.month++;
    if (this.month < 0) {
      this.month = 11;
      this.year--;
    }
    if (this.month > 11) {
      this.month = 0;
      this.year++;
    }
    const date = new Date(this.year, this.month, 0);
    const days = date.getDate();
    const day = date.getDay();
    const prefix = new Array(day);

    const arrayDate = [];
    for (let i = 0; i<days; i++) {
      arrayDate[i] = i + 1;
    }
    this.days = prefix.concat(arrayDate);
  }

  selectDay(day: number) {
    if (!day) return;
    const pad = s => s.length < 2 ? 0 + s : s;
    this.date = new Date(this.year, this.month, day);
    this.result = `${this.year}-${pad(this.month + 1 + '')}-${pad(day + '')}`;
    this.update.emit(this.result);
  }

  onShowCalendar(e:Event) {
    e.stopPropagation();
    this.showCalendar = true;
  }
  onCloseCalendar() {
    if (this.showCalendar) {
      this.showCalendar = false;
      this.update.emit(this.result);
    }
    return;
  }

}
