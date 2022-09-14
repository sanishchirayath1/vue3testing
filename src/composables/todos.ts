import { reactive } from "vue";

interface Todo {
  text: string;
  done: boolean;
}

interface State {
  todos: Todo[];
  newTodo: string;
}

export function useTodos() {
  const state = reactive<State>({
    todos: [],
    newTodo: "",
  });

  const addTodo = () => {
    state.todos.push({
      text: state.newTodo,
      done: false,
    });
    state.newTodo = "";
  };

  const removeTodo = (index: number) => {
    state.todos.splice(index, 1);
  };

  const toggleTodo = (index: number) => {
    state.todos[index].done = !state.todos[index].done;
  };

  return {
    state,
    addTodo,
    removeTodo,
    toggleTodo,
  };
}
