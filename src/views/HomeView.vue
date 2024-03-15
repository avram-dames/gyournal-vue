<script setup lang="ts">
</script>

<template>
  <main>
    <div class="summary">
      <h2>Past Workouts</h2>
    </div>
    <br>
    <h2>Today's Workout</h2>
    <p>Today is workout time. Press the button below in order to start your "Full-body One" workout!</p>
    <br>
    <button class="primary-button">Start workout</button>
    <div class="saved-workouts">
      <div class="workout-card">
        <h3>Full Body 1</h3>
      </div>
    </div>
  </main>
</template>

<style scoped>
.summary {
  height: 200px;
  background-color: greenyellow;
  padding-top: 50px;
  text-align: center;
  color: green;
}

.saved-workouts {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.workout-card {
  width: 100%;
  background-color: greenyellow;
  color: green;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
