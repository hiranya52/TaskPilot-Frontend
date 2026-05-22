import { Component, Input } from '@angular/core';
import { FilterBar } from "../../components/filter-bar/filter-bar";
import { KanbanColumn } from "../../components/kanban-column/kanban-column";
import { Navbar } from "../../components/navbar/navbar";
import { Task } from '../../../model/Task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [FilterBar, KanbanColumn, Navbar, CommonModule],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board {

  tasks: Task[] = [
    {
      id: 1,
      title: 'Setup Project',
      description: 'Initialize Angular app',
      priority: 'High',
      assignee: 'Alex',
      dueDate: '2026-06-01',
      status: 'todo'
    },
    {
      id: 2,
      title: 'API Design',
      description: 'Design REST APIs',
      priority: 'Medium',
      assignee: 'Sam',
      dueDate: '2026-06-05',
      status: 'inprogress'
    }
  ];

  get todo() {
    return this.tasks.filter(t => t.status === 'todo');
  }

  get inprogress() {
    return this.tasks.filter(t => t.status === 'inprogress');
  }

  get review() {
    return this.tasks.filter(t => t.status === 'review');
  }

  get done() {
    return this.tasks.filter(t => t.status === 'done');
  }
}
