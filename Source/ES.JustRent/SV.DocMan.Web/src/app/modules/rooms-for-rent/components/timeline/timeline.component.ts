import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public Listyourplace = {
    'name': 'List your place',
    'check' : true
  };
  public Adddetails = {
    'name': 'Add details',
    'check' : false
  };
  public Verifyyouraccount = {
    'name': 'Verify your account',
    'check' : false
  };
  public Sharepromote = {
    'name': 'Share & promote',
    'check' : false
  };
  constructor() { }

  ngOnInit() {
  }

}
