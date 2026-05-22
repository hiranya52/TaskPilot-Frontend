import { Component, Input } from '@angular/core';
import { Task } from '../../../model/Task.model';
import { CommonModule } from '@angular/common';
import { TaskCard } from "../task-card/task-card";

@Component({
  selector: 'app-kanban-column',
  imports: [CommonModule, TaskCard],
  templateUrl: './kanban-column.html',
  styleUrl: './kanban-column.css',
})
export class KanbanColumn {

  @Input() title!: string;
  @Input() tasks: Task[] = [];

}
