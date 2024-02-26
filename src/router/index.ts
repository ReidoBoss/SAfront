import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/AdminTest",
    name: "AdminTest",
    component: () => import("../pages/AdminTest.vue"),
  },

  {
    path: "/test",
    name: "test",
    component: () => import("../pages/RealTime.vue"),
  },
  {
    path: "/post",
    name: "post",
    component: () => import("../pages/Post.vue"),
  },
  {
    path: "/operator",
    name: "operator",
    component: () => import("../pages/Operator.vue"),
  },
  {
    path: "/responder",
    name: "responder",
    component: () => import("../pages/Responder.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login.vue"),
  },


 

];

const router = createRouter({
  history: createWebHistory("./"),
  routes,
});

export default router;
