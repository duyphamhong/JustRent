import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUserObject } from '../../models/loginUserObject';
import { UserInfoStorageService } from '../../commons/user-info-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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

        this._router.navigate(['/dashboard']);
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
