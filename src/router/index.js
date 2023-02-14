import { createRouter, createWebHistory } from 'vue-router'
import UserTable from '../components/UserTable.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: UserTable,
      props: true
    }
  ]
})

export default router
