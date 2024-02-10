<script setup lang="ts">
import SetForm from '../components/SetForm.vue'
import { useJournalStore } from '@/stores/journal';

const store = useJournalStore();

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
    <div class="exercise-view">
        <h2>Week 2 | Day 1</h2>
        <h3>Squats</h3>
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

.set-form {
    display: flex;
    flex-direction: row;
    margin-top: 1em;
}

.set-view {
    display: flex;
    flex-direction: column;
    margin-top: 1em;
}

.set-form-inputs {
    display: flex;
    flex-direction: row;
    column-gap: 1em;
    margin-right: 1em;

    &>input {
        width: 100px;
        font-variant-numeric: tabular-nums;
    }
}

.set-form-row {
    display: flex;
    flex-direction: column;
    column-gap: 1em;
    margin-bottom: 1em;
}

.prev-value {
    color: grey;
    opacity: 80%;
}
</style>
