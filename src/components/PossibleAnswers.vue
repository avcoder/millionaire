<script>
import Answer from "@/components//Answer.vue";

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
      @click="checkAnswerHandler(0)"
      choice="A"
      :possibleAnswer="possibleAnswers[0]"
    />
    <Answer
      @click="checkAnswerHandler(1)"
      choice="B"
      :possibleAnswer="possibleAnswers[1]"
    />
    <Answer
      @click="checkAnswerHandler(2)"
      choice="C"
      :possibleAnswer="possibleAnswers[2]"
    />
    <Answer
      @click="checkAnswerHandler(3)"
      choice="D"
      :possibleAnswer="possibleAnswers[3]"
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
