import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  isCaptchaCompleted: boolean = false;

  ngOnInit(): void {}

  onCaptchaResolved(response: any): void {
    this.isCaptchaCompleted = true;
  }

  submitForm(): void {
    if (this.loginForm.invalid) {
      return;
    }

    if (this.isCaptchaCompleted) {
      console.log('Form submitted with reCAPTCHA verification');
    } else {
      console.log('Please complete the reCAPTCHA');
    }
  }
}
