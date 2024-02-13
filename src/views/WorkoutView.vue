<script setup lang="ts">
import { useJournalStore } from '@/stores/journal';
const store = useJournalStore();
</script>

<template>
  <div class="about">
    <div>
      <h1>{{ store.workouts[0].name }}</h1>
      <p>
        Target {{ store.workouts[0].setsPerExercise }} sets per
        exercise and {{ store.workouts[0].repsPerSet }} reps per set.
      </p>
      <h2>{{ store.workouts[0].exercises[0].name }}</h2>
      <div class="tags">
        <div v-for="tag in store.workouts[0].exercises[0].target" v-bind:key="tag" class="tag">{{ tag }}</div>
      </div>
    </div>
    <button class="primary-button">Start Exercise</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.tags {
  display: flex;
  gap: 4px;
}

.tag {
  background-color: rgb(206, 249, 235);
  padding: 0px 10px;
  border-radius: 12px;
}
</style>
