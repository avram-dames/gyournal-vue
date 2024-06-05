<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'

import { type Exercise } from '@/types'
import { useJournalStore } from '@/stores/journal';

import SetForm from '../components/SetForm.vue'

const route = useRoute()
const store = useJournalStore();

let exercise: Exercise = store.exercises.find((exercise) => exercise.id === Number(route.params.id)) as Exercise;


watch(() => route.params.id, (newId, oldId) => {
  exercise = store.exercises.find((exercise) => exercise.id === Number(newId)) as Exercise;
})

const lastWeekSets = store
    .lastWeekWorkout
    ?.days.find(day => day.day === 1)
    ?.exercises.find(exercise => exercise.name === "Squats")
    ?.sets || [];

const thisWeekSets = store
    .thisWeekWorkout
    ?.days.find(day => day.day === 1)
    ?.exercises.find(exercise => exercise.name === "Squats")
    ?.sets || [];

const handleWeightChange = (payload: { set: number, value: number }) => {
    store.updateExercise({
        week: 2,
        day: 1,
        exercise: "Squats",
        set: payload.set,
        weight: Number(payload.value),
    });
};

const handleRepsChange = (payload: { set: number, value: number }) => {
    store.updateExercise({
        week: 2,
        day: 1,
        exercise: "Squats",
        set: payload.set,
        reps: Number(payload.value),
    });
};
</script>

<template>
    <h2>{{ exercise.name }}</h2>
    <div class="exercise-view">
        <div class="set-view">
            <SetForm v-for="set in thisWeekSets" v-bind:key="set.set" :set="set.set" :last-weight="lastWeekSets[0].weight"
                :last-reps="lastWeekSets[0].reps" @reps-change="handleRepsChange" @weight-change="handleWeightChange" />
        </div>
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

.set-view {
    display: flex;
    flex-direction: column;
    margin-top: 1.5em;
    gap: 1em;
}
</style>
