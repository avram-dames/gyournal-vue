<script setup lang="ts">
import NumberPicker from './NumberPicker.vue';

const emit = defineEmits(['weightChange', 'repsChange'])
defineProps<{
    set: number
    lastWeight: number
    lastReps: number
}>()

const handleWeightChange = (set: number, e: Event) => {
    const target = e.target as HTMLInputElement
    emit('weightChange', { set, value: target.value })
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
                <NumberPicker :default-value="0" units="Kg"></NumberPicker>
            </div>
            <div class="prev-value">{{ lastWeight }}</div>
        </div>
        <div class="divider"></div>
        <div class="set-form-row">
            <div class="set-form-inputs">
                <NumberPicker :default-value="0" units="Reps"></NumberPicker>
            </div>
            <div class="prev-value">{{ lastReps }}</div>
        </div>
    </div>
</template>

<style scoped>
.set-form {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1em;
}

.divider {
    border-left: 1px solid grey;
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
    align-items: center;
    column-gap: 1em;
    margin-bottom: 1em;
}

.prev-value {
    color: grey;
    opacity: 80%;
}
</style>
