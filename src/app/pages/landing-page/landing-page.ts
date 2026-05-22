import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

  constructor( private router: Router ) {}

  onClick(){
    this.router.navigate(['/auth/login']);
  }

}


