export interface Board {
  id?: string;
  title?: string;
  priority?: number;
  task?: Task[]
}

export interface Task{
  description?: string;
  label?: 'purple' | 'red' |  'blue' | 'green' | 'yellow'
}
