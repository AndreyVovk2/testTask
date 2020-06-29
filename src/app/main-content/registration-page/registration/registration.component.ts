import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registration: FormGroup;
  check: boolean;

  constructor(private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.registrationValidator();
  }

  registrationValidator() {
    this.registration = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]

    });
  }

  submit() {
    const loginData: any = {
      name: '',
      email: '',
      password: ''
    };
    loginData.name = this.registration.controls.name.value;
    loginData.email = this.registration.controls.email.value;
    loginData.password = this.registration.controls.password.value;
    localStorage.setItem('register', JSON.stringify(loginData));
    if (this.registration.valid) {
      this.check = false;
      this.router.navigate(['auth']).finally();
    } else {
      this.check = true;
      this.registrationValidator();
    }
  }

}
