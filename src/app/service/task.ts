import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../core/api/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class Task {


  constructor(private http: HttpClient){}

  getAllTasks(): Observable<Task>{

    return this.http.get<Task>(API_ENDPOINTS.task.getAllTasks);

  }


}
