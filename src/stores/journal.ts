import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bdscgjhwmalvjlcikktt.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export const useJournalStore = defineStore('journal', () => {
  const workouts = reactive([
    {
      name: 'Full body - Monday',
      setsPerExercise: 3,
      repsPerSet: 15,
      exercises: [
        {
          name: 'Impins la piept din inclinat cu gantere',
          target: ['chest', 'triceps']
        },
        {
          name: 'Ridicari la biceps din sezut inclinat',
          target: ['biceps']
        }
      ]
    },
    {
      name: 'Full body - Thursday',
      setsPerExercise: 3,
      repsPerSet: 15,
      exercises: [
        {
          name: 'Tractiuni la helcometru',
          target: ['back', 'biceps']
        },
        {
          name: 'Bulgarian Squats',
          target: ['legs']
        }
      ]
    }
  ])
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
