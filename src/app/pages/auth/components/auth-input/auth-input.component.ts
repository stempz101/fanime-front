import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth-input',
  templateUrl: './auth-input.component.html',
  styleUrls: ['./auth-input.component.css'],
})
export class AuthInputComponent implements OnInit {
  @Input() inputType: string = 'text';
  @Input() placeholder: string = '';
  @Input() control: FormControl;

  ngOnInit(): void {}
}
