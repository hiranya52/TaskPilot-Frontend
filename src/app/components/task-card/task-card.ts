import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskApiService } from '../../service/task-api-service';

@Component({
  selector: 'app-task-card',
  imports: [CommonModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {

  @Input() task: any;


  private taskService = inject(TaskApiService)

  onDelete(title: string) {
  this.taskService.deleteTask(title).subscribe(() => {
    console.log('Deleted:', title);
    alert('Task deleted successfully ✅');
  });
}

}
