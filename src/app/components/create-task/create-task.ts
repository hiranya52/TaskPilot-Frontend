import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-task',
  imports: [CommonModule],
  templateUrl: './create-task.html',
  styleUrl: './create-task.css',
})
export class CreateTask {

   @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

}
