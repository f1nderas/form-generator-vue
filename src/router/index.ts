import Demo1Page from "@/pages/Demo1Page.vue";
import Demo2Page from "@/pages/Demo2Page.vue";
import HomePage from "@/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const isProduction = import.meta.env.MODE === "production";
const base = isProduction ? "/form-generator-vue" : "/";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/demo1", name: "Demo1", component: Demo1Page },
  { path: "/demo2", name: "Demo2", component: Demo2Page },
];

const router = createRouter({
  history: createWebHistory(base),
  routes,
});
export { router };
