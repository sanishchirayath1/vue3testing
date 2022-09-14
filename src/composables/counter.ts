import { ref, reactive } from "vue";

const count = ref(0);

export function useCounter() {
  const state = reactive({
    count: 0,
  });

  const increment = () => {
    state.count++;
  };

  const decrement = () => {
    state.count--;
  };

  const countIncrement = () => {
    count.value++;
  };

  const countDecrement = () => {
    count.value--;
  };

  return {
    state,
    count,
    increment,
    decrement,
    countIncrement,
    countDecrement,
  };
}
