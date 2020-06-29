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
  invalidValue = false;

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
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]

    });
  }

  loginSubmit() {
    const getDataRegister = JSON.parse(localStorage.getItem('register'));
    const loginData: any = {
      step: 2,
      name: '',
      password: ''
    };
    loginData.name = this.login.controls.name.value;
    loginData.password = this.login.controls.password.value;
    if (this.login.valid) {
      this.check = false;
    }
    this.check = true;
    this.loginValidator();
    if (getDataRegister.name === loginData.name && getDataRegister.password === loginData.password) {
      localStorage.setItem('login', JSON.stringify(loginData));
      this.router.navigateByUrl('main').then();
    } else {
      this.invalidValue = true;
    }

  }

  closePopup() {
    this.invalidValue = false;
  }

}
