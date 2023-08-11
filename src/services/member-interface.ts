export interface Tarefa {
  average_tasks_per_class: number;
  tasks_assigned: number;
  tasks_completed: number;
}

export interface Avaliacoes {
  studentGrade: number;
  averageClass: number;
  maximumTestScore: number;
}

export interface Course {
  course_name: string;
  freq: number;
  incidence: number;
  tarefas: Tarefa;
  avaliacoes: Avaliacoes;
  notification: Notification;
}

export interface Notification {
  key: number;
  message: string;
}

export interface Term {
  term_name: string;
  courses: Course[];
}

export interface StudentPanel {
  codigoAluno: number;
  name: string;
  terms: Term[];
  statement: any; // ou defina o tipo apropriado para 'statement'
}
