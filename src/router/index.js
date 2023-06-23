import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
  //   {
  //     path: "/home",
  //     redirect: {name: "home"},
  // },
    {
      path: "/",
      name: "home",
      component: HomeView,
      alias:[ "/home"],
    },
    {
      path: "/session",
      component: () => import('../views/SessionView.vue'),
      children: [
        {
          path: "",
          components: {
            default: () => import("../views/LoginView.vue"),
            register: () => import("../views/RegisterView.vue"),
          }
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/chats",
      component: () => import("../views/Chats.vue"),
      children: [
        {
          path: ":chatId",
          component: () => import("../views/ChatView.vue"),
          // TODO: toma los params de la ruta y los pasa por los props
          props: true,
        },
      ],
    },
  ],
});

export default router;
