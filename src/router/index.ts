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
      path: '/workout',
      name: 'workout',
      component: () => import('../views/WorkoutView.vue')
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: () => import('../views/ExerciseView.vue')
    },
    {
      path: '/sandbox',
      name: 'sandbox',
      props: { text: 'Hello' },
      component: () => import('../components/SetForm.vue')
    }
  ]
})

export default router
