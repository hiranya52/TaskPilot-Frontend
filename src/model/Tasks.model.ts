export interface Tasks {
  title: string;
  description: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  assignee: string;
  dueDate: string;
  status: 'TODO' | 'IN_PROGRESS' | 'REVIEW' | 'DONE';
}
