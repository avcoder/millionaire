<script>
import { getRandomInt, decodeQ } from "./utils.ts";

// components
import Question from "./Question.vue";
import Answer from "./Answer.vue";

export default {
  components: {
    Question,
    Answer,
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
        this.isGameOn = false;
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
        this.isGameOn = false;
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
      <section>
        <button id="fifty_fifty">
          <i class="ms-Icon ms-Icon--Contrast" aria-hidden="true"></i>
        </button>
        <button id="ask_audience">
          <i class="ms-Icon ms-Icon--Group" aria-hidden="true"></i>
        </button>
        <button id="phone_friend">
          <i class="ms-Icon ms-Icon--Phone" aria-hidden="true"></i>
        </button>
      </section>

      <ul>
        <li v-for="{ level, amount } in money">{{ level }} - ${{ amount }}</li>
      </ul>
    </aside>
  </div>
</template>

<style scoped></style>
