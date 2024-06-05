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
      path: '/workouts/:id',
      name: 'workout',
      component: () => import('../views/WorkoutView.vue')
    },
    {
      path: '/exercises/:id',
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
