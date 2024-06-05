import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'

import { type Workout } from '../types'

const supabaseUrl = 'https://bdscgjhwmalvjlcikktt.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const workout1: Workout = {
  id: 1,
  name: 'Full Body 1',
  setsPerExercise: 3,
  repsPerSet: 15,
  exercises: [
    {
      id: 1,
      name: 'Impins cu gantere din inclinat',
      target: ['chest', 'triceps']
    },
    {
      id: 2,
      name: 'Flexia antebratului pe brat cu gantere',
      target: ['biceps']
    },
    {
      id: 3,
      name: 'Extensia tricepsului cu funia',
      target: ['triceps']
    },
    {
      id: 4,
      name: 'Impins cu gantere deasupra capului',
      target: ['shoulders']
    },
    {
      id: 5,
      name: 'Tractiuni la helcometru cu priza medie,neutra',
      target: ['back', 'biceps']
    },
    {
      id: 6,
      name: 'Flexia gambei pe coapsa',
      target: ['legs']
    },
    {
      id: 7,
      name: 'Extensia gambei pe coapsa',
      target: ['legs']
    }
  ]
}

const workout2: Workout = {
  id: 2,
  name: 'Full Body 2',
  setsPerExercise: 3,
  repsPerSet: 15,
  exercises: [
    {
      id: 1,
      name: 'Tractiuni la helcometru',
      target: ['back', 'biceps']
    },
    {
      id: 2,
      name: 'Impins la presa',
      target: ['chest', 'triceps']
    },
    {
      id: 3,
      name: 'Flexii la banca scott',
      target: ['biceps']
    },
    {
      id: 4,
      name: 'Extensia tricepsului deasupra capului',
      target: ['triceps']
    },
    {
      id: 5,
      name: 'Ridicari laterale cu ganterele',
      target: ['shoulders']
    },
    {
      id: 6,
      name: 'Ramat la aparat',
      target: ['back']
    },
    {
      id: 7,
      name: 'Ridicari pe varfuri',
      target: ['legs']
    },
    {
      id: 8,
      name: 'Fandari bulgaresti',
      target: ['legs']
    }
  ]
}

export const useJournalStore = defineStore('journal', () => {
  const workouts = reactive([workout1, workout2])
  const journal = reactive([
    {
      week: 1,
      days: [
        {
          day: 1,
          exercises: [
            {
              name: 'Squats',
              sets: [
                { set: 1, reps: 10, weight: 45 },
                { set: 2, reps: 10, weight: 45 },
                { set: 3, reps: 10, weight: 45 }
              ]
            }
          ]
        },
        {
          day: 2,
          exercises: [
            {
              name: 'Squats',
              sets: [
                { set: 1, reps: 10, weight: 45 },
                { set: 2, reps: 10, weight: 45 },
                { set: 3, reps: 10, weight: 45 }
              ]
            }
          ]
        }
      ]
    },
    {
      week: 2,
      days: [
        {
          day: 1,
          exercises: [
            {
              name: 'Squats',
              sets: [
                { set: 1, reps: 0, weight: 0 },
                { set: 2, reps: 0, weight: 0 },
                { set: 3, reps: 0, weight: 0 }
              ]
            }
          ]
        }
      ]
    }
  ])

  const lastWeekWorkout = computed(() => journal.at(-2))
  const thisWeekWorkout = computed(() => journal.at(-1))

  function updateExercise(data: {
    week: number
    day: number
    exercise: string
    set: number
    reps?: number
    weight?: number
  }) {
    const setObj = journal
      .find((j) => j.week === data.week)
      ?.days.find((d) => d.day === data.day)
      ?.exercises.find((e) => e.name === data.exercise)
      ?.sets.find((s) => s.set === data.set)

    if (data.reps) setObj!.reps = data.reps
    if (data.weight) setObj!.weight = data.weight
  }

  return { workouts, journal, updateExercise, lastWeekWorkout, thisWeekWorkout }
})
