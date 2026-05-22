import { User } from './../../../model/User.model';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule],
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


  onSubmit(){
    
  }

}
