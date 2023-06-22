import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/about",
      component: import("../views/AboutView.vue"),
    },
    { path: "/chats", component: import("../views/Chats.vue") },
    { path: "/chats/:chatId", component: import("../views/Chats.vue") },
  ],
});

export default router;
