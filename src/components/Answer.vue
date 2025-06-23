<script>
export default {
  props: ["choice", "possibleAnswer"],
};
</script>

<template>
  <button class="answer">
    <span class="choice">{{ choice }}:</span> <span>{{ possibleAnswer }}</span>
  </button>
</template>

<style>
.answer {
  cursor: pointer;
  display: block;
  justify-self: center;
  font-family: Arial, sans-serif;
  font-size: 24px;
  width: 450px;
  padding: 40px 0;
  color: #fff;
  /* taken from https://uigradients.com/#Lawrencium */
  background: #0f0c29;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #24243e, #302b63, #0f0c29);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #24243e, #302b63, #0f0c29);
}

.answer span {
  color: #fff;
}

.answer .choice {
  color: orange;
}
</style>
