import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-detail',
  templateUrl: './create-detail.component.html',
  styleUrls: ['./create-detail.component.scss']
})
export class CreateDetailComponent implements OnInit {
  @Input () emp : true;
  constructor() { }

  ngOnInit() {
  }
  uploadPhoto() {
    document.getElementById('filePhoto').click();
  }
  fileChanged(e) {
   
  }
}
