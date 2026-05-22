import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCard } from "../task-card/task-card";
import { Tasks } from '../../../model/Tasks.model';

@Component({
  selector: 'app-kanban-column',
  standalone: true,
  imports: [CommonModule, TaskCard],
  templateUrl: './kanban-column.html',
  styleUrl: './kanban-column.css',
})
export class KanbanColumn {

  @Input() title!: string;
  @Input() tasks: Tasks[] = [];
}
