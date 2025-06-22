<script>
export default {
  props: ["qIndex", "levels"],
};
</script>

<template>
  <ul>
    <li v-for="{ level, amount } in levels">{{ level }} - ${{ amount }}</li>
  </ul>
</template>
