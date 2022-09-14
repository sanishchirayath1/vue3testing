<script lang="ts" setup>
import { useCounter } from "@/composables/counter";
import { useGlobalTodos } from "@/composables/globalTodos";
import { useTodos } from "@/composables/todos";

const todos = useTodos();
const globalTodos = useGlobalTodos();

const { count, countIncrement, countDecrement } = useCounter();
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <h1>Todos</h1>
      <ul class="todos">
        <li
          class="todo"
          v-for="(todo, index) in todos.state.todos"
          :key="index"
        >
          <span :class="{ done: todo.done }" @click="todos.toggleTodo(index)">{{
            todo.text
          }}</span>
          <button @click="todos.removeTodo(index)">x</button>
        </li>
      </ul>

      <form class="todoInput" @submit.prevent="todos.addTodo">
        <input
          type="text"
          v-model="todos.state.newTodo"
          placeholder="Add a new todo"
        />
      </form>
      <h1>{{ count }}</h1>
      <div class="btnContainer">
        <button @click="countDecrement">Count-</button>
        <button @click="countIncrement">Count+</button>
      </div>
    </div>
    <div class="wrapper">
      <h1>Global Todos</h1>
      <ul class="todos">
        <li
          class="todo"
          v-for="(todo, index) in globalTodos.state.todos"
          :key="index"
        >
          <span
            :class="{ done: todo.done }"
            @click="globalTodos.toggleTodo(index)"
            >{{ todo.text }}</span
          >
          <button @click="globalTodos.removeTodo(index)">x</button>
        </li>
      </ul>

      <form class="todoInput" @submit.prevent="globalTodos.addTodo">
        <input
          type="text"
          v-model="globalTodos.state.newTodo"
          placeholder="Add a new todo"
        />
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  .wrapper {
    padding: 1rem;
  }
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
h1 {
  color: var(--color-primary);
}
.todos {
  list-style: none;
  padding: 0;
  margin: 0;
  .todo {
    display: flex;
    align-items: center;
  }
  input {
    margin-right: 1rem;
  }
  span {
    cursor: pointer;
    font-size: 1.2rem;
    color: white;
  }
  button {
    margin-left: auto;
    border: none;
    background: hsla(160, 100%, 37%, 1);
  }
}
.done {
  text-decoration: line-through;
  opacity: 0.6;
}

.todoInput {
  margin-top: 2rem;
  input {
    color: white;
    padding: 0.5rem;
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    font-size: 1.2rem;
    background-color: black;
  }
}
</style>
