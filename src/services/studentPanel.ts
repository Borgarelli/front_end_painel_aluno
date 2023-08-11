import { StudentPanel } from "./member-interface";

const [studentPanel]: StudentPanel[] = [
  {
    codigoAluno: 2,
    name: "Paulo Freitas",
    terms: [
      {
        term_name: "1º Bimestre",
        courses: [
          {
            course_name: "Matemática",
            freq: 67,
            incidence: 25,
            notification: {
              key: 0,
              message: "Atenção, você está quase atingindo o limite de faltas",
            },
            tarefas: {
              average_tasks_per_class: 5,
              tasks_assigned: 9,
              tasks_completed: 1,
            },
            avaliacoes: {
              studentGrade: 5.628,
              averageClass: 2.588,
              maximumTestScore: 0,
              notification: {
                key: 1,
                message: "Eba, sua nota está dentro da média",
              },
            },
          },
          {
            course_name: "História",
            freq: 99,
            incidence: 5,
            notification: {
              key: 2,
              message:
                "Eba, sua presença em aulas está constante.\nContinue assim",
            },
            tarefas: {
              average_tasks_per_class: 8,
              tasks_assigned: 9,
              tasks_completed: 4,
            },
            avaliacoes: {
              studentGrade: 1,
              averageClass: 1,
              maximumTestScore: 0,
              notification: {
                key: 0,
                message: "Poxa, sua nota está abaixo da média",
              },
            },
          },
          {
            course_name: "Português",
            freq: 91,
            incidence: 7,
            notification: {
              key: 2,
              message:
                "Eba, sua presença em aulas está constante.\nContinue assim",
            },
            tarefas: {
              average_tasks_per_class: 8,
              tasks_assigned: 10,
              tasks_completed: 3,
            },
            avaliacoes: {
              studentGrade: 4.821,
              averageClass: 6.724,
              maximumTestScore: 0,
              notification: {
                key: 0,
                message: "Poxa, sua nota está abaixo da média",
              },
            },
          },
          {
            course_name: "Geografia",
            freq: 65,
            incidence: 25,
            notification: {
              key: 0,
              message: "Atenção, você está quase atingindo o limite de faltas",
            },
            tarefas: {
              average_tasks_per_class: 6,
              tasks_assigned: 8,
              tasks_completed: 3,
            },
            avaliacoes: {
              studentGrade: 2.41,
              averageClass: 1,
              maximumTestScore: 0,
              notification: {
                key: 0,
                message: "Poxa, sua nota está abaixo da média",
              },
            },
          },
        ],
      },
      {
        term_name: "2º Bimestre",
        courses: [
          {
            course_name: "Matemática",
            freq: 88,
            incidence: 9,
            notification: {
              key: 2,
              message:
                "Eba, sua presença em aulas está constante.\nContinue assim",
            },
            tarefas: {
              average_tasks_per_class: 6,
              tasks_assigned: 6,
              tasks_completed: 5,
            },
            avaliacoes: {
              studentGrade: 3.457,
              averageClass: 7.69,
              maximumTestScore: 0,
              notification: {
                key: 0,
                message: "Poxa, sua nota está abaixo da média",
              },
            },
          },
          {
            course_name: "História",
            freq: 73,
            incidence: 10,
            notification: {
              key: 0,
              message: "Atenção, você está quase atingindo o limite de faltas",
            },
            tarefas: {
              average_tasks_per_class: 5,
              tasks_assigned: 10,
              tasks_completed: 0,
            },
            avaliacoes: {
              studentGrade: 1,
              averageClass: 7.617,
              maximumTestScore: 0,
              notification: {
                key: 0,
                message: "Poxa, sua nota está abaixo da média",
              },
            },
          },
          {
            course_name: "Português",
            freq: 67,
            incidence: 25,
            notification: {
              key: 0,
              message: "Atenção, você está quase atingindo o limite de faltas",
            },
            tarefas: {
              average_tasks_per_class: 6,
              tasks_assigned: 7,
              tasks_completed: 4,
            },
            avaliacoes: {
              studentGrade: 5.792,
              averageClass: 4.359,
              maximumTestScore: 0,
              notification: {
                key: 1,
                message: "Eba, sua nota está dentro da média",
              },
            },
          },
          {
            course_name: "Geografia",
            freq: 63,
            incidence: 25,
            notification: {
              key: 0,
              message: "Atenção, você está quase atingindo o limite de faltas",
            },
            tarefas: {
              average_tasks_per_class: 5,
              tasks_assigned: 9,
              tasks_completed: 1,
            },
            avaliacoes: {
              studentGrade: 4.811,
              averageClass: 6.386,
              maximumTestScore: 0,
              notification: {
                key: 0,
                message: "Poxa, sua nota está abaixo da média",
              },
            },
          },
        ],
      },
      {
        term_name: "3º Bimestre",
        courses: [
          {
            course_name: "Matemática",
            freq: 86,
            incidence: 8,
            notification: {
              key: 2,
              message:
                "Eba, sua presença em aulas está constante.\nContinue assim",
            },
            tarefas: {
              average_tasks_per_class: 8,
              tasks_assigned: 9,
              tasks_completed: 4,
            },
            avaliacoes: {
              studentGrade: 4.81,
              averageClass: 6.512,
              maximumTestScore: 0,
              notification: {
                key: 0,
                message: "Poxa, sua nota está abaixo da média",
              },
            },
          },
          {
            course_name: "História",
            freq: 78,
            incidence: 10,
            notification: {
              key: 2,
              message:
                "Eba, sua presença em aulas está constante.\nContinue assim",
            },
            tarefas: {
              average_tasks_per_class: 8,
              tasks_assigned: 9,
              tasks_completed: 4,
            },
            avaliacoes: {
              studentGrade: 9.158,
              averageClass: 6.193,
              maximumTestScore: 0,
              notification: {
                key: 2,
                message: "Eba, sua nota está dentro da média",
              },
            },
          },
          {
            course_name: "Português",
            freq: 92,
            incidence: 8,
            notification: {
              key: 2,
              message:
                "Eba, sua presença em aulas está constante.\nContinue assim",
            },
            tarefas: {
              average_tasks_per_class: 6,
              tasks_assigned: 6,
              tasks_completed: 5,
            },
            avaliacoes: {
              studentGrade: 7.294,
              averageClass: 1,
              maximumTestScore: 0,
              notification: {
                key: 1,
                message: "Eba, sua nota está dentro da média",
              },
            },
          },
          {
            course_name: "Geografia",
            freq: 62,
            incidence: 25,
            notification: {
              key: 0,
              message: "Atenção, você está quase atingindo o limite de faltas",
            },
            tarefas: {
              average_tasks_per_class: 5,
              tasks_assigned: 9,
              tasks_completed: 1,
            },
            avaliacoes: {
              studentGrade: 1,
              averageClass: 4.503,
              maximumTestScore: 0,
              notification: {
                key: 0,
                message: "Poxa, sua nota está abaixo da média",
              },
            },
          },
        ],
      },
      {
        term_name: "4º Bimestre",
        courses: [
          {
            course_name: "Matemática",
            freq: 77,
            incidence: 18,
            notification: {
              key: 2,
              message:
                "Eba, sua presença em aulas está constante.\nContinue assim",
            },
            tarefas: {
              average_tasks_per_class: 6,
              tasks_assigned: 10,
              tasks_completed: 1,
            },
            avaliacoes: {
              studentGrade: 5.672,
              averageClass: 4.844,
              maximumTestScore: 0,
              notification: {
                key: 1,
                message: "Eba, sua nota está dentro da média",
              },
            },
          },
          {
            course_name: "História",
            freq: 78,
            incidence: 18,
            notification: {
              key: 2,
              message:
                "Eba, sua presença em aulas está constante.\nContinue assim",
            },
            tarefas: {
              average_tasks_per_class: 9,
              tasks_assigned: 8,
              tasks_completed: 6,
            },
            avaliacoes: {
              studentGrade: 5.3,
              averageClass: 4.294,
              maximumTestScore: 0,
              notification: {
                key: 1,
                message: "Eba, sua nota está dentro da média",
              },
            },
          },
          {
            course_name: "Português",
            freq: 60,
            incidence: 25,
            notification: {
              key: 0,
              message: "Atenção, você está quase atingindo o limite de faltas",
            },
            tarefas: {
              average_tasks_per_class: 9,
              tasks_assigned: 6,
              tasks_completed: 8,
            },
            avaliacoes: {
              studentGrade: 7.476,
              averageClass: 2.393,
              maximumTestScore: 0,
              notification: {
                key: 1,
                message: "Eba, sua nota está dentro da média",
              },
            },
          },
          {
            course_name: "Geografia",
            freq: 94,
            incidence: 7,
            notification: {
              key: 2,
              message:
                "Eba, sua presença em aulas está constante.\nContinue assim",
            },
            tarefas: {
              average_tasks_per_class: 9,
              tasks_assigned: 10,
              tasks_completed: 4,
            },
            avaliacoes: {
              studentGrade: 5.74,
              averageClass: 9.914,
              maximumTestScore: 0,
              notification: {
                key: 1,
                message: "Eba, sua nota está dentro da média",
              },
            },
          },
        ],
      },
    ],
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

export const getStatusPerSubject = () => {
  return studentPanel.terms.map((term) => {
    const subjectPerTerm: any = {};
    subjectPerTerm[term.term_name] = term.courses.map((course) => {
      const statusPerSubject: any = {};
      statusPerSubject[course.course_name] = {
        attendance: {
          freq: course.freq,
          incidence: course.incidence,
          notification: course.notification,
        },
        grade: course.avaliacoes,
        registers: course.tarefas,
      };
      return statusPerSubject;
    });
    return subjectPerTerm;
  });
};
