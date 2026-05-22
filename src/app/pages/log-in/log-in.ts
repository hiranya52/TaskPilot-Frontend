import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../service/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css',
})
export class LogIn {

  private userService = inject(User);

  userForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }


  onSubmit(){

    const userData = this.userForm.value;

    this.userService.register(userData).subscribe((res: any) => {
      if (res?.message === 'Login successful') {
        this.router.navigate(['/board']);
      }
    });



  }

}
