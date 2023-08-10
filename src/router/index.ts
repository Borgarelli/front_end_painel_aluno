import { createRouter, createWebHistory } from "vue-router";
import HighlightsView from "../views/HighlightsView.vue";
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
    name: "highlights",
    component: HighlightsView,
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
