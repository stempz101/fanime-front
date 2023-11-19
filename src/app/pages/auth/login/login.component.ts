import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  isCaptchaCompleted: boolean = false;

  ngOnInit(): void {}

  onCaptchaResolved(response: any): void {
    this.isCaptchaCompleted = true;
  }

  submitForm(): void {
    if (this.isCaptchaCompleted) {
      console.log('Form submitted with reCAPTCHA verification');
    } else {
      console.log('Please complete the reCAPTCHA');
    }
  }
}
