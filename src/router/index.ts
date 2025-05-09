import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../WelcomePage.vue";
import Screen_login from "@/Screen_login.vue";

const routes = [
  {
    path: "/",
    name: "Screen_login",
    component: Screen_login,
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
