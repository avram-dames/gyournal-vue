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
    if (value.value < 1000) {
        value.value = value.value + getIncrement(props.units)
        emit('updateValue', value.value)
    }
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
            <input type="number" pattern="[0-9]*" class="value" :value="value" @input="handleInput" />
            <div class="units">{{ units }}</div>
        </div>
        <button class="increment" @click="handleIncrement">+</button>
    </div>
</template>

<style>
.numberPicker {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    background: rgb(241, 248, 241);
    border-radius: 12px;
    flex-grow: 1;
}

.valueNumber {
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
}

.decrement,
.increment {
    font-size: 32px;
    font-weight: bold;
    color: var(--color-text);
    border: none;
    background: rgb(225, 234, 225);
    cursor: pointer;
    flex-grow: 1;
    height: 100%;
}

.increment {
    border-radius: 0 12px 12px 0;
}

.decrement {
    border-radius: 12px 0 0 12px;
}

.value {
    font-size: 32px;
    color: var(--color-text);
    border: none;
    cursor: pointer;
    background-color: transparent;
    width: 5ch;
}

.units {
    font-size: 16px;
    align-self: flex-end;
    padding-bottom: 5px;
    opacity: 0.7;
    width: 5ch;
}
</style>