import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { LogIn } from './pages/log-in/log-in';

export const routes: Routes = [

  {
    path: '',
    component: LandingPage
  },
  {
    path: '/auth/login',
    component: LogIn
  }


];
