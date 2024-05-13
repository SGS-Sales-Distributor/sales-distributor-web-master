import { createRouter, createWebHistory } from 'vue-router';
import { isAuthenticated } from '../services/auth';

const routes = [
    {
      path: '/',
      redirect: '/login',
      meta: {
          title: 'Login',
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/auth/LoginView.vue"),
      meta: {
        title: 'Login',
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import("../views/DashboardView.vue"),
      meta: {
          requiresAuth: true,
          title: 'Dashboard',
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import("../views/ProfileView.vue"),
      meta: {
        requiresAuth: true,
        title: 'Profile',
      },
    },
    {
      path: '/program',
      name: 'program',
      component: () => import("../views/ProgramView.vue"),
      meta: {
        requiresAuth: true,
        title: 'Program',
      },
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
  
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated()) {
      next({ name: 'login' });
    } else {
      next();
    }
});

export default router;