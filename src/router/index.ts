import { createRouter, createWebHistory } from "vue-router";
import StudentPanel from "../views/StudentPanel.vue";
import SelectUser from "../views/SelectUser.vue";
import TelaTesteView from "../views/TelaTesteView.vue";

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
    path: "/teste",
    name: "testes",
    component: TelaTesteView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
