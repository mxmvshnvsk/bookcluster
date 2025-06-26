import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('./modules/dashboard/DashboardPage.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
