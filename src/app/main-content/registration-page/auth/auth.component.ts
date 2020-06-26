import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  login: FormGroup;
  check: any;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loginValidator();
  }

  loginValidator() {
    this.login = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]

    });
  }

  loginSubmit() {
    const loginData: any = {
      name: '',
      password: ''
    };
    loginData.name = this.login.controls.name.value;
    loginData.password = this.login.controls.password.value;
    // this.localstorage = localStorage.setItem('arrayEvents', JSON.stringify(this.event));
    localStorage.setItem('login', JSON.stringify(loginData));
    if (this.login.valid) {
      this.check = false;

    }
    this.check = true;
    this.loginValidator();
    this.router.navigateByUrl('main').then();
  }
}
