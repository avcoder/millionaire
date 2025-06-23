<script>
// utils
import { getRandomInt, decodeQ } from "@/views/utils.ts";

// components
import Question from "@/components/Question.vue";
import AskHelp from "@/components/AskHelp.vue";
import PossibleAnswers from "@/components/PossibleAnswers.vue";
import Levels from "@/components/Levels.vue";

export default {
  components: {
    Question,
    AskHelp,
    PossibleAnswers,
    Levels,
  },
  props: ["api", "questions"],
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
      this.qIndex = -1;
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
  <div class="app">
    <main>
      <Question :question="currentQ" />

      <PossibleAnswers
        :possibleAnswers="possibleAnswers"
        :checkAnswerHandler="checkAnswer"
      />
    </main>

    <aside>
      <AskHelp />
      <Levels :qIndex="qIndex" :questions="questions" />
    </aside>
  </div>
</template>
