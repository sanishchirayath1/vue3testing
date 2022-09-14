<script lang="ts" setup>
import { useCounter } from "@/composables/counter";

const data = useCounter();
</script>

<template>
  <div class="about">
    <h1 class="green">This is an about page</h1>
    <h2>Count: {{ data.count }}</h2>
    <div class="btnContainer">
      <button @click="data.countDecrement">Count-</button>
      <button @click="data.countIncrement">Count+</button>
    </div>

    <h2>State Count: {{ data.state.count }}</h2>
    <div class="btnContainer">
      <button @click="data.decrement">Count-</button>
      <button @click="data.increment">Count+</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btnContainer {
    display: flex;
    button {
      margin-right: 0.5rem;
      border: none;
      background: hsla(160, 100%, 37%, 1);
      color: #fff;
      padding: 0.5rem 1.5rem;
      border-radius: 0.5rem;
    }
  }
}
</style>
