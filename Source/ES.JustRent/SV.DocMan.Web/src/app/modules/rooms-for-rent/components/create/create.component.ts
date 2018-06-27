import { Component, OnInit } from '@angular/core';
import { } from '@angular/material/icon/';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
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
    public isHidden = true;
    public isCreateNewPost = true;
    public filePhoto:any;
    date3: Date;
  constructor() { }

  ngOnInit() {
  }
  uploadPhoto() {
    document.getElementById('filePhoto').click();
  }
  fileChanged(e) {
    this.filePhoto = e.target.files[0];
}

}
