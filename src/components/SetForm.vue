<script setup lang="ts">
const emit = defineEmits(['wheightChange', 'repsChange'])
defineProps<{
    set: number
    lastWeight: number
    lastReps: number
}>()

const handleWeightChange = (set: number, e: Event) => {
    const target = e.target as HTMLInputElement
    emit('wheightChange', { set, value: target.value })
}

const handleRepsChange = (set: number, e: Event) => {
    const target = e.target as HTMLInputElement
    emit('repsChange', { set, value: target.value })
}
</script>

<template>
    <h4>Set {{ set }}</h4>
    <div class="set-form">
        <div class="set-form-row">
            <div class="set-form-inputs">
                <input type="number" id="weight-input" aria-label="weight" @input="handleWeightChange(set, $event)" />
                <label for="weight-input">Kg</label>
            </div>
            <div class="prev-value">{{ lastWeight }}</div>
        </div>

        <div class="set-form-row">
            <div class="set-form-inputs">
                <input type="number" id="reps-input" aria-label="reps" @input="handleRepsChange(set, $event)" />
                <label for="reps-input">Reps</label>
            </div>
            <div class="prev-value">{{ lastReps }}</div>
        </div>
    </div>
</template>

<style scoped>
</style>
