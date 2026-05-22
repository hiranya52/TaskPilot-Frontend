import { Component, Input } from '@angular/core';
import { Task } from '../../../model/Task.model';

@Component({
  selector: 'app-kanban-column',
  imports: [],
  templateUrl: './kanban-column.html',
  styleUrl: './kanban-column.css',
})
export class KanbanColumn {

  @Input() title!: string;
  @Input() tasks: Task[] = [];

}
