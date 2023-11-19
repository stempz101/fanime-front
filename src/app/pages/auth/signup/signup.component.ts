import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
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
