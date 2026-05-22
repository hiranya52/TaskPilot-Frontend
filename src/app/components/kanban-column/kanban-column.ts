import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCard } from "../task-card/task-card";
import { Task } from '../../service/task';

@Component({
  selector: 'app-kanban-column',
  imports: [CommonModule, TaskCard],
  templateUrl: './kanban-column.html',
  styleUrl: './kanban-column.css',
})
export class KanbanColumn implements OnInit {

  @Input() title!: string;
  @Input() tasks: Task[] = [];

  private taskService = inject(Task);

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }
}
