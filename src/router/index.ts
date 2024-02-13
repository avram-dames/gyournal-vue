import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: () => import('../views/ExerciseView.vue')
    },
    {
      path: '/sandbox',
      name: 'sandbox',
      props: { set: 1, lastWeight: 42.5, lastReps: 15 },
      component: () => import('../components/SetForm.vue')
    }
  ]
})

export default router
