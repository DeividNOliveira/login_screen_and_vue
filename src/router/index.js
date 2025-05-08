import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import WelcomePage from "../WelcomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: App,
  },

  {
    path: "/WelcomePage",
    name: "WelcomePage",
    component: WelcomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
