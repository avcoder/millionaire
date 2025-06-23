import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Play from "@/views/Play.vue";
import Vote from "@/views/Vote.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/play", component: Play },
  { path: "/vote", component: Vote },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
