<script lang="ts" setup>
// import { reactive } from "vue";

import { useCounter } from "@/composables/counter";

defineProps<{
  msg: string;
}>();

// const state = reactive({ count: 0 });

// function increment() {
//   state.count++;
// }

// function decrement() {
//   state.count--;
// }

// // don't forget to expose the function as well.
// return {
//   state,
//   increment,
// };

const data = useCounter();
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2>Count: {{ data.count }}</h2>
    <button @click="data.countDecrement">Count-</button>
    <button @click="data.countIncrement">Count+</button>

    <h2>State Count: {{ data.state.count }}</h2>
    <button @click="data.decrement">Count-</button>
    <button @click="data.increment">Count+</button>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

button {
  margin-right: 0.5rem;
  border: none;
  background: hsla(160, 100%, 37%, 1);
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
}

.greetings {
  h1,
  h3 {
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .greetings {
    h1,
    h3 {
      text-align: left;
    }
  }
}
</style>
