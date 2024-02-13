<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
    <header>
        <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
        <div class="wrapper">
            <Header title="Week 2 | Day 1" subtitle="Squats" />
        </div>
    </header>

    <RouterView />
    <div class="bottom-margin"></div>

    <footer>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">Workout</RouterLink>
            <RouterLink to="/exercise">Exercise</RouterLink>
        </nav>
    </footer>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.bottom-margin {
    height: 50px;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: white;
    padding: 10px;
}

nav {
    display: flex;
    margin: auto;
    font-size: 1rem;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    border-radius: 12px;
    background-color: rgb(241, 248, 241);
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {}


nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
