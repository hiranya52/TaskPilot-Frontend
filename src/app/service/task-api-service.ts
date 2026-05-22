import { Injectable } from '@angular/core';
import { Tasks } from '../../model/Tasks.model';
import { API_ENDPOINTS } from '../../core/api/api-endpoints';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskApiService {

  constructor(private http: HttpClient) {}

  private refreshRequired = new Subject<void>();

  refresh$ = this.refreshRequired.asObservable();

  notifyRefresh() {
    this.refreshRequired.next();
  }

  getAllTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(API_ENDPOINTS.task.getAllTasks);
  }

  createTask(taskObj: Tasks) {
    return this.http.post(API_ENDPOINTS.task.create, taskObj)
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.task.delete(id));
  }

}
