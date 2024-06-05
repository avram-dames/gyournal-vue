<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'

import { type Workout } from '@/types'
import { useJournalStore } from '@/stores/journal';

const route = useRoute()
const store = useJournalStore();

let workout: Workout = store.workouts.find((workout) => workout.id === Number(route.params.id)) as Workout;

watch(() => route.params.id, (newId, oldId) => {
  workout = store.workouts.find((workout) => workout.id === Number(newId)) as Workout;
})
</script>

<template>
  <div class="details">
      <h1>{{ workout.name }}</h1>
      <p>
        Target {{ workout.setsPerExercise }} sets per
        exercise and {{ workout.repsPerSet }} reps per set.
      </p>
      <div v-for="exercise in workout.exercises" :key="exercise.id" class="exercise-card">
        <h2>{{ exercise.name }}</h2>
        <div class="tags">
          <div v-for="tag in exercise.target" :key="tag" class="tag">{{ tag }}</div>
        </div>  
        <button class="primary-button">Start Exercise</button>
      </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .details {
    display: flex;
    align-items: center;
  }
}

.exercise-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.tags {
  display: flex;
  gap: 4px;
}

.tag {
  background-color: rgb(206, 249, 235);
  padding: 0px 10px;
  border-radius: 12px;
  color: var(--color-button);
}
</style>
