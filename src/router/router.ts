import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Play from "@/views/Play.vue";
import Vote from "@/views/Vote.vue";
import Lost from "@/views/Lost.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/play", component: Play },
  { path: "/vote", component: Vote },
  { path: "/lost", component: Lost },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
