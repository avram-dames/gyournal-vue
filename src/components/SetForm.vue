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
    <div class="set-title">
        <div class="divider"></div>
        <h3>Set {{ set }}</h3>
    </div>
    <div class="set-form">
        <div class="set-form-row">
            <div class="set-form-inputs">
                <NumberPicker :default-value="0" units="Kg"></NumberPicker>
            </div>
            <div class="prev-value">Last time you used {{ lastWeight }} Kg</div>
        </div>
        <div class="set-form-row">
            <div class="set-form-inputs">
                <NumberPicker :default-value="0" units="Reps"></NumberPicker>
            </div>
            <div class="prev-value">Last time you did {{ lastReps }} reps</div>
        </div>
    </div>
</template>

<style scoped>
.set-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
}

.divider {
    border-top: 0.5px solid grey;
    height: 10px;
    width: 100%;
}

.set-form-inputs {
    display: flex;
    flex-direction: row;
    column-gap: 1em;
    margin-right: 1em;
    width: 100%;

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
    padding-top: 5px;
    font-size: 12px;
}
</style>
