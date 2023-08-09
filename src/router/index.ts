import { createRouter, createWebHistory } from "vue-router";
import HighlightsView from "../views/HighlightsView.vue";
import SelectUser from "../views/SelectUser.vue";

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
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
