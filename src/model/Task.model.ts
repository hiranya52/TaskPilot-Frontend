export interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  assignee: string;
  dueDate: string;
  status: 'todo' | 'inprogress' | 'review' | 'done';
}
