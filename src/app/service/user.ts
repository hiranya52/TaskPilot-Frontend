import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../../core/api/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class User {

  constructor(private http: HttpClient){}

  register(userObj : User){
    return this.http.post(API_ENDPOINTS.user.LogIn, userObj);
  }


}
