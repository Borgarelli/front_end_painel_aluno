import { createRouter, createWebHistory } from "vue-router";
import StudentPanel from "../views/StudentPanel.vue";
import SelectUser from "../views/SelectUser.vue";
import SelectedSubject from "../views/SelectedSubject.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: SelectUser,
  },
  {
    path: "/studentPainel/:id",
    name: "studentpainel",
    component: StudentPanel,
  },
  {
    path: "/studentPainel/:id/:subject",
    name: "selectedsubject",
    component: SelectedSubject,
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
