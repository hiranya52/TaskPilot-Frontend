import { Component, Input } from '@angular/core';
import { Task } from '../../../model/Task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-card',
  imports: [CommonModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {

  // Use a flexible type to avoid template type-check mismatch across compilation contexts
  @Input() task: any;

}
