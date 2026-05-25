import { Component } from '@angular/core';
import { CreateTask } from "../create-task/create-task";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-bar',
  imports: [CreateTask,CommonModule],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css',
})
export class FilterBar {

  showEdit = false;

  openEdit() {
    this.showEdit = true;
  }

  closeEdit() {
    this.showEdit = false;
  }

}
