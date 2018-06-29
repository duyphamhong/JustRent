import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-detail',
  templateUrl: './create-detail.component.html',
  styleUrls: ['./create-detail.component.scss']
})
export class CreateDetailComponent implements OnInit {
  @Input () emp  = true;
  formData = new FormData();
  constructor(private _router: Router) { }
  url: String = "";
  base64textString = [];
  ngOnInit() {
  }
  uploadPhoto() {
    document.getElementById('filePhoto').click();
  }
  handleFileInputPhoto(files) {
    var reader = new FileReader();

    reader.onload =this._handleReaderLoaded.bind(this);

    reader.readAsBinaryString(files[0]);
    this.formData.append('file', files[0], files[0].name);
  }
  goToBack() {
    this._router.navigate(['/roomforrent/create']);
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString.push({
             Src : "data:image/jpeg;base64,"+ btoa(binaryString)
        });
   }
   deleteImage (index){
    this.base64textString.splice(index,1);
   }
}
