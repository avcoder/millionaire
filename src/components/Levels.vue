<script>
export default {
  props: ["qIndex", "levels"],
};
</script>

<template>
  <ul class="levels">
    <li v-for="{ level, amount } in levels">{{ level }} - ${{ amount }}</li>
  </ul>
</template>

<style>
.levels {
  list-style-type: none;
  color: #cad622;
  font-size: 24px;
  padding-left: 30%;
}

.levels li {
  margin-top: 10px;
}
.levels li:nth-child(1),
li:nth-child(6),
li:nth-child(11) {
  color: #fff;
}
.levels li span {
  margin-left: 30px;
}

.active {
  border-top: 1px solid skyblue;
  border-bottom: 1px solid skyblue;
}
</style>
