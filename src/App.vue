<script setup lang="ts"></script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/play">Play</router-link>
      <router-link to="/vote">Vote</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  color: #ffffff;
}

nav a {
  color: #ffffff;
}
</style>
