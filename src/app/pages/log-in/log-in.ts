import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  imports: [],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css',
})
export class LogIn {

  userForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  // const user = this.userForm.value;


// <form class="flex flex-col gap-5" [formGroup]="userForm" (ngSubmit)="onSubmit()">


}
