<script>
// utils
import { getRandomInt, decodeQ } from "./utils.ts";

// components
import Question from "./Question.vue";
import Answer from "./Answer.vue";
import AskHelp from "./AskHelp.vue";

export default {
  components: {
    Question,
    Answer,
    AskHelp,
  },
  props: ["api", "money", "questions"],
  data() {
    return {
      isGameOn: false,
      qIndex: -1,
      correctAnswerIndex: 0,
      possibleAnswers: [],
      currentQ: "",
    };
  },
  methods: {
    toggleGamePlay() {
      this.isGameOn = !this.isGameOn;
    },
    beginGame() {
      this.toggleGamePlay();
      this.nextQ();
    },
    nextQ() {
      this.qIndex += 1;
      if (this.qIndex >= this.questions.length) {
        console.log("you Win!");
        this.toggleGamePlay();
        return;
      }

      const currentQ = this.questions[this.qIndex];
      this.correctAnswerIndex = getRandomInt();
      console.log(this.correctAnswerIndex);
      this.possibleAnswers = [...currentQ.incorrect_answers].map((answer) =>
        decodeQ(answer)
      );
      this.possibleAnswers.splice(
        this.correctAnswerIndex,
        0,
        decodeQ(currentQ.correct_answer)
      );
      this.currentQ = decodeQ(currentQ.question);
    },
    checkAnswer(i) {
      if (i === this.correctAnswerIndex) {
        this.nextQ();
      } else {
        this.toggleGamePlay();
      }
    },
  },
};
</script>

<template>
  <button @click="beginGame" v-if="!isGameOn">Play</button>
  <div class="app" v-else>
    <main>
      <Question :question="currentQ" />

      <div class="grid">
        <Answer
          @click="checkAnswer(0)"
          :choice="A"
          :possibleAnswer="possibleAnswers[0]"
        />
        <Answer
          @click="checkAnswer(1)"
          :choice="B"
          :possibleAnswer="possibleAnswers[1]"
        />
        <Answer
          @click="checkAnswer(2)"
          :choice="C"
          :possibleAnswer="possibleAnswers[2]"
        />
        <Answer
          @click="checkAnswer(3)"
          :choice="D"
          :possibleAnswer="possibleAnswers[3]"
        />
      </div>
    </main>

    <aside>
      <AskHelp />

      <ul>
        <li v-for="{ level, amount } in money">{{ level }} - ${{ amount }}</li>
      </ul>
    </aside>
  </div>
</template>

<style scoped></style>
