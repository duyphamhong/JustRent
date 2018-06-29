import { Component, OnInit } from '@angular/core';
import { } from '@angular/material/icon/';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  dateOptionsSelect = [
    { value: '1', label: 'Today', selected: true },
    { value: '2', label: 'Yesterday' },
    { value: '3', label: 'Last 7 days' },
    { value: '4', label: 'Last 30 days' },
    { value: '5', label: 'Last week' },
    { value: '6', label: 'Last month' }
    ];
    selectedValue = '1';
    public kinds = [{
      value : 1,
      viewValue : 'hihi'
    }, {
      value : 1,
      viewValue : 'hihi'
    }, {
      value : 1,
      viewValue : 'hihi'
    }];
    public isHidden = false;
    public isCreateNewPost = true;
    public filePhoto;
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  goToNextStep() {
    this._router.navigate(['/roomforrent/create-detail']);
  }
}
