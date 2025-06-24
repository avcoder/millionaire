<template>
  <div>
    <button @click="goPlay">Play</button>
  </div>
</template>

<script>
export default {
  methods: {
    goPlay() {
      this.$router.push("/play");
    },
  },
};
</script>
