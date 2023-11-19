import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AuthInputComponent } from './components/auth-input/auth-input.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RecaptchaModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
