<script setup lang="ts">
import { defineProps, ref } from 'vue'

const emit = defineEmits(['updateValue'])

const props = defineProps({
    defaultValue: {
        type: Number,
        required: false,
        default: 0
    },
    units: {
        type: String,
        required: false,
        default: 'Kg',
        validator: (value: string) => {
            return ['Kg', 'Reps', 'Body Weight'].includes(value)
        }
    }
})

const getIncrement = (unitType: string): number => {
    switch (unitType) {
        case 'Kg':
            return 0.5
        case 'Reps':
            return 1
        default:
            return 0
    }
}

const value = ref(props.defaultValue)

const handleIncrement = () => {
    value.value = value.value + getIncrement(props.units)
    emit('updateValue', value.value)
}

const handleDecrement = () => {
    if (value.value > 0) {
        value.value = value.value - getIncrement(props.units)
        emit('updateValue', value.value)
    }
}

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target.value) value.value = parseFloat(target.value)
    emit('updateValue', value.value)
}

</script>

<template>
    <div v-if="units === 'Body Weight'" class="value">{{ units }}</div>
    <div v-else class="numberPicker">
        <button class="decrement" @click="handleDecrement">-</button>
        <div class="valueNumber">
            <input class="value" :value="value" @input="handleInput" />
            <div class="units">{{ units }}</div>
        </div>
        <button class="increment" @click="handleIncrement">+</button>
    </div>
</template>

<style>
.numberPicker {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1.5em;
}

.valueNumber {
    display: flex;
    justify-content: space-between;
    width: 100px;
}

.decrement,
.increment {
    font-size: 32px;
    font-weight: bold;
    color: var(--color-text);
    border: none;
    cursor: pointer;
    background-color: transparent;
    margin: 0 10px 0 10px
}

.decrement {
    padding-bottom: 7px;
}

.value {
    font-size: 32px;
    color: var(--color-text);
    border: none;
    cursor: pointer;
    background-color: transparent;
    margin: 0 10px 0 10px;
    width: 60px;
}

.units {
    font-size: 16px;
    align-self: flex-end;
    padding-bottom: 5px;
    opacity: 0.7;
}
</style>