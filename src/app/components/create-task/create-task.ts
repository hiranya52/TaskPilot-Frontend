import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { TaskApiService } from '../../service/task-api-service';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-task.html',
  styleUrl: './create-task.css',
})
export class CreateTask {


  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: [''],
      description: [''],
      priority: [''],
      assignee: [''],
      dueDate: [''],
      status: ['todo']
    });
  }

 @Output() close = new EventEmitter<void>();
  @Output() taskCreated = new EventEmitter<void>();

  private taskService = inject(TaskApiService);

  onSubmit() {

    const form = this.taskForm.value;

    const task = {
      title: form.title,
      description: form.description,
      priority: (form.priority || '').toUpperCase(),
      assignee: form.assignee,
      dueDate: form.dueDate,
      status: (form.status || 'todo').toUpperCase()
    };

    this.taskService.createTask(task).subscribe({
      next: () => {

        this.taskCreated.emit(); // notify parent

        this.taskForm.reset({
          status: 'todo'
        });

        this.close.emit();
      },
      error: (err) => console.error(err)
    });
  }
}
