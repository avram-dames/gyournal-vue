<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
    </div>
</template>

<style scoped>
h1 {
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    max-width: 14rem;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {

    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
