import { Component } from '@angular/core';
import { NavBar } from "../nav-bar/nav-bar";
import { FilterBar } from "../filter-bar/filter-bar";
import { KanbanColumn } from "../kanban-column/kanban-column";

@Component({
  selector: 'app-board',
  imports: [NavBar, FilterBar, KanbanColumn],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board {}
