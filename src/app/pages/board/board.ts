import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Navbar } from '../../components/navbar/navbar';
import { FilterBar } from '../../components/filter-bar/filter-bar';
import { KanbanColumn } from '../../components/kanban-column/kanban-column';

import { TaskApiService } from '../../service/task-api-service';
import { Tasks } from '../../../model/Tasks.model';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    FilterBar,
    KanbanColumn
  ],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board implements OnInit {

  tasks: Tasks[] = [];

  constructor(private taskService: TaskApiService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {

    console.log('Loading tasks...');

    this.taskService.getAllTasks().subscribe({
      next: (data) => {
        console.log('Tasks received:', data);
        this.tasks = data;
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

  get todo() {
    return this.tasks.filter(t => t.status === 'TODO');
  }

  get inprogress() {
    return this.tasks.filter(t => t.status === 'IN_PROGRESS');
  }

  get review() {
    return this.tasks.filter(t => t.status === 'REVIEW');
  }

  get done() {
    return this.tasks.filter(t => t.status === 'DONE');
  }
}
