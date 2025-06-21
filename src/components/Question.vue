<template>
  <h1 class="question">{{ question }}</h1>
</template>

<script>
export default {
  props: ["question"],
};
</script>

<style>
.question {
  grid-area: question;
  justify-self: center;
  border: 1px solid white;
  padding: 75px;
  /* taken from https://uigradients.com/#Lawrencium */
  background: #0f0c29;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  min-width: 800px;
}
</style>
