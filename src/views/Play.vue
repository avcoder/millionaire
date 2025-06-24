<script>
// utils
import {
  getRandomInt,
  decodeQ,
  money,
  backupQuestions,
  music,
} from "@/views/utils/utils.ts";

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
  mounted() {
    const getData = async () => {
      const API =
        "https://opentdb.com/api.php?amount=15&category=18&type=multiple&encode=url3986";

      try {
        const res = await fetch(API);
        if (!res.ok) {
          this.questions = [...backupQuestions];
          this.nextQ();
          return;
        }

        const data = await res.json();
        this.questions = data?.results
          ?.map((q, i) => ({ ...q, ...money[i] }))
          ?.reverse();
        this.nextQ();
        music.init();
      } catch (e) {
        console.log("Error fetching data: ", e);
      }
    };

    getData();
  },
  data() {
    return {
      isGameOn: false,
      questions: [],
      qIndex: -1,
      correctAnswerIndex: 0,
      possibleAnswers: [],
      currentQ: "",
    };
  },
  watch: {
    qIndex(newLevel, oldLevel) {
      music.check(newLevel);

      if (newLevel > oldLevel && newLevel !== 0) {
        music.correct();
      }
    },
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
        music.end();
        this.$router.push("/lost");
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
