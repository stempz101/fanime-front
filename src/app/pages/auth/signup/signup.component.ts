import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });
  isCaptchaCompleted: boolean = false;

  ngOnInit(): void {}

  onCaptchaResolved(response: any): void {
    this.isCaptchaCompleted = true;
  }

  submitForm(): void {
    if (this.signupForm.invalid) {
      return;
    }

    if (this.isCaptchaCompleted) {
      console.log('Form submitted with reCAPTCHA verification');
    } else {
      console.log('Please complete the reCAPTCHA');
    }
  }
}
