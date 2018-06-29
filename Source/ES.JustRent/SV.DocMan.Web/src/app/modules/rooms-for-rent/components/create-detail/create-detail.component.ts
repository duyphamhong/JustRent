import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-detail',
  templateUrl: './create-detail.component.html',
  styleUrls: ['./create-detail.component.scss']
})
export class CreateDetailComponent implements OnInit {
  @Input () emp  = true;
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  uploadPhoto() {
    document.getElementById('filePhoto').click();
  }
  fileChanged(e) {
  }
  goToBack() {
    this._router.navigate(['/roomforrent/create']);
  }
}
