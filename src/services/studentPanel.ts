import { StudentPanel } from "./member-interface";

const [studentPanel]: StudentPanel[] = [
  {
    codigoAluno: 3,
    name: "Juliana Bueno Silva",
    terms: [
      {
        term_name: "1º Bimestre",
        courses: [
          {
            course_name: "Matemática",
            freq: 77,
            incidence: 13,
            tarefas: {
              average_tasks_per_class: 9,
              tasks_assigned: 10,
              tasks_completed: 4,
            },
            avaliacoes: {
              studentGrade: 7.119,
              averageClass: 6.675,
              maximumTestScore: 0,
            },
          },
          {
            course_name: "História",
            freq: 70,
            incidence: 15,
            tarefas: {
              average_tasks_per_class: 9,
              tasks_assigned: 6,
              tasks_completed: 8,
            },
            avaliacoes: {
              studentGrade: 5.855,
              averageClass: 6.333,
              maximumTestScore: 0,
            },
          },
          {
            course_name: "Português",
            freq: 87,
            incidence: 7,
            tarefas: {
              average_tasks_per_class: 5,
              tasks_assigned: 10,
              tasks_completed: 0,
            },
            avaliacoes: {
              studentGrade: 8.232,
              averageClass: 9.803,
              maximumTestScore: 0,
            },
          },
          {
            course_name: "Geografia",
            freq: 97,
            incidence: 9,
            tarefas: {
              average_tasks_per_class: 6,
              tasks_assigned: 10,
              tasks_completed: 1,
            },
            avaliacoes: {
              studentGrade: 7.254,
              averageClass: 9.006,
              maximumTestScore: 0,
            },
          },
        ],
      },
      {
        term_name: "2º Bimestre",
        courses: [
          {
            course_name: "Matemática",
            freq: 83,
            incidence: 6,
            tarefas: {
              average_tasks_per_class: 7,
              tasks_assigned: 8,
              tasks_completed: 4,
            },
            avaliacoes: {
              studentGrade: 9.131,
              averageClass: 7.995,
              maximumTestScore: 0,
            },
          },
          {
            course_name: "História",
            freq: 72,
            incidence: 10,
            tarefas: {
              average_tasks_per_class: 9,
              tasks_assigned: 6,
              tasks_completed: 8,
            },
            avaliacoes: {
              studentGrade: 4.155,
              averageClass: 6.311,
              maximumTestScore: 0,
            },
          },
          {
            course_name: "Português",
            freq: 68,
            incidence: 25,
            tarefas: {
              average_tasks_per_class: 6,
              tasks_assigned: 9,
              tasks_completed: 2,
            },
            avaliacoes: {
              studentGrade: 9.293,
              averageClass: 1,
              maximumTestScore: 0,
            },
          },
          {
            course_name: "Geografia",
            freq: 91,
            incidence: 9,
            tarefas: {
              average_tasks_per_class: 7,
              tasks_assigned: 9,
              tasks_completed: 3,
            },
            avaliacoes: {
              studentGrade: 2.309,
              averageClass: 7.838,
              maximumTestScore: 0,
            },
          },
        ],
      },
      {
        term_name: "3º Bimestre",
        courses: [
          {
            course_name: "Matemática",
            freq: 97,
            incidence: 6,
            tarefas: {
              average_tasks_per_class: 7,
              tasks_assigned: 6,
              tasks_completed: 6,
            },
            avaliacoes: {
              studentGrade: 1,
              averageClass: 7.089,
              maximumTestScore: 0,
            },
          },
          {
            course_name: "História",
            freq: 97,
            incidence: 8,
            tarefas: {
              average_tasks_per_class: 7,
              tasks_assigned: 9,
              tasks_completed: 3,
            },
            avaliacoes: {
              studentGrade: 9.113,
              averageClass: 1,
              maximumTestScore: 0,
            },
          },
          {
            course_name: "Português",
            freq: 70,
            incidence: 16,
            tarefas: {
              average_tasks_per_class: 7,
              tasks_assigned: 6,
              tasks_completed: 6,
            },
            avaliacoes: {
              studentGrade: 7.285,
              averageClass: 5.968,
              maximumTestScore: 0,
            },
          },
          {
            course_name: "Geografia",
            freq: 95,
            incidence: 7,
            tarefas: {
              average_tasks_per_class: 8,
              tasks_assigned: 8,
              tasks_completed: 5,
            },
            avaliacoes: {
              studentGrade: 9.164,
              averageClass: 5.962,
              maximumTestScore: 0,
            },
          },
        ],
      },
      {
        term_name: "4º Bimestre",
        courses: [
          {
            course_name: "Matemática",
            freq: 63,
            incidence: 25,
            tarefas: {
              average_tasks_per_class: 9,
              tasks_assigned: 10,
              tasks_completed: 4,
            },
            avaliacoes: {
              studentGrade: 4.377,
              averageClass: 2.825,
              maximumTestScore: 0,
            },
          },
          {
            course_name: "História",
            freq: 86,
            incidence: 5,
            tarefas: {
              average_tasks_per_class: 6,
              tasks_assigned: 7,
              tasks_completed: 4,
            },
            avaliacoes: {
              studentGrade: 9.256,
              averageClass: 7.632,
              maximumTestScore: 0,
            },
          },
          {
            course_name: "Português",
            freq: 95,
            incidence: 5,
            tarefas: {
              average_tasks_per_class: 7,
              tasks_assigned: 6,
              tasks_completed: 6,
            },
            avaliacoes: {
              studentGrade: 5.643,
              averageClass: 1,
              maximumTestScore: 0,
            },
          },
          {
            course_name: "Geografia",
            freq: 82,
            incidence: 8,
            tarefas: {
              average_tasks_per_class: 5,
              tasks_assigned: 7,
              tasks_completed: 3,
            },
            avaliacoes: {
              studentGrade: 7.447,
              averageClass: 5.514,
              maximumTestScore: 0,
            },
          },
        ],
      },
    ],
    statement: null,
  },
];

export const getTerms = () => {
  return studentPanel.terms.map((term) => {
    const obj: any = {};
    obj[term.term_name] = term.courses;
    return obj;
  });
};

export const getTermsName = () => {
  return studentPanel.terms.map((term) => term.term_name);
};
