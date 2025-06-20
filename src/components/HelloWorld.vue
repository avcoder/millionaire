<script>
export default {
  props: ["api", "money", "questions"],
  data() {
    return {
      isGameOn: false,
    };
  },
  methods: {
    toggleGamePlay() {
      this.isGameOn = !this.isGameOn;
    },
  },
};
</script>

<template>
  <button @click="toggleGamePlay" v-if="!isGameOn">Play</button>
  <div class="app" v-else>
    <main>
      <div class="header">
        <!-- Place to place messages or voting results etc -->
      </div>
      <h1 class="question" v-html="currentQ"></h1>

      <button id="a" class="item-a">
        <span>A: </span><span>{{ answer1 }}</span>
      </button>
      <button id="b" class="item-b">
        <span>B: </span><span>{{ answer2 }}</span>
      </button>
      <button id="c" class="item-c">
        <span>C: </span><span>{{ answer3 }}</span>
      </button>
      <button id="d" class="item-d">
        <span>D: </span><span>{{ answer4 }}</span>
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

<style scoped>
section {
  min-width: 250px;
}

.app {
  display: flex;
}

.app ul {
  list-style-type: none;
  color: #cad622;
  font-size: 24px;
  padding-left: 30%;
}

.app li {
  margin-top: 10px;
}
.app li:nth-child(1),
li:nth-child(6),
li:nth-child(11) {
  color: #fff;
}
.app li span {
  margin-left: 30px;
}

main {
  display: grid;
  grid-template-columns: 500px 500px 1fr;
  grid-template-rows: auto;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  grid-template-areas:
    "header header header"
    "question question sidebar"
    "itema itemb sidebar"
    "itemc itemd sidebar";
}

.header {
}

.question {
  grid-area: question;
  justify-self: center;
  border: 1px solid white;
  padding: 70px 30%;
  /* taken from https://uigradients.com/#Lawrencium */
  background: #0f0c29;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
}

.active {
  border-top: 1px solid skyblue;
  border-bottom: 1px solid skyblue;
}

main button {
  cursor: pointer;
  display: block;
  justify-self: center;
  font-family: Arial, sans-serif;
  font-size: 24px;
  width: 95%;
  padding: 40px 0;
  color: #fff;
  /* taken from https://uigradients.com/#Lawrencium */
  background: #0f0c29;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #24243e, #302b63, #0f0c29);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #24243e, #302b63, #0f0c29);
}

main button span {
  color: #fff;
}

main button.item-a {
  grid-area: itema;
}
main button.item-b {
  grid-area: itemb;
}
main button.item-c {
  grid-area: itemc;
}
main button.item-d {
  grid-area: itemd;
}
.final_answer {
  background: #709634 !important;
}
.invisible {
  visibility: hidden !important;
}
.ghost {
  display: none;
}

aside {
  grid-area: sidebar;
  flex-grow: 1;
  background-color: rgba(0, 0, 0, 0.5);
}

aside i {
  font-size: 80px;
}
aside section {
  text-align: center;
}
aside button {
  cursor: pointer;
  border-radius: 10px 20px;
  margin: 10px;
  color: #fff;

  /* taken from https://uigradients.com/#Lawrencium */
  background: #000428; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #004e92,
    #000428
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #004e92, #000428);
}

.settings {
  margin-top: 100px;
}
.settings button {
  background: grey;
  margin: 3px;
  border-radius: 0 0 0 0;
}
.settings button i {
  font-size: 24px;
}

.header h1 {
  text-align: center;
  font-size: 64px;
}
</style>
