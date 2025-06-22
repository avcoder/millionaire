<script>
import Answer from "./Answer.vue";

export default {
  components: {
    Answer,
  },
  props: ["possibleAnswers", "checkAnswerHandler"],
};
</script>

<template>
  <div class="grid">
    <Answer
      @click="this.checkAnswerHandler(0)"
      :choice="A"
      :possibleAnswer="this.possibleAnswers[0]"
    />
    <Answer
      @click="this.checkAnswerHandler(1)"
      :choice="B"
      :possibleAnswer="this.possibleAnswers[1]"
    />
    <Answer
      @click="this.checkAnswerHandler(2)"
      :choice="C"
      :possibleAnswer="this.possibleAnswers[2]"
    />
    <Answer
      @click="this.checkAnswerHandler(3)"
      :choice="D"
      :possibleAnswer="this.possibleAnswers[3]"
    />
  </div>
</template>

<style>
.grid {
  grid-area: grid;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: space-evenly;
  gap: 20px;
}
</style>
