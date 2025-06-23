import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('./modules/promo/PromoPage.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./modules/dashboard/DashboardPage.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
