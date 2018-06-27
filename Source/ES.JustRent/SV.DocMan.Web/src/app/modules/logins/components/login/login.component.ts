import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../../services/authentication.service';
import { UserInfoStorageService } from '../../../../commons/user-info-storage.service';
import { LoginUserObject } from '../../../../models/loginUserObject';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginUserObject = {
    UserName: '',
    Password: ''
  };

  loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _avRoute: ActivatedRoute,
    private authenService: AuthenticationService,
    private _router: Router,
    private storeageService: UserInfoStorageService) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'name': new FormControl(this.user.UserName, [
        Validators.required,
      ]),
      'pass': new FormControl(this.user.Password),
    });
  }

  login(): void {
    if (this.loginForm.invalid)
      return;
    this.authenService.login(this.user).subscribe((data) => {
      if (data.status === 1) {
        this.storeageService.setUserName(data.userName);
        this.storeageService.setAccessToken(data.accessToken);

        this._router.navigate(['/system-management']);
      } else if (data.status === 2) {
        console.error(data.errors);
      }
    }, error => {
      console.error(error);
      alert(error)
    });
  }

  get name() { return this.loginForm.get('name'); }

  get pass() { return this.loginForm.get('pass'); }
}
