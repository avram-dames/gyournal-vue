<script setup lang="ts">
defineProps<{
    title: string
    subtitle: string
}>()
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
    </div>
</template>

<style scoped>
h1 {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.1;
    max-width: 14rem;
}

h2 {
    font-size: 1.5rem;
    margin-top: 15px;
}

.greetings h1,
.greetings h3 {}

@media (min-width: 1024px) {

    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
