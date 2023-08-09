import { createRouter, createWebHistory } from "vue-router";
import HighlightsView from "../views/HighlightsView.vue";
import AboutViewVue from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: AboutViewVue,
  },
  {
    path: "/highlights",
    name: "highlights",
    component: HighlightsView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
