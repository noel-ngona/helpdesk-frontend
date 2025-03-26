import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import TicketsView from '@/views/TicketsView.vue'
import DashboadView from '@/views/DashboadView.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/',
      name: 'dashboard',
      component: DashboadView,
      meta : {
        layout: AdminLayout,
      }
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: TicketsView,
      meta : {
        layout: AdminLayout
      }
    }
  ],
})

export default router
