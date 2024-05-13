import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import StudentView from "@/views/StudentView.vue";
import StudentDetailView from "@/views/StudentDetailView.vue";
import StudentObsoleteView from "@/views/StudentObsoleteView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - PT. Sinergi Global Service`;
  next();
});

export default router;
