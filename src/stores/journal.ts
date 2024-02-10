import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useJournalStore = defineStore('journal', () => {
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

  return { journal, updateExercise, lastWeekWorkout, thisWeekWorkout }
})
