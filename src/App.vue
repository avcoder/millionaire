<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";

const api =
  "https://opentdb.com/api.php?amount=15&category=18&type=multiple&encode=url3986";

const money = [
  { level: "1", amount: "1,000,000" },
  { level: "2", amount: "500,000" },
  { level: "3", amount: "250,000" },
  { level: "4", amount: "100,000" },
  { level: "5", amount: "50,000" },
  { level: "6", amount: "25,000" },
  { level: "7", amount: "16,000" },
  { level: "8", amount: "8,000" },
  { level: "9", amount: "4,000" },
  { level: "10", amount: "2,000" },
  { level: "11", amount: "1,000" },
  { level: "12", amount: "500" },
  { level: "13", amount: "300" },
  { level: "14", amount: "200" },
  { level: "15", amount: "100" },
];
</script>

<template>
  <HelloWorld :api="api" :money="money" />
</template>

<style scoped></style>
