import { Component, OnInit } from '@angular/core';
import { } from '@angular/material/icon/';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  dateOptionsSelect= [
    { value: '1', label: 'Today', selected: true },
    { value: '2', label: 'Yesterday' },
    { value: '3', label: 'Last 7 days' },
    { value: '4', label: 'Last 30 days' },
    { value: '5', label: 'Last week' },
    { value: '6', label: 'Last month' }
    ];
    selectedValue = '1';
  public Listyourplace: any = 
    {
      "name": "List your place",
      "check" : true
    };
    public Adddetails: any = 
    {
      "name": "Add details",
      "check" : false
    };
    public Verifyyouraccount: any = 
    {
      "name": "Verify your account",
      "check" : false
    };
    public Sharepromote: any = 
    {
      "name": "Share & promote",
      "check" : false
    };
    public kinds : any[] = [{
      value : 1,
      viewValue : "hihi"
    },
    {
      value : 1,
      viewValue : "hihi"
    },
    {
      value : 1,
      viewValue : "hihi"
    }]
    public isHidden = false;
    public isCreateNewPost = true;
    public filePhoto:any;
    date3: Date;
  constructor() { }

  ngOnInit() {
  }
}
