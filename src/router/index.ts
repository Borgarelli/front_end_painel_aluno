import { createRouter, createWebHistory } from "vue-router";
import HighlightsView from "../views/HighlightsView.vue";
import AboutViewVue from "../views/AboutView.vue";
import DestaquesView from "../views/DestaquesView.vue"

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
  {
    path: "/destaques",
    name: "destaques",
    component: DestaquesView
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
