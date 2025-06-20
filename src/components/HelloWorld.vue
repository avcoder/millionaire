<script>
import { getRandomInt, decodeQ } from "./utils.ts";

export default {
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
      <div class="header">
        <!-- Place to place messages or voting results etc -->
      </div>
      <h1 class="question">{{ currentQ }}</h1>

      <button id="a" class="item-a" @click="checkAnswer(0)">
        <span>A: </span><span>{{ possibleAnswers[0] }}</span>
      </button>
      <button id="b" class="item-b" @click="checkAnswer(1)">
        <span>B: </span><span>{{ possibleAnswers[1] }}</span>
      </button>
      <button id="c" class="item-c" @click="checkAnswer(2)">
        <span>C: </span><span>{{ possibleAnswers[2] }}</span>
      </button>
      <button id="d" class="item-d" @click="checkAnswer(3)">
        <span>D: </span><span>{{ possibleAnswers[3] }}</span>
      </button>
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
